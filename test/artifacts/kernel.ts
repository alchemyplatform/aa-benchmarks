export const KERNEL_ARTIFACTS = {
  KernelFactory: {
    address: "0x5de4839a76cf55d0c90e2061ef4386d962E15ae3",
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "_owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "_entryPoint",
            type: "address",
            internalType: "contract IEntryPoint",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "addStake",
        inputs: [
          {
            name: "unstakeDelaySec",
            type: "uint32",
            internalType: "uint32",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "cancelOwnershipHandover",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "completeOwnershipHandover",
        inputs: [
          {
            name: "pendingOwner",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "createAccount",
        inputs: [
          {
            name: "_implementation",
            type: "address",
            internalType: "address",
          },
          {
            name: "_data",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "_index",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "proxy",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "entryPoint",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "address",
            internalType: "contract IEntryPoint",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getAccountAddress",
        inputs: [
          {
            name: "_data",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "_index",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "initCodeHash",
        inputs: [],
        outputs: [
          {
            name: "result",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "isAllowedImplementation",
        inputs: [
          {
            name: "implementation",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "isAllowed",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
          {
            name: "result",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "ownershipHandoverExpiresAt",
        inputs: [
          {
            name: "pendingOwner",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "result",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "predictDeterministicAddress",
        inputs: [
          {
            name: "salt",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        outputs: [
          {
            name: "predicted",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "requestOwnershipHandover",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "setEntryPoint",
        inputs: [
          {
            name: "_entryPoint",
            type: "address",
            internalType: "contract IEntryPoint",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setImplementation",
        inputs: [
          {
            name: "_implementation",
            type: "address",
            internalType: "address",
          },
          {
            name: "_allow",
            type: "bool",
            internalType: "bool",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "transferOwnership",
        inputs: [
          {
            name: "newOwner",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "unlockStake",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "withdrawStake",
        inputs: [
          {
            name: "withdrawAddress",
            type: "address",
            internalType: "address payable",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "event",
        name: "Deployed",
        inputs: [
          {
            name: "proxy",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "implementation",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "OwnershipHandoverCanceled",
        inputs: [
          {
            name: "pendingOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "OwnershipHandoverRequested",
        inputs: [
          {
            name: "pendingOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
          {
            name: "oldOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "newOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "error",
        name: "AlreadyInitialized",
        inputs: [],
      },
      {
        type: "error",
        name: "DeploymentFailed",
        inputs: [],
      },
      {
        type: "error",
        name: "ImplementationNotAllowed",
        inputs: [],
      },
      {
        type: "error",
        name: "NewOwnerIsZeroAddress",
        inputs: [],
      },
      {
        type: "error",
        name: "NoHandoverRequest",
        inputs: [],
      },
      {
        type: "error",
        name: "SaltDoesNotStartWithCaller",
        inputs: [],
      },
      {
        type: "error",
        name: "Unauthorized",
        inputs: [],
      },
    ],
    bytecode:
      "0x6040608081526004908136101561001557600080fd5b600091823560e01c9081630396cb60146107d45781632569296214610789578163296601cd1461059d5781634d6cb7001461052b5781635414dff0146104fa57816354d1f13d146104b4578163584465f2146104745781636544c82814610436578163715018a6146103f05781638da5cb5b146103c3578163b0d691fe1461039b578163bb30a9741461034557838263bb9fe6bf146102ec578263c23a5cea1461026157508163d7533f0214610243578163db4c545e14610219578163f04e283e14610199578163f2fde38b1461012c575063fee81cf4146100f657600080fd5b3461012857602036600319011261012857602091610112610845565b9063389a75e1600c525281600c20549051908152f35b5080fd5b8390602036600319011261012857610142610845565b9061014b61088e565b8160601b1561018e575060018060a01b0316638b78c6d8198181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a35580f35b637448fbae8352601cfd5b83906020366003190112610128576101af610845565b906101b861088e565b63389a75e1600c528183526020600c20908154421161020e575082905560018060a01b0316638b78c6d8198181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a35580f35b636f5e88188452601cfd5b5050346101285781600319360112610128576020906089601361023a6108d8565b01209051908152f35b505034610128578160031936011261012857602090516202a3008152f35b809184346102e85760203660031901126102e85781356001600160a01b0381811693918490036102e45761029361088e565b84541692833b156102e45760248592838551968794859363611d2e7560e11b85528401525af19081156102db57506102c85750f35b6102d190610a13565b6102d85780f35b80fd5b513d84823e3d90fd5b8480fd5b5050fd5b809184346102e857826003193601126102e85761030761088e565b82546001600160a01b031691823b1561034057815163bb9fe6bf60e01b81529284918491829084905af19081156102db57506102c85750f35b505050fd5b50503461012857806003193601126101285761035f610845565b90602435918215158093036103975761037661088e565b60018060a01b03168352600160205282209060ff8019835416911617905580f35b8380fd5b505034610128578160031936011261012857905490516001600160a01b039091168152602090f35b505034610128578160031936011261012857638b78c6d8195490516001600160a01b039091168152602090f35b83806003193601126102d85761040461088e565b80638b78c6d8198181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a35580f35b5050346101285760203660031901126101285760209160ff9082906001600160a01b03610461610845565b1681526001855220541690519015158152f35b83903461012857602036600319011261012857356001600160a01b03811690819003610128576104a261088e565b81546001600160a01b03191617815580f35b83806003193601126102d85763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b8284346102d85760203660031901126102d8575061051a602092356108ab565b90516001600160a01b039091168152f35b8284346102d857816003193601126102d85782359067ffffffffffffffff82116102d857506bffffffffffffffffffffffff61056f60209461051a93369101610860565b6105948580518381948a830196873781016024358a8201520388810184520182610a3d565b519020166108ab565b828460603660031901126102d8576105b3610845565b9160243567ffffffffffffffff8111610785576105d39036908601610860565b9360018060a01b039384821681526020966001885260ff858320541615610730576bffffffffffffffffffffffff8551898101908987833761062988828d8d82019060443590820152038d810184520182610a3d565b5190201696331560011715610724576106406108d8565b90601382019860898a2060ff86536035523060601b600152806015526055852099856035528a3b15610678575b8b8b8b8b5191168152f35b856089929394959697989b50f597881561071857918185939284938884527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8d85015289840137870190348a5af1156106fe57507f09e48df7857bd0c1e0d31bb8a85d42cf1874817895f171c917f6ee2cea73ec20818692a3848080808080808061066d565b3d1561070d57503d81803e3d90fd5b63301164258252601cfd5b8363301164258652601cfd5b50632f6348368252601cfd5b845162461bcd60e51b8152908101889052602960248201527f4b65726e656c466163746f72793a20696d706c656d656e746174696f6e206e6f6044820152681d08185b1b1bddd95960ba1b6064820152608490fd5b8280fd5b83806003193601126102d85763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b91905060203660031901126107855782823563ffffffff8116809103610128576107fc61088e565b81546001600160a01b031693843b156107855760249084519586938492621cb65b60e51b845283015234905af19081156102db5750610839575080f35b61084290610a13565b80f35b600435906001600160a01b038216820361085b57565b600080fd5b9181601f8401121561085b5782359167ffffffffffffffff831161085b576020838186019501011161085b57565b638b78c6d81954330361089d57565b6382b429006000526004601cfd5b608960136108b76108d8565b012060ff6000536035523060601b6001526015526055600020906000603552565b604051903060701c1561097c57666052573d6000fd607b8301527f3d356020355560408036111560525736038060403d373d3d355af43d6000803e60748301527f3735a920a3ca505d382bbc545af43d6000803e6052573d6000fd5b3d6000f35b60548301527f14605757363d3d37363d7f360894a13ba1a3210667c828492db98dca3e2076cc60348301523060148301526c607f3d8160093d39f33d3d33738252565b66604c573d6000fd60758301527f3d3560203555604080361115604c5736038060403d373d3d355af43d6000803e606e8301527f3735a920a3ca505d382bbc545af43d6000803e604c573d6000fd5b3d6000f35b604e8301527f14605157363d3d37363d7f360894a13ba1a3210667c828492db98dca3e2076cc602e83015230600e8301526c60793d8160093d39f33d3d336d8252565b67ffffffffffffffff8111610a2757604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610a275760405256",
  },
  Kernel: {
    address: "0xf048AD83CB2dfd6037A43902a2A5Be04e53cd2Eb",
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "_entryPoint",
            type: "address",
            internalType: "contract IEntryPoint",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        type: "fallback",
        stateMutability: "payable",
      },
      {
        type: "receive",
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "disableMode",
        inputs: [
          {
            name: "_disableFlag",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "eip712Domain",
        inputs: [],
        outputs: [
          {
            name: "fields",
            type: "bytes1",
            internalType: "bytes1",
          },
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "version",
            type: "string",
            internalType: "string",
          },
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "verifyingContract",
            type: "address",
            internalType: "address",
          },
          {
            name: "salt",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "extensions",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "entryPoint",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "address",
            internalType: "contract IEntryPoint",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "execute",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "_operation",
            type: "uint8",
            internalType: "enum Operation",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "executeBatch",
        inputs: [
          {
            name: "calls",
            type: "tuple[]",
            internalType: "struct Call[]",
            components: [
              {
                name: "to",
                type: "address",
                internalType: "address",
              },
              {
                name: "value",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "data",
                type: "bytes",
                internalType: "bytes",
              },
            ],
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "executeDelegateCall",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "getDefaultValidator",
        inputs: [],
        outputs: [
          {
            name: "validator",
            type: "address",
            internalType: "contract IKernelValidator",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getDisabledMode",
        inputs: [],
        outputs: [
          {
            name: "disabled",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getExecution",
        inputs: [
          {
            name: "_selector",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        outputs: [
          {
            name: "",
            type: "tuple",
            internalType: "struct ExecutionDetail",
            components: [
              {
                name: "validAfter",
                type: "uint48",
                internalType: "ValidAfter",
              },
              {
                name: "validUntil",
                type: "uint48",
                internalType: "ValidUntil",
              },
              {
                name: "executor",
                type: "address",
                internalType: "address",
              },
              {
                name: "validator",
                type: "address",
                internalType: "contract IKernelValidator",
              },
            ],
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getLastDisabledTime",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint48",
            internalType: "uint48",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getNonce",
        inputs: [
          {
            name: "key",
            type: "uint192",
            internalType: "uint192",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getNonce",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "initialize",
        inputs: [
          {
            name: "_defaultValidator",
            type: "address",
            internalType: "contract IKernelValidator",
          },
          {
            name: "_data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "isValidSignature",
        inputs: [
          {
            name: "hash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "signature",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "onERC1155BatchReceived",
        inputs: [
          {
            name: "",
            type: "address",
            internalType: "address",
          },
          {
            name: "",
            type: "address",
            internalType: "address",
          },
          {
            name: "",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        stateMutability: "pure",
      },
      {
        type: "function",
        name: "onERC1155Received",
        inputs: [
          {
            name: "",
            type: "address",
            internalType: "address",
          },
          {
            name: "",
            type: "address",
            internalType: "address",
          },
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        stateMutability: "pure",
      },
      {
        type: "function",
        name: "onERC721Received",
        inputs: [
          {
            name: "",
            type: "address",
            internalType: "address",
          },
          {
            name: "",
            type: "address",
            internalType: "address",
          },
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        stateMutability: "pure",
      },
      {
        type: "function",
        name: "setDefaultValidator",
        inputs: [
          {
            name: "_defaultValidator",
            type: "address",
            internalType: "contract IKernelValidator",
          },
          {
            name: "_data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "setExecution",
        inputs: [
          {
            name: "_selector",
            type: "bytes4",
            internalType: "bytes4",
          },
          {
            name: "_executor",
            type: "address",
            internalType: "address",
          },
          {
            name: "_validator",
            type: "address",
            internalType: "contract IKernelValidator",
          },
          {
            name: "_validUntil",
            type: "uint48",
            internalType: "ValidUntil",
          },
          {
            name: "_validAfter",
            type: "uint48",
            internalType: "ValidAfter",
          },
          {
            name: "_enableData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "upgradeTo",
        inputs: [
          {
            name: "_newImplementation",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "validateSignature",
        inputs: [
          {
            name: "hash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "signature",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "ValidationData",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "validateUserOp",
        inputs: [
          {
            name: "_userOp",
            type: "tuple",
            internalType: "struct UserOperation",
            components: [
              {
                name: "sender",
                type: "address",
                internalType: "address",
              },
              {
                name: "nonce",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "initCode",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "callData",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "callGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "verificationGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "preVerificationGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxPriorityFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterAndData",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "signature",
                type: "bytes",
                internalType: "bytes",
              },
            ],
          },
          {
            name: "userOpHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "missingAccountFunds",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "validationData",
            type: "uint256",
            internalType: "ValidationData",
          },
        ],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "version",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "event",
        name: "DefaultValidatorChanged",
        inputs: [
          {
            name: "oldValidator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "newValidator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "ExecutionChanged",
        inputs: [
          {
            name: "selector",
            type: "bytes4",
            indexed: true,
            internalType: "bytes4",
          },
          {
            name: "executor",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "validator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Received",
        inputs: [
          {
            name: "sender",
            type: "address",
            indexed: false,
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Upgraded",
        inputs: [
          {
            name: "newImplementation",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "error",
        name: "AlreadyInitialized",
        inputs: [],
      },
      {
        type: "error",
        name: "DeprecatedOperation",
        inputs: [],
      },
      {
        type: "error",
        name: "DisabledMode",
        inputs: [],
      },
      {
        type: "error",
        name: "NotAuthorizedCaller",
        inputs: [],
      },
      {
        type: "error",
        name: "NotEntryPoint",
        inputs: [],
      },
    ],
    bytecode:
      "0x60806040526004361015610015575b36610fdb57005b60003560e01c806306fdde03146101655780630b3dc35414610160578063150b7a021461015b5780631626ba7e1461015657806329f8b174146101515780633659cfe61461014c5780633a871cdd146101475780633e1b08121461014257806351166ba01461013d578063519454471461013857806354fd4d501461013357806355b14f501461012e57806357b750471461012957806384b0196e1461012457806388e7fd061461011f578063b0d691fe1461011a578063bc197c8114610115578063d087d28814610110578063d1f578941461010b578063d5416221146101065763f23a6e610361000e57610f49565b610eb7565b610e1c565b610d9d565b610d0e565b610c99565b610c64565b610bbc565b610b85565b610a6d565b610a15565b610911565b6107e4565b610720565b6106d6565b610630565b61042f565b61039d565b610343565b6102c4565b610290565b600091031261017557565b600080fd5b634e487b7160e01b600052604160045260246000fd5b6001600160401b0381116101a357604052565b61017a565b608081019081106001600160401b038211176101a357604052565b604081019081106001600160401b038211176101a357604052565b90601f801991011681019081106001600160401b038211176101a357604052565b6040519061020c826101a8565b565b6040519061016082018281106001600160401b038211176101a357604052565b6040519061023b826101c3565b600682526512d95c9b995b60d21b6020830152565b919082519283825260005b84811061027c575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161025b565b34610175576000366003190112610175576102c06102ac61022e565b604051918291602083526020830190610250565b0390f35b34610175576000366003190112610175576020600080516020611e438339815191525460501c6040519060018060a01b03168152f35b6001600160a01b0381160361017557565b359061020c826102fa565b9181601f84011215610175578235916001600160401b038311610175576020838186019501011161017557565b346101755760803660031901126101755761035f6004356102fa565b61036a6024356102fa565b6064356001600160401b03811161017557610389903690600401610316565b5050604051630a85bd0160e11b8152602090f35b34610175576040366003190112610175576024356001600160401b038111610175576103db6103d26020923690600401610316565b90600435611a28565b6040516001600160e01b03199091168152f35b600435906001600160e01b03198216820361017557565b6064359065ffffffffffff8216820361017557565b6084359065ffffffffffff8216820361017557565b60c0366003190112610175576104436103ee565b60243590610450826102fa565b6044359061045d826102fa565b610465610405565b9261046e61041a565b9060a4356001600160401b0381116101755761048e903690600401610316565b9590946001600160a01b0393337f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27898616141580610626575b6106145784926104f0610587926104db6101ff565b65ffffffffffff918216815292166020830152565b6001600160a01b03851660408201526001600160a01b038316606082015261051787610fa3565b81516020830151604084015160309190911b6bffffffffffff0000000000001665ffffffffffff9290921691909117606091821b6bffffffffffffffffffffffff19161782559091015160019190910180546001600160a01b0319166001600160a01b0392909216919091179055565b1693843b15610175576040519063064acaab60e11b825281806105b16000998a9460048401611628565b038183895af1801561060f576105f6575b5016906001600160e01b0319167fed03d2572564284398470d3f266a693e29ddfff3eba45fc06c5e91013d3213538480a480f35b8061060361060992610190565b8061016a565b386105c2565b611307565b604051637046c88d60e01b8152600490fd5b50303314156104c6565b602036600319011261017557600435610648816102fa565b6001600160a01b0390337f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d278983161415806106cc575b61061457807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a2005b503033141561067d565b60031960603682011261017557600435906001600160401b03821161017557610160908236030112610175576107186020916044359060243590600401611313565b604051908152f35b34610175576020366003190112610175576004356001600160c01b0381169081900361017557604051631aab3f0d60e11b815230600482015260248101919091526020816044817f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27896001600160a01b03165afa801561060f576102c0916000916107b6575b506040519081529081906020820190565b6107d7915060203d81116107dd575b6107cf81836101de565b810190611228565b386107a5565b503d6107c5565b34610175576020366003190112610175576102c06108296108036103ee565b60006060604051610813816101a8565b8281528260208201528260408201520152610fa3565b60405190610836826101a8565b805465ffffffffffff80821684528160301c16602084015260601c60408301526001808060a01b03910154166060820152604051918291829190916060608082019365ffffffffffff80825116845260208201511660208401528160018060a01b0391826040820151166040860152015116910152565b9291926001600160401b0382116101a357604051916108d6601f8201601f1916602001846101de565b829481845281830111610175578281602093846000960137010152565b9080601f830112156101755781602061090e933591016108ad565b90565b608036600319011261017557600435610929816102fa565b6044356001600160401b038111610175576109489036906004016108f3565b90606435600281101561017557337f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27896001600160a01b03161415806109df575b6106145780610998600192611054565b036109be5760008281939260208394519201905af43d82803e156109ba573d90f35b3d90fd5b6000828193926020839451920190602435905af13d82803e156109ba573d90f35b506109ef6109eb611af7565b1590565b610988565b60405190610a01826101c3565b6005825264302e322e3160d81b6020830152565b34610175576000366003190112610175576102c06102ac6109f4565b90604060031983011261017557600435610a4a816102fa565b91602435906001600160401b03821161017557610a6991600401610316565b9091565b610a7636610a31565b90916001600160a01b03337f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27898216141580610b7b575b61061457600080516020611e4383398151915280547fffff0000000000000000000000000000000000000000ffffffffffffffffffff8116605085811b600160501b600160f01b031691909117909255901c8116911692836040519360009586947fa35f5cdc5fbabb614b4cd5064ce5543f43dc8fab0e4da41255230eb8aba2531c8680a3813b15610b77578385610b55819593829463064acaab60e11b845260048401611628565b03925af1801561060f57610b67575080f35b80610603610b7492610190565b80f35b8380fd5b5030331415610aac565b34610175576000366003190112610175576020600080516020611e438339815191525460e01b6040519063ffffffff60e01b168152f35b3461017557600036600319011261017557610c12610bd861022e565b610be06109f4565b90604051928392600f60f81b8452610c0460209360e08587015260e0860190610250565b908482036040860152610250565b90466060840152306080840152600060a084015282820360c08401528060605192838152019160809160005b828110610c4d57505050500390f35b835185528695509381019392810192600101610c3e565b34610175576000366003190112610175576020600080516020611e438339815191525465ffffffffffff60405191831c168152f35b34610175576000366003190112610175576040517f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27896001600160a01b03168152602090f35b9181601f84011215610175578235916001600160401b038311610175576020808501948460051b01011161017557565b346101755760a036600319011261017557610d2a6004356102fa565b610d356024356102fa565b6001600160401b0360443581811161017557610d55903690600401610cde565b505060643581811161017557610d6f903690600401610cde565b505060843590811161017557610d89903690600401610316565b505060405163bc197c8160e01b8152602090f35b3461017557600036600319011261017557604051631aab3f0d60e11b8152306004820152600060248201526020816044817f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27896001600160a01b03165afa801561060f576102c0916000916107b657506040519081529081906020820190565b610e2536610a31565b600080516020611e63833981519152805490935091906001600160a01b038316610e6657601411610175576001600160a01b0319909116903560601c179055005b60405162461bcd60e51b8152602060048201526024808201527f4b65726e656c4c69746545434453413a20616c726561647920696e697469616c6044820152631a5e995960e21b6064820152608490fd5b602036600319011261017557610ecb6103ee565b337f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27896001600160a01b0316141580610f3f575b61061457600080516020611e4383398151915290815469ffffffffffff000000004260201b169160e01c9069ffffffffffffffffffff191617179055600080f35b5030331415610efe565b346101755760a036600319011261017557610f656004356102fa565b610f706024356102fa565b6084356001600160401b03811161017557610f8f903690600401610316565b505060405163f23a6e6160e01b8152602090f35b63ffffffff60e01b166000527f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dda602052604060002090565b6000610ff181356001600160e01b031916610fa3565b5460601c337f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27896001600160a01b0316141580611045575b61061457818091368280378136915af43d82803e156109ba573d90f35b5061104e611af7565b15611028565b6002111561105e57565b634e487b7160e01b600052602160045260246000fd5b906004116101755790600490565b909291928360041161017557831161017557600401916003190190565b906024116101755760100190601490565b906058116101755760380190602090565b906024116101755760040190602090565b906038116101755760240190601490565b90600a116101755760040190600690565b9060101161017557600a0190600690565b90939293848311610175578411610175578101920390565b6001600160e01b0319903581811693926004811061113a57505050565b60040360031b82901b16169150565b9190610160838203126101755761115e61020e565b926111688161030b565b8452602081013560208501526040810135916001600160401b039283811161017557816111969184016108f3565b6040860152606082013583811161017557816111b39184016108f3565b60608601526080820135608086015260a082013560a086015260c082013560c086015260e082013560e086015261010080830135908601526101208083013584811161017557826112059185016108f3565b9086015261014092838301359081116101755761122292016108f3565b90830152565b90816020910312610175575190565b606080825282516001600160a01b031690820152919392916040916112fd90602081015160808401528381015161127c610160918260a08701526101c0860190610250565b906112ea61129c606085015193605f1994858983030160c08a0152610250565b608085015160e088015260a085015192610100938489015260c08601519061012091828a015260e08701519461014095868b0152870151908901528501518488830301610180890152610250565b92015190848303016101a0850152610250565b9460208201520152565b6040513d6000823e3d90fd5b9092916000916001600160a01b03907f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d278982163303611564576004958635928361014481013501928860248501940135916113766113708487611074565b9061111d565b926001600160e01b03199283851690811561153757611396903690611149565b93600080516020611e4383398151915254958660e01b161615156000146113c85760405163fc2f51c560e01b81528c90fd5b90899a9b91600160e09b95969798999a9b1b81146000146114e357506114096114046113708b606460209c9d0135016024868201359101611074565b610fa3565b60018101549099906001600160a01b031696848816156114d8575b50816114699261143392611082565b995460d081901b6001600160d01b03191660709190911b65ffffffffffff60a01b1617995b858c806114c9575b505036916108ad565b61014085015261148d604051998a9788968794633a871cdd60e01b86528501611237565b0393165af191821561060f5761090e93926114a9575b50611ddc565b6114c291925060203d81116107dd576107cf81836101de565b90386114a3565b81808092335af150858c611460565b60501c965081611424565b9198979095509250600160e11b036115295761151f611469948a9361151a6113708a606460209c01350160248d8201359101611074565b611639565b9199929691611458565b505050505050505050600190565b989650505050505093915061090e94955080611555575b5050611c28565b81808092335af150388061154e565b604051636b31ba1560e11b8152600490fd5b6bffffffffffffffffffffffff19903581811693926014811061159857505050565b60140360031b82901b16169150565b3590602081106115b5575090565b6000199060200360031b1b1690565b908060209392818452848401376000828201840152601f01601f1916010190565b60409061090e9492815281602082015201916115c4565b6001600160d01b0319903581811693926006811061161957505050565b60060360031b82901b16169150565b91602061090e9381815201916115c4565b9061166561165961165361164d868561109f565b90611576565b60601c90565b6001600160a01b031690565b9361167961167385846110b0565b906115a7565b60588301607882019461169461167387856058018a89611105565b9661179d6116a561167383896110c1565b6116b561165361164d858b6110d2565b996117436116c43689896108ad565b8051602091820120604080517f3ce406685c1b3551d706d85a68afdaa49ac4e07b451ad9b8ff8b58c3ee9641768185019081526001600160e01b03198b169282019290925260608101969096526001600160a01b039e909e16608086015260a08086019190915284529b8c9361173b60c0826101de565b519020611914565b600080516020611e438339815191525490919061177f9061176f9060501c6001600160a01b0316611659565b9189019b60788d0190878d611105565b60405163199ed7c960e11b81529586948593849391600485016115e5565b03915afa92831561060f576114046117e36118a395610517946000916118f7575b506117dc6117cc878d6110c1565b6001600160a01b031992916115a7565b1690611ddc565b9a898b016078019a850360771901996118939061188361182361181861181261180c8b866110e3565b906115fc565b60d01c90565b65ffffffffffff1690565b9761185a61165961165361164d61184361181861181261180c888b6110f4565b9461185461165361164d838b6110d2565b9761109f565b946118746118666101ff565b65ffffffffffff909b168b52565b89019065ffffffffffff169052565b6001600160a01b03166040870152565b6001600160a01b03166060850152565b6001600160a01b03871691823b15610175576118d9926000928360405180968195829463064acaab60e11b845260048401611628565b03925af1801561060f576118ea5750565b8061060361020c92610190565b61190e91508d803d106107dd576107cf81836101de565b386117be565b7f1f3c3aadd5fe90b1207b452584aa0692f4d68531a8d94e2b9badf56fc9ece0bb7f0000000000000000000000004d4f04453b12bc736ed7455e20b8d294be42687f30147f0000000000000000000000000000000000000000000000000000000000013881461416156119a1575b671901000000000000600052601a52603a526042601820906000603a52565b5060a06040517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527f32ba20807d2fff2dbb34e0bcfa82982565bef566d4c0c633dc57b700b81c342760208201527f5709a9427ab590b580a826677786fd6b206c47e15c9470295fe07eeb734e6893604082015246606082015230608082015220611982565b90611a339291611d4e565b65ffffffffffff808260a01c16908115600114611a9e575b428360d01c11611a8e5742911610611a81576001600160a01b0316611a7557630b135d3f60e11b90565b6001600160e01b031990565b506001600160e01b031990565b506001600160e01b031992915050565b905080611a4b565b90816020910312610175575180151581036101755790565b6001600160a01b0390911681526040602082018190528101829052606091806000848401376000828201840152601f01601f1916010190565b600080516020611e63833981519152546001600160a01b039081163314611c2257611b2d6000356001600160e01b031916610fa3565b6001810154611b44906001600160a01b0316611659565b91821615908115611be6575b8115611bc2575b5015611b635750600090565b60206040518092639ea9bd5960e01b82528180611b84363360048401611abe565b03915afa90811561060f57600091611b9a575090565b61090e915060203d8111611bbb575b611bb381836101de565b810190611aa6565b503d611ba9565b54611bd5915065ffffffffffff16611818565b65ffffffffffff4291161138611b57565b905065ffffffffffff611c06611818835465ffffffffffff9060301c1690565b168015159081611c18575b5090611b50565b9050421138611c11565b50600190565b90611c58906020527b19457468657265756d205369676e6564204d6573736167653a0a3332600052603c60042090565b9061014081013590601e19813603018212156101755701908135916001600160401b0383116101755760200191803603831361017557611c9f81611ca692611cac95611082565b36916108ad565b90611cd8565b600080516020611e63833981519152546001600160a01b03908116911603611cd357600090565b600190565b60207f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a19392608060405193838301516040526040830151928360605260416000988995869485526060840151851a885210915114165afa508251923d15611d4157606052604052565b638baa579f90526004601cfd5b90611d8c611d81836020527b19457468657265756d205369676e6564204d6573736167653a0a3332600052603c60042090565b611ca63686856108ad565b600080516020611e63833981519152546001600160a01b039081169490939184168514611dd257611dc292611ca69136916108ad565b1614611dcd57600190565b600090565b5050505050600090565b8082186001600160a01b031615600114611df7575050600190565b65ffffffffffff60a01b828116828216818118918111919091028082189465ffffffffffff60a01b199485169416929114611e3a575b5081811190821802181790565b925038611e2d56fe439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd9dea7fea882fba743201b2aeb1babf326b8944488db560784858525d123ee7e97",
  },
  KernelECDSAValidator: {
    address: "0xd9AB5096a832b9ce79914329DAEE236f8Eea0390",
    abi: [
      {
        type: "function",
        name: "disable",
        inputs: [
          {
            name: "",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "ecdsaValidatorStorage",
        inputs: [
          {
            name: "",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "enable",
        inputs: [
          {
            name: "_data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "validCaller",
        inputs: [
          {
            name: "_caller",
            type: "address",
            internalType: "address",
          },
          {
            name: "",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "validateSignature",
        inputs: [
          {
            name: "hash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "signature",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "ValidationData",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "validateUserOp",
        inputs: [
          {
            name: "_userOp",
            type: "tuple",
            internalType: "struct UserOperation",
            components: [
              {
                name: "sender",
                type: "address",
                internalType: "address",
              },
              {
                name: "nonce",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "initCode",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "callData",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "callGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "verificationGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "preVerificationGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxPriorityFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterAndData",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "signature",
                type: "bytes",
                internalType: "bytes",
              },
            ],
          },
          {
            name: "_userOpHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "validationData",
            type: "uint256",
            internalType: "ValidationData",
          },
        ],
        stateMutability: "payable",
      },
      {
        type: "event",
        name: "OwnerChanged",
        inputs: [
          {
            name: "kernel",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "oldOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "newOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "error",
        name: "NotImplemented",
        inputs: [],
      },
    ],
    bytecode:
      "0x60406080815260048036101561001457600080fd5b600091823560e01c80630c959556146101d557806320709efc1461019b578063333daf921461015b5780633a871cdd1461010d578381638fc925aa146100c85750639ea9bd591461006457600080fd5b346100c457806003193601126100c45761007c610296565b9160243567ffffffffffffffff81116100c057936100a08392602096369101610263565b5050338152808552205490516001600160a01b0392831691909216148152f35b8480fd5b8280fd5b92905060203660031901126101095780359067ffffffffffffffff8211610104576100f591369101610263565b50503382528160205281205580f35b505050fd5b5050fd5b50600319836060368301126101545783359167ffffffffffffffff831161015757610160908336030112610154575060209261014d916024359101610348565b9051908152f35b80fd5b5080fd5b5082346101545781600319360112610154576024359067ffffffffffffffff8211610154575060209261019461014d9236908301610263565b9135610464565b838234610157576020366003190112610157576020916001600160a01b03908290826101c5610296565b1681528085522054169051908152f35b509060203660031901126100c45780359067ffffffffffffffff821161025f5761020191369101610263565b6014116100c4573560601c90338352826020528220805490826bffffffffffffffffffffffff60a01b831617905560018060a01b0316337f381c0d11398486654573703c51ee8210ce9461764d133f9f0e53b6a5397053318480a480f35b8380fd5b9181601f840112156102915782359167ffffffffffffffff8311610291576020838186019501011161029157565b600080fd5b600435906001600160a01b038216820361029157565b903590601e1981360301821215610291570180359067ffffffffffffffff82116102915760200191813603831361029157565b92919267ffffffffffffffff918281116103325760405192601f8201601f19908116603f011684019081118482101761033257604052829481845281830111610291578281602093846000960137010152565b634e487b7160e01b600052604160045260246000fd5b600092916001600160a01b039084833583811690819003610157578152806020528260408220541693826020527b19457468657265756d205369676e6564204d6573736167653a0a33328252603c60042091846103be6101408401946103b86103b187876102ac565b36916102df565b906103ee565b1686146103e557506103b16103d793926103b8926102ac565b16036103df57565b60019150565b96505050505050565b60207f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a19392608060405193838301516040526040830151928360605260416000988995869485526060840151851a885210915114165afa508251923d1561045757606052604052565b638baa579f90526004601cfd5b3360009081526020819052604081205490936001600160a01b03918216939192836104996104933685876102df565b836103ee565b1685146104e6576104d7926103b8916020527b19457468657265756d205369676e6564204d6573736167653a0a33328752603c6004209236916102df565b16036104e05790565b50600190565b50505050509056",
  },
  KernelSessionKeyValidator: {
    address: "0x5C06CE2b673fD5E6e56076e40DD46aB67f5a72A5",
    abi: [
      {
          "type": "function",
          "name": "disable",
          "inputs": [
              {
                  "name": "_data",
                  "type": "bytes",
                  "internalType": "bytes"
              }
          ],
          "outputs": [],
          "stateMutability": "payable"
      },
      {
          "type": "function",
          "name": "enable",
          "inputs": [
              {
                  "name": "_data",
                  "type": "bytes",
                  "internalType": "bytes"
              }
          ],
          "outputs": [],
          "stateMutability": "payable"
      },
      {
          "type": "function",
          "name": "executionStatus",
          "inputs": [
              {
                  "name": "permissionKey",
                  "type": "bytes32",
                  "internalType": "bytes32"
              },
              {
                  "name": "kernel",
                  "type": "address",
                  "internalType": "address"
              }
          ],
          "outputs": [
              {
                  "name": "validAfter",
                  "type": "uint48",
                  "internalType": "ValidAfter"
              },
              {
                  "name": "runs",
                  "type": "uint48",
                  "internalType": "uint48"
              }
          ],
          "stateMutability": "view"
      },
      {
          "type": "function",
          "name": "invalidateNonce",
          "inputs": [
              {
                  "name": "nonce",
                  "type": "uint128",
                  "internalType": "uint128"
              }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
      },
      {
          "type": "function",
          "name": "nonces",
          "inputs": [
              {
                  "name": "kernel",
                  "type": "address",
                  "internalType": "address"
              }
          ],
          "outputs": [
              {
                  "name": "lastNonce",
                  "type": "uint128",
                  "internalType": "uint128"
              },
              {
                  "name": "invalidNonce",
                  "type": "uint128",
                  "internalType": "uint128"
              }
          ],
          "stateMutability": "view"
      },
      {
          "type": "function",
          "name": "sessionData",
          "inputs": [
              {
                  "name": "sessionKey",
                  "type": "address",
                  "internalType": "address"
              },
              {
                  "name": "kernel",
                  "type": "address",
                  "internalType": "address"
              }
          ],
          "outputs": [
              {
                  "name": "merkleRoot",
                  "type": "bytes32",
                  "internalType": "bytes32"
              },
              {
                  "name": "validAfter",
                  "type": "uint48",
                  "internalType": "ValidAfter"
              },
              {
                  "name": "validUntil",
                  "type": "uint48",
                  "internalType": "ValidUntil"
              },
              {
                  "name": "paymaster",
                  "type": "address",
                  "internalType": "address"
              },
              {
                  "name": "nonce",
                  "type": "uint256",
                  "internalType": "uint256"
              }
          ],
          "stateMutability": "view"
      },
      {
          "type": "function",
          "name": "validCaller",
          "inputs": [
              {
                  "name": "",
                  "type": "address",
                  "internalType": "address"
              },
              {
                  "name": "",
                  "type": "bytes",
                  "internalType": "bytes"
              }
          ],
          "outputs": [
              {
                  "name": "",
                  "type": "bool",
                  "internalType": "bool"
              }
          ],
          "stateMutability": "pure"
      },
      {
          "type": "function",
          "name": "validateSignature",
          "inputs": [
              {
                  "name": "",
                  "type": "bytes32",
                  "internalType": "bytes32"
              },
              {
                  "name": "",
                  "type": "bytes",
                  "internalType": "bytes"
              }
          ],
          "outputs": [
              {
                  "name": "",
                  "type": "uint256",
                  "internalType": "ValidationData"
              }
          ],
          "stateMutability": "pure"
      },
      {
          "type": "function",
          "name": "validateUserOp",
          "inputs": [
              {
                  "name": "userOp",
                  "type": "tuple",
                  "internalType": "struct UserOperation",
                  "components": [
                      {
                          "name": "sender",
                          "type": "address",
                          "internalType": "address"
                      },
                      {
                          "name": "nonce",
                          "type": "uint256",
                          "internalType": "uint256"
                      },
                      {
                          "name": "initCode",
                          "type": "bytes",
                          "internalType": "bytes"
                      },
                      {
                          "name": "callData",
                          "type": "bytes",
                          "internalType": "bytes"
                      },
                      {
                          "name": "callGasLimit",
                          "type": "uint256",
                          "internalType": "uint256"
                      },
                      {
                          "name": "verificationGasLimit",
                          "type": "uint256",
                          "internalType": "uint256"
                      },
                      {
                          "name": "preVerificationGas",
                          "type": "uint256",
                          "internalType": "uint256"
                      },
                      {
                          "name": "maxFeePerGas",
                          "type": "uint256",
                          "internalType": "uint256"
                      },
                      {
                          "name": "maxPriorityFeePerGas",
                          "type": "uint256",
                          "internalType": "uint256"
                      },
                      {
                          "name": "paymasterAndData",
                          "type": "bytes",
                          "internalType": "bytes"
                      },
                      {
                          "name": "signature",
                          "type": "bytes",
                          "internalType": "bytes"
                      }
                  ]
              },
              {
                  "name": "",
                  "type": "bytes32",
                  "internalType": "bytes32"
              },
              {
                  "name": "",
                  "type": "uint256",
                  "internalType": "uint256"
              }
          ],
          "outputs": [
              {
                  "name": "",
                  "type": "uint256",
                  "internalType": "ValidationData"
              }
          ],
          "stateMutability": "payable"
      },
      {
          "type": "error",
          "name": "NotImplemented",
          "inputs": []
      }
    ],
    bytecode: "0x60808060405234610016576116fb908161001c8239f35b600080fdfe60806040908082526004908136101561001757600080fd5b600092833560e01c9182630c9595561461034c57508163333daf92146103195781633a871cdd146102d557816346585db21461027d57816352721fdd146102005781637ecebe00146101b8578382638fc925aa1461010b575081639ea9bd59146100bd575063dbba225d1461008b57600080fd5b346100b95760203660031901126100b957356001600160801b03811681036100b9576100b6906105d6565b80f35b5080fd5b905082346101085781600319360112610108576100d8610532565b50602435906001600160401b03821161010857506100f990369084016104ea565b50505163d623472560e01b8152fd5b80fd5b8091846020600319360112610170578035906001600160401b0382116101b357610137913691016104ea565b9091906014810361017457601411610170576002913560601c835260016020528083203384526020528220828155826001820155015580f35b5050fd5b9192506010820361019457506010116100b9576100b6903560801c6105d6565b6100b692506001600160801b03915033845283602052832054166105d6565b505050fd5b8390346100b95760203660031901126100b9579081906001600160a01b036101de610532565b1681528060205220548151906001600160801b038116825260801c6020820152f35b8390346100b957806003193601126100b9578060a09261021e610532565b61022661051c565b90600180871b03809116835260016020528383209116825260205220805491600182015490600265ffffffffffff93015492815194855280831660208601528260301c169084015260601c60608301526080820152f35b919050346102d157816003193601126102d15791819261029b61051c565b9035825260026020528282209060018060a01b03168252602052205465ffffffffffff825191818116835260301c166020820152f35b8280fd5b91905060031992606084360112610108578135936001600160401b0385116100b9576101609085360301126101085750602092610312910161064c565b9051908152f35b90508234610108578160031936011261010857602435906001600160401b03821161010857506100f990369084016104ea565b8492509060203660031901126102d1576001600160401b039184358381116104e25761037b90369087016104ea565b806014116104e657806034116104e65780603a116104e6578084116104e657806054116104e6576074116104e25760548101359360a08301908111838210176104cf579060029184526014810135835260208301603482013560d01c815284840190603a83013560d01c825261046060608601918785013560601c835260808701948986523560601c8a526001602052878a20338b52602052878a2096518755600187019365ffffffffffff8092511665ffffffffffff198654161785555116839065ffffffffffff60301b82549160301b169065ffffffffffff60301b1916179055565b516bffffffffffffffffffffffff82549181199060601b16911617905551910155826020528220908154916001600160801b038084168181146104bc576100b69596506001011680936001600160801b0319161790551461057f565b634e487b7160e01b865260118752602486fd5b634e487b7160e01b865260418752602486fd5b8480fd5b8580fd5b9181601f84011215610517578235916001600160401b038311610517576020838186019501011161051757565b600080fd5b602435906001600160a01b038216820361051757565b600435906001600160a01b038216820361051757565b90601f801991011681019081106001600160401b0382111761056957604052565b634e487b7160e01b600052604160045260246000fd5b1561058657565b60405162461bcd60e51b815260206004820152602260248201527f53657373696f6e4b657956616c696461746f723a20696e76616c6964206e6f6e604482015261636560f01b6064820152608490fd5b600033815280602052604080822054916105fe6001600160801b0385169360801c841161057f565b3381528060205220916001600160801b03199060801b16179055565b903590601e198136030182121561051757018035906001600160401b0382116105175760200191813603831361051757565b610140810161065b818361061a565b601411610517573560601c906000908282526001916020948386526040808320338452875280832060028101548489528285205460801c10156108f257858101978854928360601c88811460001461086957506106bc61012086018661061a565b9050156108175750505b54156107f757506106da606082018261061a565b93909184600411806104e25783356001600160e01b03191690635194544760e01b821480156107e4575b1561076e575050906107159161061a565b60559391931161010857509061074692916075820135820192605560758186013595019381810135010191876112ba565b919091610767575065ffffffffffff610764935460301c169161094b565b90565b9250505090565b909195509392936102d157631a7e6adf60e11b036107da57610790818561061a565b6055116102d157908160556107a8930135019461061a565b605592919211610108575090816075610746949301350191607560558401359301916075605583013592019087610db6565b5050505091505090565b5085905063b68df16d60e01b8214610704565b949350505050610764925065ffffffffffff808360301c1692169061094b565b60849250519062461bcd60e51b82526004820152602660248201527f53657373696f6e4b657956616c696461746f723a207061796d6173746572206e6044820152651bdd081cd95d60d21b6064820152fd5b80610877575b5050506106c6565b61088561012087018761061a565b6014116108ee573560601c0361089b578061086f565b60849250519062461bcd60e51b82526004820152602760248201527f53657373696f6e4b657956616c696461746f723a207061796d6173746572206d6044820152660d2e6dac2e8c6d60cb1b6064820152fd5b8780fd5b815162461bcd60e51b815260048101899052602c60248201527f53657373696f6e4b657956616c696461746f723a2073657373696f6e206b657960448201526b081b9bdd08195b98589b195960a21b6064820152608490fd5b91909160043561014481013501602060243581526000917b19457468657265756d205369676e6564204d6573736167653a0a33328352603c600420916040918251608081018181106001600160401b03821117610a865784526041808252838201923660798201116108ee5790806038899301853781606184015260019386519783525186528580845114610a605750825114610a45576001925060809150805b5afa51923d15610a3857606052526001600160a01b03908116911603610a315760d09190911b6001600160d01b03191660a09190911b65ffffffffffff60a01b161790565b5050600190565b638baa579f90526004601cfd5b6001926080928660609182810151851a8852015190526109ec565b9092015160ff81901c601b0185526001600160ff1b0316606052600192608092506109ec565b634e487b7160e01b87526041600452602487fd5b6000198114610aa95760010190565b634e487b7160e01b600052601160045260246000fd5b356001600160a01b03811681036105175790565b15610ada57565b60405162461bcd60e51b8152602060048201526024808201527f53657373696f6e4b657956616c696461746f723a20746172676574206d69736d6044820152630c2e8c6d60e31b6064820152608490fd5b15610b3257565b60405162461bcd60e51b815260206004820152602960248201527f53657373696f6e4b657956616c696461746f723a2076616c7565206c696d697460448201526808195e18d95959195960ba1b6064820152608490fd5b15610b9057565b60405162461bcd60e51b815260206004820152603360248201527f53657373696f6e4b657956616c696461746f723a207065726d697373696f6e206044820152721d995c9a599a58d85d1a5bdb8819985a5b1959606a1b6064820152608490fd5b3563ffffffff811681036105175790565b359065ffffffffffff8216820361051757565b602091828252610140820190803563ffffffff81168091036105175784840152808401356001600160a01b0381169081900361051757604090818501528082013563ffffffff60e01b811680910361051757606090818601528083013560808601526080830135601e1984360301811215610517578301908682359201966001600160401b03831161051757818302360388136105175792919081610120968760a08a015252610160870197936000905b838210610d285750505050505065ffffffffffff9081610ce860a08301610c02565b1660c085015281610cfb60c08301610c02565b1660e0850152610d0d60e08201610c02565b91610100921682850152013591600283101561051757015290565b90919293949889358152818a01359060068210156105175782810191909152898601358682015283019883019493929160010190610cc6565b9092916001600160401b038411610569578360051b60209283604051610d8982850182610548565b809781520191810192831161051757905b828210610da75750505050565b81358152908301908301610d9a565b9491959390929560009560018060a01b0316600052600160205260406000203360005260205260406000209265ffffffffffff6001850154169760005b600480880135880101358110610e0c5750505050505050565b60048701358701600582901b810160240135903603608219018112156105175782821015610ff95761011e19853603018260051b860135121561051757610ed890610ed390610ec490610e8a8b600587901b8a01358a01602001836001600160a01b03610e7883610abf565b1615928315611017575b505050610ad3565b610eaf8b60448360608960051b8d01358d010135926004810135010101351115610b2b565b60048b01358b0101606481019060240161061a565b8460051b880135880191611513565b610b89565b610f3f6002870154610f20610f2e610ef78560051b8901358901610bf1565b604080516020810195865260e09290921b6001600160e01b031916908201529182906044820190565b03601f198101835282610548565b5190208260051b86013586016110c0565b65ffffffffffff8b1665ffffffffffff82161161100f575b5082811015610ff9578060051b850135601e1986360301811215610517576001600160401b038187013511610517578086013560051b36036020828801011361051757610fd9908754610fd46040516020810190610fc181610f208960051b8d01358d0185610c15565b5190209236908a01803590602001610d61565b611056565b15610fec57610fe790610a9a565b610df3565b5060019750505050505050565b634e487b7160e01b600052603260045260246000fd5b995038610f57565b91925061102d9160048101350101602401610abf565b906001600160a01b039061104090610abf565b6001600160a01b0390921691161438838e610e82565b919091805180611067575b50501490565b91906020908180820191600595861b0101925b81518111851b908152828251911852816040600020910193838510156110a157939061107a565b50925050503880611061565b3565ffffffffffff811681036105175790565b9065ffffffffffff60a0830160c08401826110da826110ad565b166111d957506110eb60e0916110ad565b935b0191816110f9846110ad565b16611105575b50505090565b60009081526002602052604081203382526020526040812090600183835460301c1601908382116111c5575081546bffffffffffff000000000000191660309190911b65ffffffffffff60301b161781556111679082905460301c16926110ad565b1610611175573880806110ff565b60405162461bcd60e51b815260206004820152602260248201527f53657373696f6e4b657956616c696461746f723a2072756e7320657863656564604482015261195960f21b6064820152608490fd5b634e487b7160e01b81526011600452602490fd5b9390826111e5826110ad565b1615611261576000848152600260205260408120338252602052604081209184835497818916928315156000146112485750611220906110ad565b1601908482116111c55750908360e0939216955b65ffffffffffff19168685161790556110ed565b91505060e09493925061125b91506110ad565b95611234565b60405162461bcd60e51b815260206004820152602b60248201527f53657373696f6e4b657956616c696461746f723a20696e76616c69642065786560448201526a637574696f6e2072756c6560a81b6064820152608490fd5b91959390949260009560009360018060a01b038091168552602094600186526040812033825286526040812099806004116100b95783356001600160e01b031916635194544760e01b14928588018161131282610abf565b16159081156114b3575b506113279150610ad3565b8215611438576044116101085761136d92610ed3928592611352606085013560248501351115610b2b565b50156114315760445b81013501602460048201359101611513565b6113a96113c6600289015461138184610bf1565b60405187810192835260e09190911b6001600160e01b03191660208301529283906024830190565b03926113bd601f1994858101835282610548565b519020836110c0565b9765ffffffffffff8060018301541680918b1610611427575b509161140361140f61141a97969593610fd495549660405193849182019586610c15565b03908101835282610548565b519020933691610d61565b1561142157565b60019150565b98506114036113df565b602461135b565b5061010084013560028110156100b95760010361145e5761136d92610ed3928592611352565b60405162461bcd60e51b815260048101879052602760248201527f53657373696f6e4b657956616c696461746f723a206f7065726174696f6e206d6044820152660d2e6dac2e8c6d60cb1b6064820152608490fd5b9050826024116114da57906114ca61132792610abf565b16601086013560601c143861131c565b8380fd5b903590601e198136030182121561051757018035906001600160401b0382116105175760200191606082023603831361051757565b60049082821161051757604090848201356001600160e01b03198181169182900361051757823516036116f15760005b6080860161155181886114de565b90508210156116e55761156490876114de565b8210156116d057606082020180358086018087116116bb5760248083018092116116a857508710610517578301850135602082013560068110156105175780158061169b575b156115bd57505050505050505050600090565b600181148061168e575b156115da57505050505050505050600090565b6002811480611681575b156115f757505050505050505050600090565b6003811480611675575b1561161457505050505050505050600090565b86811480611669575b1561163057505050505050505050600090565b6005869114928361165c575b5050506116515761164c90610a9a565b611543565b505050505050600090565b013514905038848161163c565b5085830135821161161d565b50858301358210611601565b50858301358210156115e4565b50858301358211156115c7565b50858301358214156115aa565b634e487b7160e01b600090815260118952fd5b601187634e487b7160e01b6000525260246000fd5b603285634e487b7160e01b6000525260246000fd5b50505050505050600190565b505050505060009056"
  },
} as const;
