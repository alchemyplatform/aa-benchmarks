import {secp256k1} from "ethereum-cryptography/secp256k1";
import hre from "hardhat";
import {
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  keccak256,
  maxUint48,
  pad,
  slice,
  zeroAddress,
} from "viem";
import {AccountConfig, AccountDataV06} from "../accounts";
import {SAFE_ARTIFACTS} from "../artifacts/safe";
import {getEntryPointV06} from "../utils/entryPoint";

async function accountFixture(): Promise<AccountDataV06> {
  const [walletClient] = await hre.viem.getWalletClients();

  for (const {address, bytecode} of Object.values(SAFE_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const safeProxyFactory = getContract({
    address: SAFE_ARTIFACTS.SafeProxyFactory.address,
    abi: SAFE_ARTIFACTS.SafeProxyFactory.abi,
    client: walletClient,
  });

  const safe4337Module = getContract({
    address: SAFE_ARTIFACTS.Safe4337Module.address,
    abi: SAFE_ARTIFACTS.Safe4337Module.abi,
    client: walletClient,
  });

  function getSetupData(ownerAddress: `0x${string}`) {
    return encodeFunctionData({
      abi: [
        getAbiItem({
          abi: SAFE_ARTIFACTS.Safe.abi,
          name: "setup",
        }),
      ],
      args: [
        [ownerAddress],
        1n,
        SAFE_ARTIFACTS.AddModulesLib.address,
        encodeFunctionData({
          abi: [
            getAbiItem({
              abi: SAFE_ARTIFACTS.AddModulesLib.abi,
              name: "enableModules",
            }),
          ],
          args: [[SAFE_ARTIFACTS.Safe4337Module.address]],
        }),
        SAFE_ARTIFACTS.Safe4337Module.address,
        zeroAddress,
        0n,
        zeroAddress,
      ],
    });
  }

  return {
    entryPoint: getEntryPointV06({walletClient}),
    createAccount: async (salt, ownerAddress) => {
      return await safeProxyFactory.write.createProxyWithNonce([
        SAFE_ARTIFACTS.Safe.address,
        getSetupData(ownerAddress),
        salt,
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      const combinedSalt = keccak256(
        encodePacked(
          ["bytes32", "uint256"],
          [keccak256(getSetupData(ownerAddress)), salt],
        ),
      );
      const proxyCreationCode = await safeProxyFactory.read.proxyCreationCode();
      const deploymentData = encodePacked(
        ["bytes", "bytes32"],
        [proxyCreationCode, pad(SAFE_ARTIFACTS.Safe.address)],
      );
      const rawAddress = keccak256(
        encodePacked(
          ["bytes1", "address", "bytes32", "bytes32"],
          [
            "0xff",
            safeProxyFactory.address,
            combinedSalt,
            keccak256(deploymentData),
          ],
        ),
      );
      return slice(rawAddress, 12);
    },
    getOwnerSignature: async (owner, userOp, entryPoint) => {
      const validAfter = 0;
      const validUntil = Number(maxUint48);

      const safeOp = encodeAbiParameters(
        [
          {name: "typeHash", type: "bytes32"},
          {name: "safe", type: "address"},
          {name: "nonce", type: "uint256"},
          {name: "initCodeHash", type: "bytes32"},
          {name: "callDataHash", type: "bytes32"},
          {name: "callGasLimit", type: "uint256"},
          {name: "verificationGasLimit", type: "uint256"},
          {name: "preVerificationGas", type: "uint256"},
          {name: "maxFeePerGas", type: "uint256"},
          {name: "maxPriorityFeePerGas", type: "uint256"},
          {name: "paymasterAndDataHash", type: "bytes32"},
          {name: "validAfter", type: "uint48"},
          {name: "validUntil", type: "uint48"},
          {name: "entryPoint", type: "address"},
        ],
        [
          keccak256(
            encodePacked(
              ["string"],
              [
                "SafeOp(address safe,uint256 nonce,bytes initCode,bytes callData,uint256 callGasLimit,uint256 verificationGasLimit,uint256 preVerificationGas,uint256 maxFeePerGas,uint256 maxPriorityFeePerGas,bytes paymasterAndData,uint48 validAfter,uint48 validUntil,address entryPoint)",
              ],
            ),
          ),
          userOp.sender,
          userOp.nonce,
          keccak256(userOp.initCode),
          keccak256(userOp.callData),
          userOp.callGasLimit,
          userOp.verificationGasLimit,
          userOp.preVerificationGas,
          userOp.maxFeePerGas,
          userOp.maxPriorityFeePerGas,
          keccak256(userOp.paymasterAndData),
          validAfter,
          validUntil,
          entryPoint.address,
        ],
      );

      const domainSeparator = await safe4337Module.read.domainSeparator();
      const operationData = encodePacked(
        ["bytes1", "bytes1", "bytes32", "bytes32"],
        ["0x19", "0x01", domainSeparator, keccak256(safeOp)],
      );
      const signature = ethSignLegacy(keccak256(operationData));

      return encodePacked(
        ["uint48", "uint48", "bytes"],
        [validAfter, validUntil, signature],
      );
    },
    encodeUserOpExecute: (to, value, data) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: SAFE_ARTIFACTS.Safe4337Module.abi,
            name: "executeUserOp",
          }),
        ],
        args: [to, value, data, 0], // Operation.CALL = 0
      });
    },
    encodeRuntimeExecute: async (to, value, data, owner, accountAddress) => {
      if (!owner || !accountAddress) {
        throw new Error("`owner` and `accountAddress` are required.");
      }

      const account = getContract({
        address: accountAddress,
        abi: SAFE_ARTIFACTS.Safe.abi,
        client: owner,
      });
      const nonce = await account.read.nonce();
      const signature = await owner.signTypedData({
        domain: {
          chainId: 31337,
          verifyingContract: accountAddress,
        },
        types: {
          SafeTx: [
            {name: "to", type: "address"},
            {name: "value", type: "uint256"},
            {name: "data", type: "bytes"},
            {name: "operation", type: "uint8"},
            {name: "safeTxGas", type: "uint256"},
            {name: "baseGas", type: "uint256"},
            {name: "gasPrice", type: "uint256"},
            {name: "gasToken", type: "address"},
            {name: "refundReceiver", type: "address"},
            {name: "nonce", type: "uint256"},
          ],
        },
        primaryType: "SafeTx",
        message: {
          to,
          value,
          data,
          operation: 0, // Operation.CALL = 0
          safeTxGas: 0n,
          baseGas: 0n,
          gasPrice: 0n,
          gasToken: zeroAddress,
          refundReceiver: zeroAddress,
          nonce,
        },
      });

      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: SAFE_ARTIFACTS.Safe.abi,
            name: "execTransaction",
          }),
        ],
        args: [
          to,
          value,
          data,
          0, // Operation.CALL = 0
          0n,
          0n,
          0n,
          zeroAddress,
          zeroAddress,
          signature,
        ],
      });
    },
    getDummySignature: (_userOp) => {
      return "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
    },
    getInitCode: (salt, ownerAddress) => {
      return encodePacked(
        ["address", "bytes"],
        [
          safeProxyFactory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: safeProxyFactory.abi,
                name: "createProxyWithNonce",
              }),
            ],
            args: [
              SAFE_ARTIFACTS.Safe.address,
              getSetupData(ownerAddress),
              salt,
            ],
          }),
        ],
      );
    },
  };
}

/**
 * Viem does not expose a way to sign messages without the prefix, which we
 * need for Safe.
 */
function ethSignLegacy(data: `0x${string}`) {
  // Key of owner account.
  const key =
    "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
  const signature = secp256k1.sign(data.slice(2), key);
  return encodePacked(
    ["uint256", "uint256", "uint8"],
    [signature.r, signature.s, 27 + signature.recovery],
  );
}

export const safe: AccountConfig = {
  name: "Safe v1.4.1",
  accountFixture,
};
