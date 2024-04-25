export const COINBASE_SMART_WALLET_ARTIFACTS = {
  CoinbaseSmartWalletFactory: {
    address: '0x0BA5ED0c6AA8c49038F819E587E2633c4A9F428a',
    abi: [
      {
        "type": "constructor",
        "inputs": [
          {
            "name": "implementation_",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "payable"
      },
      {
        "type": "function",
        "name": "createAccount",
        "inputs": [
          {
            "name": "owners",
            "type": "bytes[]",
            "internalType": "bytes[]"
          },
          {
            "name": "nonce",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [
          {
            "name": "account",
            "type": "address",
            "internalType": "contract CoinbaseSmartWallet"
          }
        ],
        "stateMutability": "payable"
      },
      {
        "type": "function",
        "name": "getAddress",
        "inputs": [
          {
            "name": "owners",
            "type": "bytes[]",
            "internalType": "bytes[]"
          },
          {
            "name": "nonce",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "implementation",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "initCodeHash",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "error",
        "name": "OwnerRequired",
        "inputs": []
      }
    ],
    bytecode: '0x60806040526004361061003f5760003560e01c8063250b1b41146100445780633ffba36f1461008e5780635c60da1b146100a1578063db4c545e146100d5575b600080fd5b34801561005057600080fd5b5061006461005f366004610480565b61017f565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61006461009c366004610480565b610235565b3480156100ad57600080fd5b506100647f000000000000000000000000000100abaad02f1cfc8bbe32bd5a564817339e7281565b3480156100e157600080fd5b50604080517fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f360609081527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e2076835261600960209081527f000000000000000000000000000100abaad02f1cfc8bbe32bd5a564817339e72601e5268603d3d8160223d3973600a52605f60212093839052600090915291815201610085565b600061022d61021c604080517fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f360609081527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e207683526160096020527f000000000000000000000000000100abaad02f1cfc8bbe32bd5a564817339e72601e5268603d3d8160223d3973600a52605f60212091909252600090915290565b610227868686610344565b3061037a565b949350505050565b6000828103610270576040517f3c776be100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806102a8347f000000000000000000000000000100abaad02f1cfc8bbe32bd5a564817339e726102a3898989610344565b61039c565b915091508092508161033b576040517f6f2de70e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841690636f2de70e906103089089908990600401610616565b600060405180830381600087803b15801561032257600080fd5b505af1158015610336573d6000803e3d6000fd5b505050505b50509392505050565b600083838360405160200161035b9392919061062a565b6040516020818303038152906040528051906020012090509392505050565b600060ff60005350603592835260601b60015260155260556000908120915290565b6000806040517fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e207660405261600960205284601e5268603d3d8160223d3973600a52605f60212060358201523060581b815260ff8153836015820152605581209150813b6104485783605f602188f59150816104435763301164256000526004601cfd5b61046e565b60019250851561046e5760003860003889865af161046e5763b12d13eb6000526004601cfd5b80604052506000606052935093915050565b60008060006040848603121561049557600080fd5b833567ffffffffffffffff808211156104ad57600080fd5b818601915086601f8301126104c157600080fd5b8135818111156104d057600080fd5b8760208260051b85010111156104e557600080fd5b6020928301989097509590910135949350505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6000838385526020808601955060208560051b8301018460005b87811015610609577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18836030181126105bf57600080fd5b8701848101903567ffffffffffffffff8111156105db57600080fd5b8036038213156105ea57600080fd5b6105f58582846104fb565b9a86019a945050509083019060010161055e565b5090979650505050505050565b60208152600061022d602083018486610544565b60408152600061063e604083018587610544565b905082602083015294935050505056fea2646970667358221220e7c6d439c70f2eaafecf93e778d782e7cba05d58eaf254e2d2be4dd98bc1b11464736f6c63430008170033'

  },
  CoinbaseSmartWallet: {
    address: '0x000100abaad02f1cfc8bbe32bd5a564817339e72',
    abi: [
      {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "fallback",
        "stateMutability": "payable"
      },
      {
        "type": "receive",
        "stateMutability": "payable"
      },
      {
        "type": "function",
        "name": "REPLAYABLE_NONCE_KEY",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "addOwnerAddress",
        "inputs": [
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "addOwnerPublicKey",
        "inputs": [
          {
            "name": "x",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "y",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "canSkipChainIdValidation",
        "inputs": [
          {
            "name": "functionSelector",
            "type": "bytes4",
            "internalType": "bytes4"
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
        "name": "domainSeparator",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "eip712Domain",
        "inputs": [],
        "outputs": [
          {
            "name": "fields",
            "type": "bytes1",
            "internalType": "bytes1"
          },
          {
            "name": "name",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "version",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "chainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "verifyingContract",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "salt",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "extensions",
            "type": "uint256[]",
            "internalType": "uint256[]"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "entryPoint",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "execute",
        "inputs": [
          {
            "name": "target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "data",
            "type": "bytes",
            "internalType": "bytes"
          }
        ],
        "outputs": [],
        "stateMutability": "payable"
      },
      {
        "type": "function",
        "name": "executeBatch",
        "inputs": [
          {
            "name": "calls",
            "type": "tuple[]",
            "internalType": "struct CoinbaseSmartWallet.Call[]",
            "components": [
              {
                "name": "target",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
              }
            ]
          }
        ],
        "outputs": [],
        "stateMutability": "payable"
      },
      {
        "type": "function",
        "name": "executeWithoutChainIdValidation",
        "inputs": [
          {
            "name": "calls",
            "type": "bytes[]",
            "internalType": "bytes[]"
          }
        ],
        "outputs": [],
        "stateMutability": "payable"
      },
      {
        "type": "function",
        "name": "getUserOpHashWithoutChainId",
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
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "implementation",
        "inputs": [],
        "outputs": [
          {
            "name": "$",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "initialize",
        "inputs": [
          {
            "name": "owners",
            "type": "bytes[]",
            "internalType": "bytes[]"
          }
        ],
        "outputs": [],
        "stateMutability": "payable"
      },
      {
        "type": "function",
        "name": "isOwnerAddress",
        "inputs": [
          {
            "name": "account",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "bool",
            "internalType": "bool"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "isOwnerBytes",
        "inputs": [
          {
            "name": "account",
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
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "isOwnerPublicKey",
        "inputs": [
          {
            "name": "x",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "y",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "bool",
            "internalType": "bool"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "isValidSignature",
        "inputs": [
          {
            "name": "hash",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "signature",
            "type": "bytes",
            "internalType": "bytes"
          }
        ],
        "outputs": [
          {
            "name": "result",
            "type": "bytes4",
            "internalType": "bytes4"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "nextOwnerIndex",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "ownerAtIndex",
        "inputs": [
          {
            "name": "index",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "bytes",
            "internalType": "bytes"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "ownerCount",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "proxiableUUID",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "removeLastOwner",
        "inputs": [
          {
            "name": "index",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "bytes",
            "internalType": "bytes"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "removeOwnerAtIndex",
        "inputs": [
          {
            "name": "index",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "bytes",
            "internalType": "bytes"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "removedOwnersCount",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "replaySafeHash",
        "inputs": [
          {
            "name": "hash",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "upgradeToAndCall",
        "inputs": [
          {
            "name": "newImplementation",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "data",
            "type": "bytes",
            "internalType": "bytes"
          }
        ],
        "outputs": [],
        "stateMutability": "payable"
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
            "name": "userOpHash",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "missingAccountFunds",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [
          {
            "name": "validationData",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "event",
        "name": "AddOwner",
        "inputs": [
          {
            "name": "index",
            "type": "uint256",
            "indexed": true,
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "bytes",
            "indexed": false,
            "internalType": "bytes"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "RemoveOwner",
        "inputs": [
          {
            "name": "index",
            "type": "uint256",
            "indexed": true,
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "bytes",
            "indexed": false,
            "internalType": "bytes"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Upgraded",
        "inputs": [
          {
            "name": "implementation",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          }
        ],
        "anonymous": false
      },
      {
        "type": "error",
        "name": "AlreadyOwner",
        "inputs": [
          {
            "name": "owner",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "type": "error",
        "name": "Initialized",
        "inputs": []
      },
      {
        "type": "error",
        "name": "InvalidEthereumAddressOwner",
        "inputs": [
          {
            "name": "owner",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "type": "error",
        "name": "InvalidNonceKey",
        "inputs": [
          {
            "name": "key",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "type": "error",
        "name": "InvalidOwnerBytesLength",
        "inputs": [
          {
            "name": "owner",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "type": "error",
        "name": "LastOwner",
        "inputs": []
      },
      {
        "type": "error",
        "name": "NoOwnerAtIndex",
        "inputs": [
          {
            "name": "index",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "type": "error",
        "name": "NotLastOwner",
        "inputs": [
          {
            "name": "ownersRemaining",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "type": "error",
        "name": "SelectorNotAllowed",
        "inputs": [
          {
            "name": "selector",
            "type": "bytes4",
            "internalType": "bytes4"
          }
        ]
      },
      {
        "type": "error",
        "name": "Unauthorized",
        "inputs": []
      },
      {
        "type": "error",
        "name": "UnauthorizedCallContext",
        "inputs": []
      },
      {
        "type": "error",
        "name": "UpgradeFailed",
        "inputs": []
      },
      {
        "type": "error",
        "name": "WrongOwnerAtIndex",
        "inputs": [
          {
            "name": "index",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "expectedOwner",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "actualOwner",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    bytecode: '0x6080604052600436106101b05760003560e01c80635c60da1b116100ec578063a2e1a8d81161008a578063b819736711610064578063b81973671461051d578063ce1506be1461053d578063d948fd2e1461055d578063f698da2514610591576101b7565b8063a2e1a8d8146104c3578063b0d691fe146104e3578063b61d27f61461050a576101b7565b806388ce4c7c116100c657806388ce4c7c1461044057806389625b57146104565780638ea69029146104765780639f9bcb34146104a3576101b7565b80635c60da1b146103b05780636f2de70e1461040557806384b0196e14610418576101b7565b80632c2abd1e116101595780633a871cdd116101335780633a871cdd146103485780634f1ef286146103685780634f6e7f221461037b57806352d1902d1461039b576101b7565b80632c2abd1e146102ee57806334fcd5be1461030157806336d9cf9b14610314576101b7565b80631626ba7e1161018a5780631626ba7e1461025d5780631ca5393f146102ae57806329565e3b146102ce576101b7565b8063066a1eb7146101e55780630db026221461021a5780630f0f3f241461023d576101b7565b366101b757005b60003560e01c63bc197c81811463f23a6e6182141763150b7a02821417156101e357806020526020603cf35b005b3480156101f157600080fd5b5061020561020036600461388d565b6105a6565b60405190151581526020015b60405180910390f35b34801561022657600080fd5b5061022f610633565b604051908152602001610211565b34801561024957600080fd5b506101e36102583660046138d8565b61068a565b34801561026957600080fd5b5061027d61027836600461393c565b610708565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610211565b3480156102ba57600080fd5b506102056102c9366004613acb565b610773565b3480156102da57600080fd5b506101e36102e936600461388d565b6107c0565b6101e36102fc366004613b45565b6107e9565b6101e361030f366004613b45565b610935565b34801561032057600080fd5b507f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f015461022f565b34801561035457600080fd5b5061022f610363366004613ba0565b610a34565b6101e3610376366004613bee565b610bbc565b34801561038757600080fd5b5061022f610396366004613c28565b610ca0565b3480156103a757600080fd5b5061022f610cf1565b3480156103bc57600080fd5b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610211565b6101e3610413366004613b45565b610d51565b34801561042457600080fd5b5061042d610dbc565b6040516102119796959493929190613ccb565b34801561044c57600080fd5b5061022f61210581565b34801561046257600080fd5b506101e361047136600461393c565b610e65565b34801561048257600080fd5b50610496610491366004613d8d565b610eb9565b6040516102119190613da6565b3480156104af57600080fd5b506102056104be366004613db9565b610f7a565b3480156104cf57600080fd5b506102056104de3660046138d8565b611106565b3480156104ef57600080fd5b50735ff137d4b0fdcd49dca30c7cf57e578a026d27896103e0565b6101e3610518366004613dfb565b611189565b34801561052957600080fd5b506101e361053836600461393c565b6111ed565b34801561054957600080fd5b5061022f610558366004613d8d565b61124a565b34801561056957600080fd5b507f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f005461022f565b34801561059d57600080fd5b5061022f611255565b60408051602081018490529081018290526000907f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f0390606001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261061791613e55565b9081526040519081900360200190205460ff1690505b92915050565b7f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f01547f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f00805460009261068491613ea0565b91505090565b610692611341565b6040805173ffffffffffffffffffffffffffffffffffffffff8316602082015261070591015b6040516020818303038152906040526106ee7f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f0090565b80549060006106fc83613eb3565b9190505561138d565b50565b600061071d6107168561124a565b84846114b8565b1561074957507f1626ba7e0000000000000000000000000000000000000000000000000000000061076c565b507fffffffff000000000000000000000000000000000000000000000000000000005b9392505050565b60007f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f00600301826040516107a79190613e55565b9081526040519081900360200190205460ff1692915050565b6107c8611341565b60408051602081018490529081018290526107e5906060016106b8565b5050565b33735ff137d4b0fdcd49dca30c7cf57e578a026d278914610836576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156109305736600084848481811061085657610856613eeb565b90506020028101906108689190613f1a565b909250905060006108798284613f7f565b905061088481610f7a565b6108e3576040517f3b06e1460000000000000000000000000000000000000000000000000000000081527fffffffff00000000000000000000000000000000000000000000000000000000821660048201526024015b60405180910390fd5b61092530600085858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061160c92505050565b505050600101610839565b505050565b33735ff137d4b0fdcd49dca30c7cf57e578a026d27891461095857610958611341565b60005b8181101561093057610a2c83838381811061097857610978613eeb565b905060200281019061098a9190613fc7565b6109989060208101906138d8565b8484848181106109aa576109aa613eeb565b90506020028101906109bc9190613fc7565b602001358585858181106109d2576109d2613eeb565b90506020028101906109e49190613fc7565b6109f2906040810190613f1a565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061160c92505050565b60010161095b565b600033735ff137d4b0fdcd49dca30c7cf57e578a026d278914610a83576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81602085013560401c7f2c2abd1e00000000000000000000000000000000000000000000000000000000610aba6060880188613f1a565b610ac391613f7f565b7fffffffff000000000000000000000000000000000000000000000000000000001603610b3857610af386610ca0565b94506121058114610b33576040517f2ef37813000000000000000000000000000000000000000000000000000000008152600481018290526024016108da565b610b76565b6121058103610b76576040517f2ef37813000000000000000000000000000000000000000000000000000000008152600481018290526024016108da565b610b8d85610b88610140890189613f1a565b6114b8565b15610b9c576000925050610ba2565b60019250505b8015610bb45760003860003884335af1505b509392505050565b7f000000000000000000000000000100abaad02f1cfc8bbe32bd5a564817339e72308103610bf257639f03a0266000526004601cfd5b610bfb84611689565b8360601b60601c93506352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80602060016004601d895afa5114610c4d576355299b496001526004601dfd5b847fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600038a28490558115610c9a57604051828482376000388483885af4610c98573d6000823e3d81fd5b505b50505050565b6000610cab82611691565b604080516020810192909252735ff137d4b0fdcd49dca30c7cf57e578a026d2789908201526060015b604051602081830303815290604052805190602001209050919050565b60007f000000000000000000000000000100abaad02f1cfc8bbe32bd5a564817339e72308114610d2957639f03a0266000526004601cfd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc91505b5090565b7f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f005415610daa576040517f5daa87a000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107e5610db78284613ffb565b6116aa565b7f0f000000000000000000000000000000000000000000000000000000000000006060806000808083610e53604080518082018252601581527f436f696e6261736520536d6172742057616c6c657400000000000000000000006020808301919091528251808401909352600183527f31000000000000000000000000000000000000000000000000000000000000009083015291565b97989097965046955030945091925090565b610e6d611341565b610e75610633565b600103610eae576040517f948bf89700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610930838383611861565b60008181527f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f0260205260409020805460609190610ef590614081565b80601f0160208091040260200160405190810160405280929190818152602001828054610f2190614081565b8015610f6e5780601f10610f4357610100808354040283529160200191610f6e565b820191906000526020600020905b815481529060010190602001808311610f5157829003601f168201915b50505050509050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f29565e3b00000000000000000000000000000000000000000000000000000000148061100d57507fffffffff0000000000000000000000000000000000000000000000000000000082167f0f0f3f2400000000000000000000000000000000000000000000000000000000145b8061105957507fffffffff0000000000000000000000000000000000000000000000000000000082167f89625b5700000000000000000000000000000000000000000000000000000000145b806110a557507fffffffff0000000000000000000000000000000000000000000000000000000082167fb819736700000000000000000000000000000000000000000000000000000000145b806110f157507fffffffff0000000000000000000000000000000000000000000000000000000082167f4f1ef28600000000000000000000000000000000000000000000000000000000145b156110fe57506001919050565b506000919050565b60007f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f006040805173ffffffffffffffffffffffffffffffffffffffff851660208201526003929092019101604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526107a791613e55565b33735ff137d4b0fdcd49dca30c7cf57e578a026d2789146111ac576111ac611341565b610c9a848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061160c92505050565b6111f5611341565b60006111ff610633565b9050600181111561123f576040517f823f1aa8000000000000000000000000000000000000000000000000000000008152600481018290526024016108da565b610c9a848484611861565b600061062d82611a05565b60008060006112c8604080518082018252601581527f436f696e6261736520536d6172742057616c6c657400000000000000000000006020808301919091528251808401909352600183527f31000000000000000000000000000000000000000000000000000000000000009083015291565b8151602080840191909120825182840120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f9481019490945283019190915260608201524660808201523060a0820152919350915060c001604051602081830303815290604052805190602001209250505090565b61134a33611106565b8061135457503330145b1561135b57565b6040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61139682610773565b156113cf57816040517f8d16255a0000000000000000000000000000000000000000000000000000000081526004016108da9190613da6565b6040517f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f00906001907f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f0390611424908690613e55565b908152604080516020928190038301902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016931515939093179092556000848152600284019091522061147a848261411e565b50817f38109edc26e166b5579352ce56a50813177eb25208fd90d61f2f378386220220846040516114ab9190613da6565b60405180910390a2505050565b6000806114c783850185614238565b905060006114d88260000151610eb9565b9050805160200361155d5773ffffffffffffffffffffffffffffffffffffffff611501826142c5565b111561153b57806040517fbff1ac650000000000000000000000000000000000000000000000000000000081526004016108da9190613da6565b60006020820151905061155381888560200151611a56565b935050505061076c565b80516040036115d8576000808280602001905181019061157d9190614307565b915091506000846020015180602001905181019061159b9190614370565b90506115cc896040516020016115b391815260200190565b6040516020818303038152906040526000838686611b68565b9550505050505061076c565b806040517f4eeab7220000000000000000000000000000000000000000000000000000000081526004016108da9190613da6565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516116359190613e55565b60006040518083038185875af1925050503d8060008114611672576040519150601f19603f3d011682016040523d82523d6000602084013e611677565b606091505b509150915081610c9857805160208201fd5b610705611341565b600061169c82611f72565b805190602001209050919050565b7f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f00805460005b835181101561185b578381815181106116eb576116eb613eeb565b60200260200101515160201415801561171f575083818151811061171157611711613eeb565b602002602001015151604014155b156117715783818151811061173657611736613eeb565b60200260200101516040517f4eeab7220000000000000000000000000000000000000000000000000000000081526004016108da9190613da6565b83818151811061178357611783613eeb565b60200260200101515160201480156117d2575073ffffffffffffffffffffffffffffffffffffffff80168482815181106117bf576117bf613eeb565b60200260200101516117d0906142c5565b115b15611824578381815181106117e9576117e9613eeb565b60200260200101516040517fbff1ac650000000000000000000000000000000000000000000000000000000081526004016108da9190613da6565b61185384828151811061183957611839613eeb565b6020026020010151838061184c90613eb3565b945061138d565b6001016116d0565b50905550565b600061186c84610eb9565b905080516000036118ac576040517f68188e7a000000000000000000000000000000000000000000000000000000008152600481018590526024016108da565b82826040516118bc92919061442c565b604051809103902081805190602001201461190b57838383836040517f781f2e390000000000000000000000000000000000000000000000000000000081526004016108da9493929190614485565b6040517f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f00907f97e2c6aad4ce5d562ebfaa00db6b9e0fb66ea5d8162ed5b243f51a2e03086f039061195f908690869061442c565b908152604080516020928190038301902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905560008781526002840190925281206119ad91613843565b6001810180549060006119bf83613eb3565b9190505550847fcf95bbfe6f870f8cc40482dc3dccdafd268f0e9ce0a4f24ea1bea9be64e505ff85856040516119f69291906144bc565b60405180910390a25050505050565b6000611a0f611255565b611a1883612052565b6040517f1901000000000000000000000000000000000000000000000000000000000000602082015260228101929092526042820152606201610cd4565b73ffffffffffffffffffffffffffffffffffffffff909216916000831561076c576040518360005260208301516040526040835103611ad3576040830151601b8160ff1c016020528060011b60011c60605250602060016080600060015afa805186183d1517611ad15750600060605260405250600161076c565b505b6041835103611b1957606083015160001a6020526040830151606052602060016080600060015afa805186183d1517611b175750600060605260405250600161076c565b505b600060605280604052631626ba7e60e01b808252846004830152602482016040815284516020018060448501828860045afa505060208160443d01858a5afa9051909114169150509392505050565b6000611b9560027fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325516144d0565b8460a001511115611ba857506000611f69565b6060840151600090611bcb90611bbf81601561450b565b6020880151919061208d565b90507fff1a2a9176d650e4a99dedb58f1793003935130579fe17b5a3f698ac5b00e634818051906020012014611c05576000915050611f69565b6000611c1088612111565b604051602001611c20919061451e565b60405160208183030381529060405290506000611c58876040015183518960400151611c4c919061450b565b60208a0151919061208d565b90508180519060200120818051906020012014611c7b5760009350505050611f69565b865180517f01000000000000000000000000000000000000000000000000000000000000009182916020908110611cb457611cb4613eeb565b0160200151167fff000000000000000000000000000000000000000000000000000000000000001614611ced5760009350505050611f69565b878015611d595750865180517f04000000000000000000000000000000000000000000000000000000000000009182916020908110611d2e57611d2e613eeb565b0160200151167fff000000000000000000000000000000000000000000000000000000000000001614155b15611d6a5760009350505050611f69565b600060028860200151604051611d809190613e55565b602060405180830381855afa158015611d9d573d6000803e3d6000fd5b5050506040513d601f19601f82011682018060405250810190611dc0919061458a565b905060006002896000015183604051602001611ddd9291906145a3565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052611e1591613e55565b602060405180830381855afa158015611e32573d6000803e3d6000fd5b5050506040513d601f19601f82011682018060405250810190611e55919061458a565b6080808b015160a0808d015160408051602081018790529081019390935260608301529181018b905290810189905290915060009060c001604051602081830303815290604052905060008061010073ffffffffffffffffffffffffffffffffffffffff1683604051611ec89190613e55565b600060405180830381855afa9150503d8060008114611f03576040519150601f19603f3d011682016040523d82523d6000602084013e611f08565b606091505b50805191935091501515828015611f1c5750805b15611f485781806020019051810190611f35919061458a565b6001149950505050505050505050611f69565b611f5d858e608001518f60a001518f8f612137565b99505050505050505050505b95945050505050565b6060813560208301356000611f92611f8d6040870187613f1a565b612286565b90506000611fa6611f8d6060880188613f1a565b9050608086013560a087013560c088013560e08901356101008a01356000611fd5611f8d6101208e018e613f1a565b6040805173ffffffffffffffffffffffffffffffffffffffff9c909c1660208d01528b81019a909a5260608b019890985250608089019590955260a088019390935260c087019190915260e08601526101008501526101208401526101408084019190915281518084039091018152610160909201905292915050565b604080517f9b493d222105fee7df163ab5d57f0bf1ffd2da04dd5fafbe10b54c41c1adc6576020820152908101829052600090606001610cd4565b6060835182811161209c578092505b8381116120a7578093505b508183101561076c5750604051828203808252938301937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f820181165b86810151848201528101806120e65750600083830160200152603f9091011681016040529392505050565b606061062d826040518060600160405280604081526020016145dd604091396000612299565b600084158061216657507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518510155b8061216f575083155b8061219a57507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518410155b156121a757506000611f69565b6121b18383612419565b6121bd57506000611f69565b60006121c885612592565b905060007fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551828909905060007fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518389099050600061222887878585612616565b90507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325516122758a7fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551613ea0565b8208159a9950505050505050505050565b6000604051828085833790209392505050565b606083516000036122b9575060408051602081019091526000815261076c565b6000826122ea576003855160046122d091906145c5565b6122db90600261450b565b6122e591906144d0565b61230f565b6003855160026122fa919061450b565b61230491906144d0565b61230f9060046145c5565b905060008167ffffffffffffffff81111561232c5761232c613988565b6040519080825280601f01601f191660200182016040528015612356576020820181803683370190505b50905060018501602082018788518901602081018051600082525b828410156123cc576003840193508351603f8160121c168701518653600186019550603f81600c1c168701518653600186019550603f8160061c168701518653600186019550603f8116870151865350600185019450612371565b90525050851561240d576003885106600181146123f057600281146124035761240b565b603d6001830353603d600283035361240b565b603d60018303535b505b50909695505050505050565b60007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8310158061246a57507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8210155b8061247c57508215801561247c575081155b156124895750600061062d565b60007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff838409905060007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff807fffffffff00000001000000000000000000000000fffffffffffffffffffffffc87097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff877fffffffff00000001000000000000000000000000ffffffffffffffffffffffff898a09090890507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff7f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b820891909114949350505050565b600060405160208152602080820152602060408201528260608201527fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63254f60808201527fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63255160a082015260208160c0836005600019fa61260f57600080fd5b5192915050565b600080808060ff81808815801561262b575087155b1561263f576000965050505050505061312c565b61268b7f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2967f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f58d8d613134565b90925090508115801561269c575080155b1561270d577fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551887fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551038a08985060009750881580156126f9575087155b1561270d576000965050505050505061312c565b600189841c16600189851c1660011b015b806127405760018403935060018a851c1660018a861c1660011b01905061271e565b50600189841c16600189851c1660011b019550600186036127a2577f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c29696507f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f593505b600286036127b1578a96508993505b600386036127c0578196508093505b60018303925060019550600194505b827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1115613082577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff846002097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8182097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff818a097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82840992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff807fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8b8d087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8c7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038e08096003097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff89850998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a840999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80837fffffffff00000001000000000000000000000000fffffffffffffffffffffffd097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff838409089a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80837fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038d08820992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff837fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a870908975060018d881c1660018d891c1660011b01905080612aab57877fffffffff00000001000000000000000000000000ffffffffffffffffffffffff03975050505050613077565b60018103612afa577f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c29693507f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f592505b60028103612b09578e93508d92505b60038103612b18578593508492505b89612b3157509198506001975087965094506130779050565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff887fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8b8609087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8c7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8d880908935080612e705783612e70577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff897fffffffff00000001000000000000000000000000fffffffffffffffffffffffd0994507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff85860993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff848d0992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff84860994507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff808c7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038e087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8d8f080990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8160030991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a860999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8b85099a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80847fffffffff00000001000000000000000000000000fffffffffffffffffffffffd097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff848509089b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff808d7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038508830993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff808a8709850898505050505050613077565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff84850991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8483097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff838d099b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff818c099a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff838e097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80827fffffffff00000001000000000000000000000000fffffffffffffffffffffffd097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff847fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff878809080893507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80838d097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff857fffffffff00000001000000000000000000000000ffffffffffffffffffffffff887fffffffff00000001000000000000000000000000ffffffffffffffffffffffff03860809089a50505050809a50505050505b6001830392506127cf565b60405186606082015260208152602080820152602060408201527fffffffff00000001000000000000000000000000fffffffffffffffffffffffd60808201527fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60a082015260208160c0836005600019fa6130fd57600080fd5b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff815189099750505050505050505b949350505050565b60008080808661314b5785859350935050506131b9565b8461315d5787879350935050506131b9565b858814801561316b57508487145b1561318c5761317d88886001806131c2565b929a50909850925090506131a6565b61319b88886001808a8a61344c565b929a50909850925090505b6131b288888484613711565b9350935050505b94509492505050565b6000806000807fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8760020993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff84850991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82890990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82850992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff86830991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff807fffffffff00000001000000000000000000000000ffffffffffffffffffffffff888b087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff897fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038c080960030995507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80827fffffffff00000001000000000000000000000000fffffffffffffffffffffffd097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8889090893507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80857fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038308870997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff85840990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff808885097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff0389089250945094509450949050565b6000806000808860000361346b57508492508391506001905080613704565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9889039889818988090894507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a89090895507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff86870993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff86850992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff84890991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff83880990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff848b0997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80897fffffffff00000001000000000000000000000000fffffffffffffffffffffffd097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff857fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff898a09080893507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80848b097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff877fffffffff00000001000000000000000000000000ffffffffffffffffffffffff887fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038d08090892505b9650965096509692505050565b600080600061371f846137c6565b90507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff818709915060007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82870990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff81820991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8289099350505094509492505050565b600060405160208152602080820152602060408201528260608201527fffffffff00000001000000000000000000000000fffffffffffffffffffffffd60808201527fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60a082015260208160c0836005600019fa61260f57600080fd5b50805461384f90614081565b6000825580601f1061385f575050565b601f01602090049060005260206000209081019061070591905b80821115610d4d5760008155600101613879565b600080604083850312156138a057600080fd5b50508035926020909101359150565b803573ffffffffffffffffffffffffffffffffffffffff811681146138d357600080fd5b919050565b6000602082840312156138ea57600080fd5b61076c826138af565b60008083601f84011261390557600080fd5b50813567ffffffffffffffff81111561391d57600080fd5b60208301915083602082850101111561393557600080fd5b9250929050565b60008060006040848603121561395157600080fd5b83359250602084013567ffffffffffffffff81111561396f57600080fd5b61397b868287016138f3565b9497909650939450505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff811182821017156139da576139da613988565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715613a2757613a27613988565b604052919050565b600067ffffffffffffffff821115613a4957613a49613988565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112613a8657600080fd5b8135613a99613a9482613a2f565b6139e0565b818152846020838601011115613aae57600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215613add57600080fd5b813567ffffffffffffffff811115613af457600080fd5b61312c84828501613a75565b60008083601f840112613b1257600080fd5b50813567ffffffffffffffff811115613b2a57600080fd5b6020830191508360208260051b850101111561393557600080fd5b60008060208385031215613b5857600080fd5b823567ffffffffffffffff811115613b6f57600080fd5b613b7b85828601613b00565b90969095509350505050565b60006101608284031215613b9a57600080fd5b50919050565b600080600060608486031215613bb557600080fd5b833567ffffffffffffffff811115613bcc57600080fd5b613bd886828701613b87565b9660208601359650604090950135949350505050565b600080600060408486031215613c0357600080fd5b613c0c846138af565b9250602084013567ffffffffffffffff81111561396f57600080fd5b600060208284031215613c3a57600080fd5b813567ffffffffffffffff811115613c5157600080fd5b61312c84828501613b87565b60005b83811015613c78578181015183820152602001613c60565b50506000910152565b60008151808452613c99816020860160208601613c5d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7fff00000000000000000000000000000000000000000000000000000000000000881681526000602060e06020840152613d0860e084018a613c81565b8381036040850152613d1a818a613c81565b6060850189905273ffffffffffffffffffffffffffffffffffffffff8816608086015260a0850187905284810360c08601528551808252602080880193509091019060005b81811015613d7b57835183529284019291840191600101613d5f565b50909c9b505050505050505050505050565b600060208284031215613d9f57600080fd5b5035919050565b60208152600061076c6020830184613c81565b600060208284031215613dcb57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461076c57600080fd5b60008060008060608587031215613e1157600080fd5b613e1a856138af565b935060208501359250604085013567ffffffffffffffff811115613e3d57600080fd5b613e49878288016138f3565b95989497509550505050565b60008251613e67818460208701613c5d565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561062d5761062d613e71565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613ee457613ee4613e71565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112613f4f57600080fd5b83018035915067ffffffffffffffff821115613f6a57600080fd5b60200191503681900382131561393557600080fd5b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015613fbf5780818660040360031b1b83161692505b505092915050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112613e6757600080fd5b600067ffffffffffffffff8084111561401657614016613988565b8360051b6020614028602083016139e0565b8681529185019160208101903684111561404157600080fd5b865b848110156140755780358681111561405b5760008081fd5b61406736828b01613a75565b845250918301918301614043565b50979650505050505050565b600181811c9082168061409557607f821691505b602082108103613b9a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b601f821115610930576000816000526020600020601f850160051c810160208610156140f75750805b601f850160051c820191505b8181101561411657828155600101614103565b505050505050565b815167ffffffffffffffff81111561413857614138613988565b61414c816141468454614081565b846140ce565b602080601f83116001811461419f57600084156141695750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555614116565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156141ec578886015182559484019460019091019084016141cd565b508582101561422857878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561424a57600080fd5b813567ffffffffffffffff8082111561426257600080fd5b908301906040828603121561427657600080fd5b60405160408101818110838211171561429157614291613988565b604052823581526020830135828111156142aa57600080fd5b6142b687828601613a75565b60208301525095945050505050565b80516020808301519190811015613b9a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60209190910360031b1b16919050565b6000806040838503121561431a57600080fd5b505080516020909101519092909150565b600082601f83011261433c57600080fd5b815161434a613a9482613a2f565b81815284602083860101111561435f57600080fd5b61312c826020830160208701613c5d565b60006020828403121561438257600080fd5b815167ffffffffffffffff8082111561439a57600080fd5b9083019060c082860312156143ae57600080fd5b6143b66139b7565b8251828111156143c557600080fd5b6143d18782860161432b565b8252506020830151828111156143e657600080fd5b6143f28782860161432b565b60208301525060408301516040820152606083015160608201526080830151608082015260a083015160a082015280935050505092915050565b8183823760009101908152919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b84815260606020820152600061449f60608301858761443c565b82810360408401526144b18185613c81565b979650505050505050565b60208152600061312c60208301848661443c565b600082614506577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8082018082111561062d5761062d613e71565b7f226368616c6c656e6765223a220000000000000000000000000000000000000081526000825161455681600d850160208701613c5d565b7f2200000000000000000000000000000000000000000000000000000000000000600d939091019283015250600e01919050565b60006020828403121561459c57600080fd5b5051919050565b600083516145b5818460208801613c5d565b9190910191825250602001919050565b808202811582820484141761062d5761062d613e7156fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392d5fa26469706673582212208c2ea73863e242a1e00858d0d525af430fe3045920a71b632ca3e728ddc8817d64736f6c63430008170033'
  }
} as const;