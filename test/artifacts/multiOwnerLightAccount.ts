export const MULTI_OWNER_LIGHT_ACCOUNT_ARTIFACTS = {
  MultiOwnerLightAccountFactory: {
    address: "0x000000000019d2Ee9F2729A65AfE20bb0020AefC",
    abi: [
      {
        inputs: [
          {internalType: "address", name: "owner", type: "address"},
          {
            internalType: "contract IEntryPoint",
            name: "entryPoint",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [{internalType: "address", name: "target", type: "address"}],
        name: "AddressEmptyCode",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "account", type: "address"}],
        name: "AddressInsufficientBalance",
        type: "error",
      },
      {inputs: [], name: "FailedInnerCall", type: "error"},
      {inputs: [], name: "InvalidAction", type: "error"},
      {
        inputs: [
          {internalType: "address", name: "entryPoint", type: "address"},
        ],
        name: "InvalidEntryPoint",
        type: "error",
      },
      {inputs: [], name: "InvalidOwners", type: "error"},
      {
        inputs: [{internalType: "address", name: "owner", type: "address"}],
        name: "OwnableInvalidOwner",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "account", type: "address"}],
        name: "OwnableUnauthorizedAccount",
        type: "error",
      },
      {inputs: [], name: "OwnersArrayEmpty", type: "error"},
      {inputs: [], name: "OwnersLimitExceeded", type: "error"},
      {
        inputs: [{internalType: "address", name: "token", type: "address"}],
        name: "SafeERC20FailedOperation",
        type: "error",
      },
      {inputs: [], name: "TransferFailed", type: "error"},
      {inputs: [], name: "ZeroAddressNotAllowed", type: "error"},
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferStarted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        inputs: [],
        name: "ACCOUNT_IMPLEMENTATION",
        outputs: [
          {
            internalType: "contract MultiOwnerLightAccount",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "ENTRY_POINT",
        outputs: [
          {internalType: "contract IEntryPoint", name: "", type: "address"},
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "uint32", name: "unstakeDelay", type: "uint32"},
          {internalType: "uint256", name: "amount", type: "uint256"},
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address[]", name: "owners", type: "address[]"},
          {internalType: "uint256", name: "salt", type: "uint256"},
        ],
        name: "createAccount",
        outputs: [
          {
            internalType: "contract MultiOwnerLightAccount",
            name: "account",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "owner", type: "address"},
          {internalType: "uint256", name: "salt", type: "uint256"},
        ],
        name: "createAccountSingle",
        outputs: [
          {
            internalType: "contract MultiOwnerLightAccount",
            name: "account",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address[]", name: "owners", type: "address[]"},
          {internalType: "uint256", name: "salt", type: "uint256"},
        ],
        name: "getAddress",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "pendingOwner",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "newOwner", type: "address"}],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address payable", name: "to", type: "address"},
          {internalType: "address", name: "token", type: "address"},
          {internalType: "uint256", name: "amount", type: "uint256"},
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address payable", name: "to", type: "address"},
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {stateMutability: "payable", type: "receive"},
    ],
    bytecode:
      "0x60806040818152600480361015610021575b505050361561001f57600080fd5b005b600092833560e01c9081632796c32314610c6d57508063290ab98414610bfe578063715018a614610b9f57806379ba509714610abf5780638da5cb5b14610a6e57806394430fa5146109ff57806394f7e8e0146108c4578063b54c02f21461066857838163bb9fe6bf146105a857508063c23a5cea146104ae578063d9caed12146102bb578063e30c397814610264578063f2fde38b146101b75763fbb1c3d403610011578183927ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b35781359163ffffffff83168093036101ae5761010a61116b565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0321692833b156101aa5760248592845195869384927f0396cb600000000000000000000000000000000000000000000000000000000084528301528235905af19081156101a1575061018e5750f35b61019790610f46565b61019e5780f35b80fd5b513d84823e3d90fd5b8480fd5b505050fd5b5050fd5b833461019e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019e576101ef610efd565b6101f761116b565b73ffffffffffffffffffffffffffffffffffffffff80911690817fffffffffffffffffffffffff000000000000000000000000000000000000000060015416176001558254167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e227008380a380f35b5050346102b757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102b75760209073ffffffffffffffffffffffffffffffffffffffff600154169051908152f35b5080fd5b5090346104aa5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104aa576102f4610efd565b6024359073ffffffffffffffffffffffffffffffffffffffff908183168093036104a65761032061116b565b1690811561047e578491908061037257508180809247905af16103416110b6565b501561034c57505080f35b517f90b8ec18000000000000000000000000000000000000000000000000000000008152fd5b928092505160208101917fa9059cbb00000000000000000000000000000000000000000000000000000000835260248201526044356044820152604481526080810181811067ffffffffffffffff821117610450578352516103e5918691829182875af16103de6110b6565b90846112a0565b805190811515918261042c575b50506103fe5750505080f35b6024935051917f5274afe7000000000000000000000000000000000000000000000000000000008352820152fd5b81925090602091810103126101aa57602001518015908115036101aa5738806103f2565b6041867f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b5050517f8579befe000000000000000000000000000000000000000000000000000000008152fd5b8580fd5b8280fd5b509190346102b75760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102b7576104e8610efd565b906104f161116b565b73ffffffffffffffffffffffffffffffffffffffff809216918215610580579383947f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0321692833b156101aa576024859283855196879485937fc23a5cea0000000000000000000000000000000000000000000000000000000085528401525af19081156101a1575061018e5750f35b8482517f8579befe000000000000000000000000000000000000000000000000000000008152fd5b808484346101b357827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b3576105e161116b565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da03216803b156101ae5783918351809581937fbb9fe6bf0000000000000000000000000000000000000000000000000000000083525af19081156101a1575061065c575080f35b61066590610f46565b80f35b5090346104aa57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104aa5767ffffffffffffffff9180358381116101aa57366023820112156101aa57808201359384116101aa576024810190602436918660051b0101116101aa576106e86106e3368684610fca565b6111bc565b73ffffffffffffffffffffffffffffffffffffffff9361071460243561070f368486610fca565b611114565b9486908551947fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e20768752602092616009602052827f000000000000000000000000d2c27f9ee8e4355f71915ffd5568cb3433b6823d16601e5268603d3d8160223d3973600a52605f98602199605f60212060358a01523060581b895260ff89538160158a0152605589209a8b3b156108a45750505050816001985b8789528a6060521697156107eb575b6020888851908152f35b873b156108a057928894928187957fa224cee7000000000000000000000000000000000000000000000000000000008752602060248801918801525260448501939286905b8382106108765750505050508190038183875af1801561086c576020945061085d575b80808080806107e1565b61086690610f46565b38610853565b82513d86823e3d90fd5b9295509295509283806001928461088c8a610f25565b168152019601920192899593879592610830565b8880fd5b9091929a508bf580156108b85782906107d2565b5063301164258952601cfd5b509190346102b757807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102b757823567ffffffffffffffff81116104aa57366023820112156104aa5760209381602461092693369301359101610fca565b90610930826111bc565b61095273ffffffffffffffffffffffffffffffffffffffff9260243590611114565b81517fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e207683526160098652837f000000000000000000000000d2c27f9ee8e4355f71915ffd5568cb3433b6823d16601e5268603d3d8160223d3973600a52605f6021209083528460605260ff85536035523060601b60015260155260558320926035525191168152f35b5050346102b757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102b7576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032168152f35b5050346102b757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102b75773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b5090346104aa57827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104aa576001549173ffffffffffffffffffffffffffffffffffffffff913383851603610b6f5750507fffffffffffffffffffffffff0000000000000000000000000000000000000000809216600155825491339083161783553391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b6024925051907f118cdaa70000000000000000000000000000000000000000000000000000000082523390820152fd5b50913461019e57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019e5750610bd861116b565b517f4a7f394f000000000000000000000000000000000000000000000000000000008152fd5b5050346102b757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102b7576020905173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000d2c27f9ee8e4355f71915ffd5568cb3433b6823d168152f35b9291905034610ef957817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ef957610ca7610efd565b9073ffffffffffffffffffffffffffffffffffffffff809216938415610ed45750825183810181811067ffffffffffffffff821117610ea857845260019460018252602082016020368237825115610e7c5752610d0660243582611114565b928695808651957fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e20768852616009602052837f000000000000000000000000d2c27f9ee8e4355f71915ffd5568cb3433b6823d16601e5268603d3d8160223d3973600a52605f6021605f60212060358a01523060581b895260ff89538260158a01526055892094610e41575b5050505084865287606052169415610dd2575b6020858551908152f35b908591853b156104aa57610e16849291602084937fa224cee7000000000000000000000000000000000000000000000000000000008552840152602483019061106c565b038183875af1801561086c5760209450610e32575b8080610dc8565b610e3b90610f46565b38610e2b565b849a93943b15610e5957505050509538808080610db5565b91935091985089f58015610e705738808080610db5565b8363301164258952601cfd5b6024886032867f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b6024876041857f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b7ff02e8ac1000000000000000000000000000000000000000000000000000000008152fd5b8380fd5b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610f2057565b600080fd5b359073ffffffffffffffffffffffffffffffffffffffff82168203610f2057565b67ffffffffffffffff8111610f5a57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610f5a57604052565b90929167ffffffffffffffff8411610f5a578360051b6020926020604051610ff482850182610f89565b8097815201918101928311610f2057905b8282106110125750505050565b83809161101e84610f25565b815201910190611005565b805182101561103d5760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90815180825260208080930193019160005b82811061108c575050505090565b835173ffffffffffffffffffffffffffffffffffffffff168552938101939281019260010161107e565b3d1561110f573d9067ffffffffffffffff8211610f5a576040519161110360207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160184610f89565b82523d6000602084013e565b606090565b906111656040518092611133602083019560408752606084019061106c565b906040830152037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610f89565b51902090565b73ffffffffffffffffffffffffffffffffffffffff60005416330361118c57565b60246040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152fd5b80511561127657606481511161124c5780516000805b8282106111df5750505050565b73ffffffffffffffffffffffffffffffffffffffff9081806112018588611029565b511691161015611222576001906112188386611029565b51169101906111d2565b60046040517ff02e8ac1000000000000000000000000000000000000000000000000000000008152fd5b60046040517f7a64f3a6000000000000000000000000000000000000000000000000000000008152fd5b60046040517f0a5c1dfd000000000000000000000000000000000000000000000000000000008152fd5b906112df57508051156112b557805190602001fd5b60046040517f1425ea42000000000000000000000000000000000000000000000000000000008152fd5b81511580611337575b6112f0575090565b60249073ffffffffffffffffffffffffffffffffffffffff604051917f9996b315000000000000000000000000000000000000000000000000000000008352166004820152fd5b50803b156112e856fea26469706673582212203081f870f4239d3542b128456d5312c0122b5922887923a5a0cbdf2f0053fe1564736f6c63430008170033",
  },
  MultiOwnerLightAccount: {
    address: "0xd2c27F9eE8E4355f71915ffD5568cB3433b6823D",
    abi: [
      {
        inputs: [
          {
            internalType: "contract IEntryPoint",
            name: "entryPoint_",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {inputs: [], name: "ArrayLengthMismatch", type: "error"},
      {inputs: [], name: "ECDSAInvalidSignature", type: "error"},
      {
        inputs: [{internalType: "uint256", name: "length", type: "uint256"}],
        name: "ECDSAInvalidSignatureLength",
        type: "error",
      },
      {
        inputs: [{internalType: "bytes32", name: "s", type: "bytes32"}],
        name: "ECDSAInvalidSignatureS",
        type: "error",
      },
      {inputs: [], name: "EmptyOwnersNotAllowed", type: "error"},
      {inputs: [], name: "InvalidInitialization", type: "error"},
      {
        inputs: [{internalType: "address", name: "owner", type: "address"}],
        name: "InvalidOwner",
        type: "error",
      },
      {inputs: [], name: "InvalidSignatureType", type: "error"},
      {
        inputs: [{internalType: "address", name: "caller", type: "address"}],
        name: "NotAuthorized",
        type: "error",
      },
      {inputs: [], name: "NotInitializing", type: "error"},
      {
        inputs: [{internalType: "address", name: "owner", type: "address"}],
        name: "OwnerDoesNotExist",
        type: "error",
      },
      {inputs: [], name: "UnauthorizedCallContext", type: "error"},
      {inputs: [], name: "UpgradeFailed", type: "error"},
      {inputs: [], name: "ZeroAddressNotAllowed", type: "error"},
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint64",
            name: "version",
            type: "uint64",
          },
        ],
        name: "Initialized",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "contract IEntryPoint",
            name: "entryPoint",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address[]",
            name: "owners",
            type: "address[]",
          },
        ],
        name: "LightAccountInitialized",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address[]",
            name: "addedOwners",
            type: "address[]",
          },
          {
            indexed: false,
            internalType: "address[]",
            name: "removedOwners",
            type: "address[]",
          },
        ],
        name: "OwnersUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "implementation",
            type: "address",
          },
        ],
        name: "Upgraded",
        type: "event",
      },
      {
        inputs: [],
        name: "addDeposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "eip712Domain",
        outputs: [
          {internalType: "bytes1", name: "fields", type: "bytes1"},
          {internalType: "string", name: "name", type: "string"},
          {internalType: "string", name: "version", type: "string"},
          {internalType: "uint256", name: "chainId", type: "uint256"},
          {internalType: "address", name: "verifyingContract", type: "address"},
          {internalType: "bytes32", name: "salt", type: "bytes32"},
          {internalType: "uint256[]", name: "extensions", type: "uint256[]"},
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "entryPoint",
        outputs: [
          {internalType: "contract IEntryPoint", name: "", type: "address"},
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "dest", type: "address"},
          {internalType: "uint256", name: "value", type: "uint256"},
          {internalType: "bytes", name: "func", type: "bytes"},
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address[]", name: "dest", type: "address[]"},
          {internalType: "bytes[]", name: "func", type: "bytes[]"},
        ],
        name: "executeBatch",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address[]", name: "dest", type: "address[]"},
          {internalType: "uint256[]", name: "value", type: "uint256[]"},
          {internalType: "bytes[]", name: "func", type: "bytes[]"},
        ],
        name: "executeBatch",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "getDeposit",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "bytes", name: "message", type: "bytes"}],
        name: "getMessageHash",
        outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address[]", name: "owners_", type: "address[]"},
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes32", name: "hash", type: "bytes32"},
          {internalType: "bytes", name: "signature", type: "bytes"},
        ],
        name: "isValidSignature",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "", type: "address"},
          {internalType: "address", name: "", type: "address"},
          {internalType: "uint256[]", name: "", type: "uint256[]"},
          {internalType: "uint256[]", name: "", type: "uint256[]"},
          {internalType: "bytes", name: "", type: "bytes"},
        ],
        name: "onERC1155BatchReceived",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "", type: "address"},
          {internalType: "address", name: "", type: "address"},
          {internalType: "uint256", name: "", type: "uint256"},
          {internalType: "uint256", name: "", type: "uint256"},
          {internalType: "bytes", name: "", type: "bytes"},
        ],
        name: "onERC1155Received",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "", type: "address"},
          {internalType: "address", name: "", type: "address"},
          {internalType: "uint256", name: "", type: "uint256"},
          {internalType: "bytes", name: "", type: "bytes"},
        ],
        name: "onERC721Received",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [],
        name: "owners",
        outputs: [{internalType: "address[]", name: "", type: "address[]"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "proxiableUUID",
        outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "bytes4", name: "interfaceId", type: "bytes4"}],
        name: "supportsInterface",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address[]", name: "ownersToAdd", type: "address[]"},
          {
            internalType: "address[]",
            name: "ownersToRemove",
            type: "address[]",
          },
        ],
        name: "updateOwners",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "newImplementation", type: "address"},
          {internalType: "bytes", name: "data", type: "bytes"},
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {internalType: "address", name: "sender", type: "address"},
              {internalType: "uint256", name: "nonce", type: "uint256"},
              {internalType: "bytes", name: "initCode", type: "bytes"},
              {internalType: "bytes", name: "callData", type: "bytes"},
              {
                internalType: "bytes32",
                name: "accountGasLimits",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "preVerificationGas",
                type: "uint256",
              },
              {internalType: "bytes32", name: "gasFees", type: "bytes32"},
              {internalType: "bytes", name: "paymasterAndData", type: "bytes"},
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct PackedUserOperation",
            name: "userOp",
            type: "tuple",
          },
          {internalType: "bytes32", name: "userOpHash", type: "bytes32"},
          {
            internalType: "uint256",
            name: "missingAccountFunds",
            type: "uint256",
          },
        ],
        name: "validateUserOp",
        outputs: [
          {internalType: "uint256", name: "validationData", type: "uint256"},
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address payable",
            name: "withdrawAddress",
            type: "address",
          },
          {internalType: "uint256", name: "amount", type: "uint256"},
        ],
        name: "withdrawDepositTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {stateMutability: "payable", type: "receive"},
    ],
    bytecode:
      "0x6080604081815260049182361015610022575b505050361561002057600080fd5b005b600090813560e01c90816301ffc9a7146112f4575080630a1028c414611282578063150b7a02146111f55780631626ba7e1461116f57806318dfb3c71461109c57806319822f7c14610f545780633956224714610ee157806347e1da2a14610dbb5780634a58db1914610d025780634d44560d14610be95780634f1ef28614610a9e57806352d1902d14610a1357806384b0196e146108e2578063a224cee714610639578063affe39c1146104ff578063b0d691fe14610490578063b61d27f614610411578063bc197c8114610351578063c399ec88146102a1578063d087d288146101a15763f23a6e6103610012573461019e5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019e576101496114f3565b50610152611516565b506084359067ffffffffffffffff821161019e57506020926101769136910161155a565b5050517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b80fd5b50903461029d57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261029d578051927f35567e1a000000000000000000000000000000000000000000000000000000008452309084015281602484015260208360448173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032165afa9182156102925791610258575b6020925051908152f35b90506020823d60201161028a575b8161027360209383611441565b8101031261028557602091519061024e565b600080fd5b3d9150610266565b9051903d90823e3d90fd5b5080fd5b50903461029d57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261029d578051927f70a08231000000000000000000000000000000000000000000000000000000008452309084015260208360248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032165afa9182156102925791610258576020925051908152f35b503461019e5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019e576103896114f3565b50610392611516565b5067ffffffffffffffff9060443582811161029d576103b49036908601611588565b505060643582811161029d576103cd9036908601611588565b505060843591821161019e57506020926103e99136910161155a565b5050517fbc197c81000000000000000000000000000000000000000000000000000000008152f35b50823461029d5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261029d5761044a6114f3565b6044359167ffffffffffffffff831161048c5761047061047f916104899436910161155a565b610478611a8d565b36916114bc565b9060243590611b9d565b80f35b8380fd5b50903461029d57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261029d576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032168152f35b503461019e57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019e57809160019282848094527f0eb5184329babcda7203727c83eff940fb292fc735f61720a6182b755bf7f900602090806020528483205491868651975b6105c0575b850160051b870186525050508184525b81811061059f5782516020808252819061059b90820187611694565b0390f35b806105ab869286611f52565b5160601c6105b98287611f52565b520161057f565b909192948186161580610630575b15610628577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000186169101600581901b8801829052946002161561062057835281815284832054875b809392919361056a565b508287610616565b94508061056f565b508515156105ce565b509190346108de57602090817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261048c5767ffffffffffffffff83358181116108da5761068c9036908601611588565b94907faa296a366a62f6551d3ddfceae892d1791068a359a0d3461aab99dfc6c5fd7009586549360ff85871c161594818116908115806108d3575b600180931490816108c9575b1590816108c0575b50610898578660017fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000008316178b55610863575b5073ffffffffffffffffffffffffffffffffffffffff875190848a83018b8452528882019286908d5b8c888210610844575050505090807ff50e95bb610fe6508fd613e37c8721d1927dd968ed4e0e322193bafb288b6fe9927f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da03216930390a285519387850191821185831017610816575085528783526107b992916107b49136916115b9565b611d1d565b6107c1578380f35b827fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff7fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d294541690555160018152a13880808380f35b6041907f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b808497866108558697969596611539565b168152019601929101610737565b7fffffffffffffffffffffffffffffffffffffffffffffff00000000000000000016680100000000000000011789553861070e565b8588517ff92ee8a9000000000000000000000000000000000000000000000000000000008152fd5b905015386106db565b303b1591506106d3565b50866106c7565b8580fd5b8280fd5b503461019e57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019e579080519061091e82611425565b601682526020927f4d756c74694f776e65724c696768744163636f756e7400000000000000000000848401526109cb82519261095984611425565b600193600181527f3200000000000000000000000000000000000000000000000000000000000000878201526109be8251967f0f00000000000000000000000000000000000000000000000000000000000000885260e08989015260e0880190611636565b9186830390870152611636565b4660608501523060808501528160a085015283810360c0850152846060519182815201946080925b828110610a005785870386f35b83518752958101959281019284016109f3565b503461019e57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019e57307f000000000000000000000000d2c27f9ee8e4355f71915ffd5568cb3433b6823d03610a9257602082517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b639f03a026915052601cfd5b5091817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108de57610ad16114f3565b9160243567ffffffffffffffff8111610be557610af1903690840161155a565b919093307f000000000000000000000000d2c27f9ee8e4355f71915ffd5568cb3433b6823d14610bd95773ffffffffffffffffffffffffffffffffffffffff90610b39611a8d565b16926352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90816020600183601d895afa5103610bcd575090828480949388967fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8880a255610bac578380f35b8190519485378338925af415610bc457818180808380f35b903d90823e3d90fd5b6355299b49600152601dfd5b83639f03a0268752601cfd5b8480fd5b50903461029d57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261029d5782359073ffffffffffffffffffffffffffffffffffffffff80831680930361048c57610c43611a8d565b8215610cda579383947f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0321692833b15610be5576044859283855196879485937f205c287800000000000000000000000000000000000000000000000000000000855284015260243560248401525af1908115610cd15750610cc15750f35b610cca906113e2565b61019e5780f35b513d84823e3d90fd5b8482517f8579befe000000000000000000000000000000000000000000000000000000008152fd5b509190827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108de578273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0321692833b1561029d5760248351809581937fb760faf9000000000000000000000000000000000000000000000000000000008352309083015234905af1908115610cd15750610db2575080f35b610489906113e2565b509190346108de5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108de5767ffffffffffffffff908235828111610be557610e0d9036908501611588565b602494919435848111610edd57610e279036908401611588565b919094604435908111610ed957610e419036908501611588565b939094610e4c611a8d565b848314801590610ecf575b610ea9575050865b818110610e6a578780f35b80610ea3610e83610e7e600194868c6118c0565b6118ff565b610e8e83878b6118c0565b35610e9d610478858a8c611971565b91611b9d565b01610e5f565b517fa24a13a6000000000000000000000000000000000000000000000000000000008152fd5b5083831415610e57565b8780fd5b8680fd5b509190346108de577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261029d5767ffffffffffffffff813581811161048c57610f309036908401611618565b9060243590811161048c5761048992610f4b91369101611618565b906107b4611a8d565b50903461029d577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc9160608336011261019e5783359267ffffffffffffffff841161029d5761012090843603011261019e576044359273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da03216330361103f57602094610ff8916024359101611bc5565b9280611007575b505051908152f35b81808092337ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff150611037611b6d565b503880610fff565b60648560208551917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152fd5b5091346108de57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108de5767ffffffffffffffff908035828111610be5576110ec9036908301611588565b90926024359081116108da576111059036908401611588565b929094611110611a8d565b838303610ea9575050845b818110611126578580f35b611134610e7e8284876118c0565b868061114461047885888b611971565b602093828583519301915af190611159611b6d565b911561116957505060010161111b565b81519101fd5b503461019e57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019e576024359067ffffffffffffffff821161019e57506111ed6020936111e67fffffffff00000000000000000000000000000000000000000000000000000000933690830161155a565b9135611850565b915191168152f35b503461019e5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019e5761122d6114f3565b50611236611516565b506064359067ffffffffffffffff821161019e575060209261125a9136910161155a565b5050517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b503461019e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019e5782359067ffffffffffffffff821161019e573660238301121561019e57506112e86020938260246112ed943693013591016114bc565b6116de565b9051908152f35b905083346108de5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126108de57357fffffffff0000000000000000000000000000000000000000000000000000000081168091036108de57602092507f150b7a020000000000000000000000000000000000000000000000000000000081149081156113b8575b811561138e575b5015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501483611387565b7f4e2312e00000000000000000000000000000000000000000000000000000000081149150611380565b67ffffffffffffffff81116113f657604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff8211176113f657604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176113f657604052565b67ffffffffffffffff81116113f657601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b9291926114c882611482565b916114d66040519384611441565b829481845281830111610285578281602093846000960137010152565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361028557565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361028557565b359073ffffffffffffffffffffffffffffffffffffffff8216820361028557565b9181601f840112156102855782359167ffffffffffffffff8311610285576020838186019501011161028557565b9181601f840112156102855782359167ffffffffffffffff8311610285576020808501948460051b01011161028557565b90929167ffffffffffffffff84116113f6578360051b60209260206040516115e382850182611441565b809781520191810192831161028557905b8282106116015750505050565b83809161160d84611539565b8152019101906115f4565b9080601f8301121561028557816020611633933591016115b9565b90565b919082519283825260005b8481106116805750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b602081830181015184830182015201611641565b90815180825260208080930193019160005b8281106116b4575050505090565b835173ffffffffffffffffffffffffffffffffffffffff16855293810193928101926001016116a6565b6020815191012060405160208101917f5e3baca2936049843f06038876a12f03627b5edc98025751ecf2ac75626401998352604082015260408152606081019181831067ffffffffffffffff8411176113f6578260405281519020917f2f5816a013b8f6dbb1f9d331029480591f6517302cbed93167d6ae3b08efd2e7917f000000000000000000000000d2c27f9ee8e4355f71915ffd5568cb3433b6823d30147f0000000000000000000000000000000000000000000000000000000000002105461416156117ca575b5050671901000000000000600052601a52603a5260426018206000603a5290565b60a092507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f374117797120abfbc287b5a2b1fdefa40d9d135e439c3092405cfdb894067b1260808201527fad7c5bef027816a800da1736444fb58a807ef4c9603b7848673f7e3a68eb14a5838201524660c082015260e0309101522038806117a9565b9061186f6118749392604051906020820152602081526112e881611425565b61198c565b61189c577fffffffff0000000000000000000000000000000000000000000000000000000090565b7f1626ba7e0000000000000000000000000000000000000000000000000000000090565b91908110156118d05760051b0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b3573ffffffffffffffffffffffffffffffffffffffff811681036102855790565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610285570180359067ffffffffffffffff82116102855760200191813603831361028557565b908210156118d0576119889160051b810190611920565b9091565b60018310611a635782156118d057813560f81c806119e95750908260011161028557611633926119e39160017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff36930191016114bc565b9061208e565b600214611a1a5760046040517f60cd402d000000000000000000000000000000000000000000000000000000008152fd5b82601511610285576001611a58611633947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeb369101601586016114bc565b92013560601c611f66565b60046040517f60cd402d000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0321633141580611b63575b80611b09575b611ad957565b60246040517f4a0bfec1000000000000000000000000000000000000000000000000000000008152336004820152fd5b507fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b166000527f0eb5184329babcda7203727c83eff940fb292fc735f61720a6182b755bf7f90060205260406000205415611ad3565b5030331415611acd565b3d15611b98573d90611b7e82611482565b91611b8c6040519384611441565b82523d6000602084013e565b606090565b916000928392602083519301915af1611bb4611b6d565b9015611bbd5750565b602081519101fd5b90610100820191611bd68382611920565b9190506001809210611a6357611bec8482611920565b156118d0573560f81c9384611c8157611c3691929394506000947f19457468657265756d205369676e6564204d6573736167653a0a3332000000008652601c52603c852092611920565b90818411610be557611c7392916119e391857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff36930191016114bc565b15611c7c575090565b905090565b9193600214611cb45760046040517f60cd402d000000000000000000000000000000000000000000000000000000008152fd5b611cbe8282611920565b60159391931161028557611cd191611920565b8060159492941161028557611a588591611d129560157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeb36930191016114bc565b156116335750600090565b90805160005b818110611ebc575050815160005b818110611e1957505060016000527f0eb5184329babcda7203727c83eff940fb292fc735f61720a6182b755bf7f9006020527f1445284df7409ed5045e9f7688c316df8d5d6c95beabd39b38867477fc5658c8548015908115611e0e575b50611de4577f9e21fe49fba3f7d0d12e8f5eef3747a76c62e19def530ce9764932707e1f12dd91611ddf611dd192604051938493604085526040850190611694565b908382036020850152611694565b0390a1565b60046040517f9aa6ffc3000000000000000000000000000000000000000000000000000000008152fd5b600191501638611d8f565b611e238185611f52565b5173ffffffffffffffffffffffffffffffffffffffff811690308214908115611e86575b50611e555750600101611d31565b602490604051907fb20f76e30000000000000000000000000000000000000000000000000000000082526004820152fd5b611eb5915060601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016612211565b1538611e47565b611ef47fffffffffffffffffffffffffffffffffffffffff000000000000000000000000611eea8386611f52565b5160601b166120fb565b15611f0157600101611d23565b73ffffffffffffffffffffffffffffffffffffffff611f2260249285611f52565b5116604051907f531e21ce0000000000000000000000000000000000000000000000000000000082526004820152fd5b80518210156118d05760209160051b010190565b919091604051611fdf81611fb360208201957f1626ba7e00000000000000000000000000000000000000000000000000000000978888526024840152604060448401526064830190611636565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282611441565b6000809381925190845afa92611ff3611b6d565b84612080575b84612062575b50508261200b57505090565b604092507fffffffffffffffffffffffffffffffffffffffff0000000000000000000000009060601b1681527f0eb5184329babcda7203727c83eff940fb292fc735f61720a6182b755bf7f9006020522054151590565b909193506020818051810103126108de576020015114913880611fff565b935060208451101593611ff9565b6120bc7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000926120c5926122f9565b90929192612335565b60601b166000527f0eb5184329babcda7203727c83eff940fb292fc735f61720a6182b755bf7f900602052604060002054151590565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000169060008281527f0eb5184329babcda7203727c83eff940fb292fc735f61720a6182b755bf7f90060208160205260409160408420549186158015612209575b6122005760018560015b156121d4575b508552818152838520805486917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000180831691908b83146121ae57505091612166565b871661fffc93909316929092176002909616959095179055505050825281205560019150565b600181161590816121f6575b50156121ec573861216c565b5093955050505050565b90501515386121e0565b50929450505050565b50821561215c565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000016801580156122c3575b6122bd57600090600182527f0eb5184329babcda7203727c83eff940fb292fc735f61720a6182b755bf7f9008060205260408320805490811580156122b3575b1561229e57505091604091600193848352602052808383205581522055600190565b60028417905591835250604090912055600190565b506001821661227c565b50600090565b50806000527f0eb5184329babcda7203727c83eff940fb292fc735f61720a6182b755bf7f900602052604060002054151561223c565b815191906041830361232a5761232392506020820151906060604084015193015160001a9061241c565b9192909190565b505060009160029190565b60048110156123ed5780612347575050565b600181036123795760046040517ff645eedf000000000000000000000000000000000000000000000000000000008152fd5b600281036123b257602482604051907ffce698f70000000000000000000000000000000000000000000000000000000082526004820152fd5b6003146123bc5750565b602490604051907fd78bce0c0000000000000000000000000000000000000000000000000000000082526004820152fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084116124ad57926020929160ff608095604051948552168484015260408301526060820152600092839182805260015afa156124a157805173ffffffffffffffffffffffffffffffffffffffff81161561249857918190565b50809160019190565b604051903d90823e3d90fd5b5050506000916003919056fea26469706673582212208631a7c2cf1e07e83e4146ad1081c5c30a39b8aa0dfae136f6797469b7783b5764736f6c63430008170033",
  },
} as const;
