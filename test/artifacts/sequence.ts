export const SEQUENCE_ARTIFACTS = {
  SequenceFactory: {
    address: "0xFaA5c0b14d1bED5C888Ca655B9a8A5911F78eF4A",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_mainModule",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "_salt",
            type: "bytes32",
          },
        ],
        name: "DeployFailed",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_mainModule",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "_salt",
            type: "bytes32",
          },
        ],
        name: "deploy",
        outputs: [
          {
            internalType: "address",
            name: "_contract",
            type: "address",
          },
        ],
        stateMutability: "payable",
        type: "function",
      },
    ],
    bytecode:
      "0x60806040526004361061001e5760003560e01c806332c02a1414610023575b600080fd5b610036610031366004610136565b61005f565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6000806040518060600160405280602881526020016101ae602891398473ffffffffffffffffffffffffffffffffffffffff166040516020016100a392919061017b565b60405160208183030381529060405290508281516020830134f5915073ffffffffffffffffffffffffffffffffffffffff821661012f576040517f8caac80500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851660048201526024810184905260440160405180910390fd5b5092915050565b6000806040838503121561014957600080fd5b823573ffffffffffffffffffffffffffffffffffffffff8116811461016d57600080fd5b946020939093013593505050565b6000835160005b8181101561019c5760208187018101518583015201610182565b50919091019182525060200191905056fe603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3a26469706673582212203e46c5b0f3a6bebab844eb5e4594ebb07eac1ae451f779e533ead5e744b1a2a664736f6c63430008120033",
  },
  SequenceMainModule: {
    address: "0xfBf8f1A5E00034762D928f46d438B947f5d4065d",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_factory",
            type: "address",
          },
          {
            internalType: "address",
            name: "_mainModuleUpgradable",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_space",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_provided",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_current",
            type: "uint256",
          },
        ],
        name: "BadNonce",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_code",
            type: "bytes",
          },
        ],
        name: "CreateFailed",
        type: "error",
      },
      {
        inputs: [],
        name: "EmptySignature",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
        ],
        name: "HookAlreadyExists",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
        ],
        name: "HookDoesNotExist",
        type: "error",
      },
      {
        inputs: [],
        name: "ImageHashIsZero",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_implementation",
            type: "address",
          },
        ],
        name: "InvalidImplementation",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "_addr",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "InvalidNestedSignature",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "_s",
            type: "bytes32",
          },
        ],
        name: "InvalidSValue",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "InvalidSignature",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_flag",
            type: "uint256",
          },
        ],
        name: "InvalidSignatureFlag",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "InvalidSignatureLength",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes1",
            name: "_type",
            type: "bytes1",
          },
        ],
        name: "InvalidSignatureType",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "_v",
            type: "uint256",
          },
        ],
        name: "InvalidVValue",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "threshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_weight",
            type: "uint256",
          },
        ],
        name: "LowWeightChainedSignature",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_requested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_available",
            type: "uint256",
          },
        ],
        name: "NotEnoughGas",
        type: "error",
      },
      {
        inputs: [],
        name: "OnlyDelegatecall",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "_self",
            type: "address",
          },
        ],
        name: "OnlySelfAuth",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "SignerIsAddress0",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "_type",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "_recoverMode",
            type: "bool",
          },
        ],
        name: "UnsupportedSignatureType",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_current",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_prev",
            type: "uint256",
          },
        ],
        name: "WrongChainedCheckpointOrder",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_contract",
            type: "address",
          },
        ],
        name: "CreatedContract",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
          {
            indexed: false,
            internalType: "address",
            name: "_implementation",
            type: "address",
          },
        ],
        name: "DefinedHook",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
        ],
        name: "IPFSRootUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "bytes32",
            name: "newImageHash",
            type: "bytes32",
          },
        ],
        name: "ImageHashUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "newImplementation",
            type: "address",
          },
        ],
        name: "ImplementationUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_space",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_newNonce",
            type: "uint256",
          },
        ],
        name: "NonceChange",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "_imageHash",
            type: "bytes32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_expiration",
            type: "uint256",
          },
        ],
        name: "SetExtraImageHash",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "_tx",
            type: "bytes32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "TxExecuted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "_tx",
            type: "bytes32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "bytes",
            name: "_reason",
            type: "bytes",
          },
        ],
        name: "TxFailed",
        type: "event",
      },
      {
        stateMutability: "payable",
        type: "fallback",
      },
      {
        inputs: [],
        name: "FACTORY",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "INIT_CODE_HASH",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "SET_IMAGE_HASH_TYPE_HASH",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "UPGRADEABLE_IMPLEMENTATION",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
          {
            internalType: "address",
            name: "_implementation",
            type: "address",
          },
        ],
        name: "addHook",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32[]",
            name: "_imageHashes",
            type: "bytes32[]",
          },
        ],
        name: "clearExtraImageHashes",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_code",
            type: "bytes",
          },
        ],
        name: "createContract",
        outputs: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "bool",
                name: "delegateCall",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "revertOnError",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "gasLimit",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct IModuleCalls.Transaction[]",
            name: "_txs",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "_nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_imageHash",
            type: "bytes32",
          },
        ],
        name: "extraImageHash",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "ipfsRoot",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "ipfsRootBytes32",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "_signatures",
            type: "bytes",
          },
        ],
        name: "isValidSignature",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_data",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "_signatures",
            type: "bytes",
          },
        ],
        name: "isValidSignature",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "nonce",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        name: "onERC1155Received",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        name: "onERC721Received",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
        ],
        name: "readHook",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_space",
            type: "uint256",
          },
        ],
        name: "readNonce",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
        ],
        name: "removeHook",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "bool",
                name: "delegateCall",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "revertOnError",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "gasLimit",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct IModuleCalls.Transaction[]",
            name: "_txs",
            type: "tuple[]",
          },
        ],
        name: "selfExecute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_imageHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "_expiration",
            type: "uint256",
          },
        ],
        name: "setExtraImageHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_digest",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "signatureRecovery",
        outputs: [
          {
            internalType: "uint256",
            name: "threshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "imageHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "subdigest",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "checkpoint",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_interfaceID",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
        ],
        name: "updateIPFSRoot",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_imageHash",
            type: "bytes32",
          },
        ],
        name: "updateImageHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_imageHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "_ipfsRoot",
            type: "bytes32",
          },
        ],
        name: "updateImageHashAndIPFS",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_implementation",
            type: "address",
          },
        ],
        name: "updateImplementation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        stateMutability: "payable",
        type: "receive",
      },
    ],
    bytecode:
      "0x6080604052600436106101bb5760003560e01c80637a9a1628116100ec578063a4ab5f9f1161008a578063bc197c8111610064578063bc197c81146106a0578063c71f1f96146106e8578063d0748f71146106fd578063f23a6e611461071d576101c2565b8063a4ab5f9f1461064b578063affed0e01461066b578063b93ea7ad14610680576101c2565b80638c3f5563116100c65780638c3f5563146105d65780638efa6441146105f657806390042baf14610618578063a38cef191461062b576101c2565b80637a9a16281461053a578063853c50681461055a578063888eeec6146105a2576101c2565b8063257671f5116101595780634598154f116101335780634598154f146104a65780634fcf3eca146104c657806357c56d6b146104e657806361c2926c1461051a576101c2565b8063257671f51461041057806329561426146104525780632dd3100014610472576101c2565b8063150b7a0211610195578063150b7a02146103155780631626ba7e1461038b5780631a9b2337146103ab57806320c13b0b146103f0576101c2565b806301ffc9a7146102a0578063025b22bc146102d5578063038dbaac146102f5576101c2565b366101c257005b6004361061029e5760006101f96000357fffffffff0000000000000000000000000000000000000000000000000000000016610763565b905073ffffffffffffffffffffffffffffffffffffffff81161561029c576000808273ffffffffffffffffffffffffffffffffffffffff16600036604051610242929190612cd1565b600060405180830381855af49150503d806000811461027d576040519150601f19603f3d011682016040523d82523d6000602084013e610282565b606091505b50915091508161029457805160208201fd5b805160208201f35b505b005b3480156102ac57600080fd5b506102c06102bb366004612d0f565b6107b7565b60405190151581526020015b60405180910390f35b3480156102e157600080fd5b5061029e6102f0366004612d55565b6107c2565b34801561030157600080fd5b5061029e610310366004612dbc565b610814565b34801561032157600080fd5b5061035a610330366004612e40565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016102cc565b34801561039757600080fd5b5061035a6103a6366004612eaf565b61091f565b3480156103b757600080fd5b506103cb6103c6366004612d0f565b61096c565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016102cc565b3480156103fc57600080fd5b5061035a61040b366004612efb565b610977565b34801561041c57600080fd5b506104447f330af028acaaac43a6575e03044e8b5257cd4c68d7ab2a6a2c5f4ce867a8ab6e81565b6040519081526020016102cc565b34801561045e57600080fd5b5061029e61046d366004612f67565b6109dc565b34801561047e57600080fd5b506103cb7f000000000000000000000000faa5c0b14d1bed5c888ca655b9a8a5911f78ef4a81565b3480156104b257600080fd5b5061029e6104c1366004612f80565b610a26565b3480156104d257600080fd5b5061029e6104e1366004612d0f565b610aeb565b3480156104f257600080fd5b506104447f8713a7c4465f6fbee2b6e9d6646d1d9f83fec929edfc4baf661f3c865bdd04d181565b34801561052657600080fd5b5061029e610535366004612dbc565b610bb3565b34801561054657600080fd5b5061029e610555366004612fa2565b610c39565b34801561056657600080fd5b5061057a610575366004612eaf565b610d3e565b604080519586526020860194909452928401919091526060830152608082015260a0016102cc565b3480156105ae57600080fd5b506103cb7f0000000000000000000000004222dca3974e39a8b41c411fedde9b09ae14b91181565b3480156105e257600080fd5b506104446105f1366004612f67565b610f06565b34801561060257600080fd5b5061060b610f32565b6040516102cc9190613079565b6103cb6106263660046130bb565b610fb3565b34801561063757600080fd5b5061029e610646366004612f67565b61109d565b34801561065757600080fd5b50610444610666366004612f67565b6110e7565b34801561067757600080fd5b506104446110f2565b34801561068c57600080fd5b5061029e61069b36600461318a565b611103565b3480156106ac57600080fd5b5061035a6106bb3660046131bf565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b3480156106f457600080fd5b506104446111ce565b34801561070957600080fd5b5061029e610718366004612f80565b6111f8565b34801561072957600080fd5b5061035a61073836600461327a565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60006107b17fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff00000000000000000000000000000000000000000000000000000000841661124b565b92915050565b60006107b1826112a9565b333014610808576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044015b60405180910390fd5b61081181611305565b50565b333014610855576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016107ff565b8060005b81811015610919576000848483818110610875576108756132f2565b9050602002013590506108d5816000604080517f849e7bdc245db17e50b9f43086f1914d70eb4dab6dd89af4d541d53353ad97de602080830191909152818301859052825180830384018152606090920190925280519101208190555050565b807f804f6171d6008d9e16ee3aa0561fec328397f4ba2827a6605db388cfdefa3b0c600060405161090891815260200190565b60405180910390a250600101610859565b50505050565b60008061092d8585856113c0565b509050801561095f57507f1626ba7e000000000000000000000000000000000000000000000000000000009050610965565b50600090505b9392505050565b60006107b182610763565b60008061099c868660405161098d929190612cd1565b604051809103902085856113c0565b50905080156109ce57507f20c13b0b0000000000000000000000000000000000000000000000000000000090506109d4565b50600090505b949350505050565b333014610a1d576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016107ff565b610811816113fe565b333014610a67576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016107ff565b604080517f849e7bdc245db17e50b9f43086f1914d70eb4dab6dd89af4d541d53353ad97de602080830191909152818301859052825180830384018152606083019384905280519101208390559082905282907f804f6171d6008d9e16ee3aa0561fec328397f4ba2827a6605db388cfdefa3b0c9060800160405180910390a25050565b333014610b2c576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016107ff565b6000610b3782610763565b73ffffffffffffffffffffffffffffffffffffffff1603610ba8576040517f1c3812cc0000000000000000000000000000000000000000000000000000000081527fffffffff00000000000000000000000000000000000000000000000000000000821660048201526024016107ff565b6108118160006114ba565b333014610bf4576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016107ff565b6000610c278383604051602001610c0c9291906134c9565b6040516020818303038152906040528051906020012061157a565b9050610c348184846115ff565b505050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000fbf8f1a5e00034762d928f46d438b947f5d4065d163003610ca8576040517f0a57d61d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cb183611787565b600080610ce9858888604051602001610ccc93929190613511565b6040516020818303038152906040528051906020012085856113c0565b9150915081610d2a578084846040517f8f4a234f0000000000000000000000000000000000000000000000000000000081526004016107ff93929190613534565b610d358188886115ff565b50505050505050565b60008060008060008087876000818110610d5a57610d5a6132f2565b909101357fff00000000000000000000000000000000000000000000000000000000000000169150819050610db057610d928961157a565b9250610d9f838989611884565b92985090965094509150610efb9050565b7fff0000000000000000000000000000000000000000000000000000000000000081811601610def57610de28961157a565b9250610d9f8389896118d5565b7ffe000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821601610e4157610de289611901565b7ffd000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821601610ea557610e9589898961196e565b9550955095509550955050610efb565b6040517f6085cd820000000000000000000000000000000000000000000000000000000081527fff00000000000000000000000000000000000000000000000000000000000000821660048201526024016107ff565b939792965093509350565b60006107b17f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e8361124b565b6060610f8f610f8a610f426111ce565b6040517f017012200000000000000000000000000000000000000000000000000000000060208201526024810191909152604401604051602081830303815290604052611aeb565b611d04565b604051602001610f9f919061354e565b604051602081830303815290604052905090565b6000333014610ff6576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016107ff565b81516020830134f0905073ffffffffffffffffffffffffffffffffffffffff811661104f57816040517f0d2571910000000000000000000000000000000000000000000000000000000081526004016107ff9190613079565b60405173ffffffffffffffffffffffffffffffffffffffff821681527fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c9060200160405180910390a1919050565b3330146110de576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016107ff565b61081181611d2d565b60006107b182611d86565b60006110fe6000610f06565b905090565b333014611144576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016107ff565b600061114f83610763565b73ffffffffffffffffffffffffffffffffffffffff16146111c0576040517f5b4d6d6a0000000000000000000000000000000000000000000000000000000081527fffffffff00000000000000000000000000000000000000000000000000000000831660048201526024016107ff565b6111ca82826114ba565b5050565b60006110fe7f0eecac93ced8722d209199364cda3bc33da3bc3a23daef6be49ebd780511d0335490565b333014611239576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016107ff565b611242826113fe565b6111ca81611d2d565b600080838360405160200161126a929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60007f2e74b92a000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316016112fc57506001919050565b6107b182611db2565b73ffffffffffffffffffffffffffffffffffffffff81163b61136b576040517f0c76093700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201526024016107ff565b611373813055565b60405173ffffffffffffffffffffffffffffffffffffffff821681527f310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca03906020015b60405180910390a150565b60008060008060006113d3888888610d3e565b509650919450925090508282108015906113f157506113f181611e0e565b9450505050935093915050565b80611435576040517f4294d12700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61145e7fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf8829055565b6040518181527f307ed6bd941ee9fc80f369c94af5fa11e25bab5102a6140191756c5474a30bfa9060200160405180910390a16108117f0000000000000000000000004222dca3974e39a8b41c411fedde9b09ae14b911611305565b604080517fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1206020808301919091527fffffffff000000000000000000000000000000000000000000000000000000008516828401819052835180840385018152606084018086528151919093012073ffffffffffffffffffffffffffffffffffffffff8616908190559152608082015290517f0d7fc113eaf016db4681a1ba86d083ce3e0961f321062a75ac2b0aeb33deeed19181900360a00190a15050565b6040517f190100000000000000000000000000000000000000000000000000000000000060208201524660228201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b166042820152605681018290526000906076015b604051602081830303815290604052805190602001209050919050565b8060005b81811015611780573684848381811061161e5761161e6132f2565b90506020028101906116309190613593565b90506040810135805a10156116855782815a6040517f2bb3e3ba0000000000000000000000000000000000000000000000000000000081526004810193909352602483019190915260448201526064016107ff565b600061169460208401846135d1565b156116d3576116cc6116ac6080850160608601612d55565b83156116b857836116ba565b5a5b6116c760a08701876135ec565b611e19565b905061170e565b61170b6116e66080850160608601612d55565b608085013584156116f757846116f9565b5a5b61170660a08801886135ec565b611e34565b90505b801561175357877f5c4eeb02dabf8976016ab414d617f9a162936dcace3cdef8c69ef6e262ad5ae78560405161174691815260200190565b60405180910390a2611775565b61177561176660408501602086016135d1565b8986611770611e51565b611e70565b505050600101611603565b5050505050565b606081901c6bffffffffffffffffffffffff821660006117a683610f06565b90508181146117f2576040517f9b6514f40000000000000000000000000000000000000000000000000000000081526004810184905260248101839052604481018290526064016107ff565b604080517f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e60208083019190915281830186905282518083038401815260609092019092528051910120600183019081905560408051858152602081018390527f1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f881910160405180910390a15050505050565b600080808061189f8761189a876006818b613651565b611ebe565b6000908152873560f01c6020818152604080842084526002909a013560e01c908190529890912090999198509695509350505050565b60008080806118f0876118eb876001818b613651565b611884565b935093509350935093509350935093565b6040517f190100000000000000000000000000000000000000000000000000000000000060208201526000602282018190527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b16604283015260568201839052906076016115e2565b6000808080806004600188013560e81c8261198983836136aa565b905061199b8b61057583868d8f613651565b939b50919950975095509350878710156119f3576119bb81848b8d613651565b89896040517fb006aba00000000000000000000000000000000000000000000000000000000081526004016107ff94939291906136bd565b8092505b88831015611add5760038301928a013560e81c9150611a1683836136aa565b90506000611a38611a2688612354565b8c8c8790869261057593929190613651565b939c50919a5098509091505088881015611a9057611a5882858c8e613651565b8a8a6040517fb006aba00000000000000000000000000000000000000000000000000000000081526004016107ff94939291906136bd565b848110611ad3576040517f37daf62b00000000000000000000000000000000000000000000000000000000815260048101829052602481018690526044016107ff565b93509150816119f7565b505050939792965093509350565b8051606090600381901b60006005600483010467ffffffffffffffff811115611b1657611b1661308c565b6040519080825280601f01601f191660200182016040528015611b40576020820181803683370190505b5090506000806000805b86811015611c5457888181518110611b6457611b646132f2565b01602001516008948501949390931b60f89390931c92909217915b60058410611c4c576040805180820190915260208082527f6162636465666768696a6b6c6d6e6f707172737475767778797a323334353637818301527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb90950194601f85871c16908110611bf557611bf56132f2565b602001015160f81c60f81b858381518110611c1257611c126132f2565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600190910190611b7f565b600101611b4a565b508215611cf8576040518060400160405280602081526020017f6162636465666768696a6b6c6d6e6f707172737475767778797a3233343536378152508360050383901b601f1681518110611cab57611cab6132f2565b602001015160f81c60f81b848281518110611cc857611cc86132f2565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b50919695505050505050565b606081604051602001611d1791906136e4565b6040516020818303038152906040529050919050565b611d567f0eecac93ced8722d209199364cda3bc33da3bc3a23daef6be49ebd780511d033829055565b6040518181527f20d3ef1b5738a9f6d7beae515432206e7a8e2740ca6dcf46a952190ad01bcb51906020016113b5565b60006107b17f849e7bdc245db17e50b9f43086f1914d70eb4dab6dd89af4d541d53353ad97de8361124b565b60007f6ffbd451000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601611e0557506001919050565b6107b182612388565b60006107b1826124c9565b60006040518284823760008084838989f49695505050505050565b6000604051828482376000808483898b8af1979650505050505050565b60603d604051915060208201818101604052818352816000823e505090565b8315611e7e57805160208201fd5b827fab46c69f7f32e1bf09b0725853da82a211e5402a0600296ab499a2fb5ea3b4198383604051611eb0929190613729565b60405180910390a250505050565b60008060005b8381101561234b57600181019085013560f81c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101611f6557601582019186013560f881901c9060581c73ffffffffffffffffffffffffffffffffffffffff81169074ff000000000000000000000000000000000000000016811785611f4b5780611f5a565b60008681526020829052604090205b955050505050611ec4565b80611ffb5760018201918681013560f81c906043016000611f918a611f8c84888c8e613651565b6125f7565b60ff841697909701969194508491905060a083901b74ff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff82161786611fe05780611fef565b60008781526020829052604090205b96505050505050611ec4565b60028103612123576000808784013560f881901c9060581c73ffffffffffffffffffffffffffffffffffffffff16601586019550909250905060008885013560e81c600386018162ffffff1691508096508192505050600081860190506120748b848c8c8a90869261206f93929190613651565b6128ba565b6120bc578a8361208683898d8f613651565b6040517f9a9462320000000000000000000000000000000000000000000000000000000081526004016107ff9493929190613742565b60ff8416979097019694508460a084901b74ff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617876121075780612116565b60008881526020829052604090205b9750505050505050611ec4565b600381036121565760208201918601358361213e578061214d565b60008481526020829052604090205b93505050611ec4565b600481036121a2576003808301928781013560e81c91908201016000806121838b61189a85898d8f613651565b60009889526020526040909720969097019650909350611ec492505050565b600681036122aa5760008287013560f81c60018401935060ff16905060008784013560f01c60028501945061ffff16905060008885013560e81c600386018162ffffff1691508096508192505050600081860190506000806122108d8d8d8b90879261189a93929190613651565b9398508893909250905084821061222657988501985b604080517f53657175656e6365206e657374656420636f6e6669673a0a0000000000000000602080830191909152603882018490526058820188905260788083018a905283518084039091018152609890920190925280519101208961228c578061229b565b60008a81526020829052604090205b99505050505050505050611ec4565b600581036123165760208201918601358781036122e5577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff94505b60006122f082612aa1565b9050846122fd578061230c565b60008581526020829052604090205b9450505050611ec4565b6040517fb2505f7c000000000000000000000000000000000000000000000000000000008152600481018290526024016107ff565b50935093915050565b7f8713a7c4465f6fbee2b6e9d6646d1d9f83fec929edfc4baf661f3c865bdd04d160009081526020829052604081206107b1565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fec6aba5000000000000000000000000000000000000000000000000000000000148061241b57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061246757507fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000145b806124b357507fffffffff0000000000000000000000000000000000000000000000000000000082167fc0ee0b8a00000000000000000000000000000000000000000000000000000000145b156124c057506001919050565b6107b182612adc565b60006125cb826040517fff0000000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000007f000000000000000000000000faa5c0b14d1bed5c888ca655b9a8a5911f78ef4a60601b166021820152603581018290527f330af028acaaac43a6575e03044e8b5257cd4c68d7ab2a6a2c5f4ce867a8ab6e60558201526000903090607501604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012073ffffffffffffffffffffffffffffffffffffffff161492915050565b156125d857506001919050565b60006125e383611d86565b905080158015906109655750421092915050565b6000604282146126375782826040517f2ee17a3d0000000000000000000000000000000000000000000000000000000081526004016107ff929190613782565b6000612650612647600185613796565b85013560f81c90565b60ff169050604084013560f81c843560208601357f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08111156126c4578686826040517fad4aac760000000000000000000000000000000000000000000000000000000081526004016107ff939291906137a9565b8260ff16601b141580156126dc57508260ff16601c14155b15612719578686846040517fe578897e0000000000000000000000000000000000000000000000000000000081526004016107ff939291906137cd565b60018403612786576040805160008152602081018083528a905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa158015612775573d6000803e3d6000fd5b50505060206040510351945061285e565b60028403612823576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101899052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a001612753565b86868560016040517f9dfba8520000000000000000000000000000000000000000000000000000000081526004016107ff94939291906137f4565b73ffffffffffffffffffffffffffffffffffffffff85166128af5786866040517f6c1719d20000000000000000000000000000000000000000000000000000000081526004016107ff929190613782565b505050509392505050565b60008181036128f5576040517fac241e1100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008383612904600182613796565b818110612913576129136132f2565b919091013560f81c915050600181148061292d5750600281145b15612972578473ffffffffffffffffffffffffffffffffffffffff166129548786866125f7565b73ffffffffffffffffffffffffffffffffffffffff16149150612a98565b60038103612a5d5773ffffffffffffffffffffffffffffffffffffffff8516631626ba7e87866000876129a6600182613796565b926129b393929190613651565b6040518463ffffffff1660e01b81526004016129d193929190613534565b602060405180830381865afa1580156129ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a129190613820565b7fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e00000000000000000000000000000000000000000000000000000000149150612a98565b83838260006040517f9dfba8520000000000000000000000000000000000000000000000000000000081526004016107ff94939291906137f4565b50949350505050565b6040517f53657175656e636520737461746963206469676573743a0a00000000000000006020820152603881018290526000906058016115e2565b60007fe4a77bbc000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601612b2f57506001919050565b6107b18260007f1cbec625000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601612b8657506001919050565b6107b18260006107b18260007ffda4dd44000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601612be357506001919050565b6107b18260007fffffffff0000000000000000000000000000000000000000000000000000000082167fac6a444e000000000000000000000000000000000000000000000000000000001480612c7a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b15612c8757506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146107b1565b8183823760009101908152919050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461081157600080fd5b600060208284031215612d2157600080fd5b813561096581612ce1565b803573ffffffffffffffffffffffffffffffffffffffff81168114612d5057600080fd5b919050565b600060208284031215612d6757600080fd5b61096582612d2c565b60008083601f840112612d8257600080fd5b50813567ffffffffffffffff811115612d9a57600080fd5b6020830191508360208260051b8501011115612db557600080fd5b9250929050565b60008060208385031215612dcf57600080fd5b823567ffffffffffffffff811115612de657600080fd5b612df285828601612d70565b90969095509350505050565b60008083601f840112612e1057600080fd5b50813567ffffffffffffffff811115612e2857600080fd5b602083019150836020828501011115612db557600080fd5b600080600080600060808688031215612e5857600080fd5b612e6186612d2c565b9450612e6f60208701612d2c565b935060408601359250606086013567ffffffffffffffff811115612e9257600080fd5b612e9e88828901612dfe565b969995985093965092949392505050565b600080600060408486031215612ec457600080fd5b83359250602084013567ffffffffffffffff811115612ee257600080fd5b612eee86828701612dfe565b9497909650939450505050565b60008060008060408587031215612f1157600080fd5b843567ffffffffffffffff80821115612f2957600080fd5b612f3588838901612dfe565b90965094506020870135915080821115612f4e57600080fd5b50612f5b87828801612dfe565b95989497509550505050565b600060208284031215612f7957600080fd5b5035919050565b60008060408385031215612f9357600080fd5b50508035926020909101359150565b600080600080600060608688031215612fba57600080fd5b853567ffffffffffffffff80821115612fd257600080fd5b612fde89838a01612d70565b9097509550602088013594506040880135915080821115612ffe57600080fd5b50612e9e88828901612dfe565b60005b8381101561302657818101518382015260200161300e565b50506000910152565b6000815180845261304781602086016020860161300b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610965602083018461302f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156130cd57600080fd5b813567ffffffffffffffff808211156130e557600080fd5b818401915084601f8301126130f957600080fd5b81358181111561310b5761310b61308c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156131515761315161308c565b8160405282815287602084870101111561316a57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000806040838503121561319d57600080fd5b82356131a881612ce1565b91506131b660208401612d2c565b90509250929050565b60008060008060008060008060a0898b0312156131db57600080fd5b6131e489612d2c565b97506131f260208a01612d2c565b9650604089013567ffffffffffffffff8082111561320f57600080fd5b61321b8c838d01612d70565b909850965060608b013591508082111561323457600080fd5b6132408c838d01612d70565b909650945060808b013591508082111561325957600080fd5b506132668b828c01612dfe565b999c989b5096995094979396929594505050565b60008060008060008060a0878903121561329357600080fd5b61329c87612d2c565b95506132aa60208801612d2c565b94506040870135935060608701359250608087013567ffffffffffffffff8111156132d457600080fd5b6132e089828a01612dfe565b979a9699509497509295939492505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b80358015158114612d5057600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b81835260006020808501808196508560051b810191508460005b878110156134bc57828403895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418836030181126133d357600080fd5b870160c06133e082613321565b151586526133ef878301613321565b15158688015260408281013590870152606073ffffffffffffffffffffffffffffffffffffffff613421828501612d2c565b16908701526080828101359087015260a080830135368490037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe101811261346757600080fd5b90920187810192903567ffffffffffffffff81111561348557600080fd5b80360384131561349457600080fd5b82828901526134a68389018286613331565b9c89019c97505050928601925050600101613394565b5091979650505050505050565b60408152600560408201527f73656c663a00000000000000000000000000000000000000000000000000000060608201526080602082015260006109d460808301848661337a565b83815260406020820152600061352b60408301848661337a565b95945050505050565b83815260406020820152600061352b604083018486613331565b7f697066733a2f2f0000000000000000000000000000000000000000000000000081526000825161358681600785016020870161300b565b9190910160070192915050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418336030181126135c757600080fd5b9190910192915050565b6000602082840312156135e357600080fd5b61096582613321565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261362157600080fd5b83018035915067ffffffffffffffff82111561363c57600080fd5b602001915036819003821315612db557600080fd5b6000808585111561366157600080fd5b8386111561366e57600080fd5b5050820193919092039150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156107b1576107b161367b565b6060815260006136d1606083018688613331565b6020830194909452506040015292915050565b7f620000000000000000000000000000000000000000000000000000000000000081526000825161371c81600185016020870161300b565b9190910160010192915050565b8281526040602082015260006109d4604083018461302f565b84815273ffffffffffffffffffffffffffffffffffffffff84166020820152606060408201526000613778606083018486613331565b9695505050505050565b6020815260006109d4602083018486613331565b818103818111156107b1576107b161367b565b6040815260006137bd604083018587613331565b9050826020830152949350505050565b6040815260006137e1604083018587613331565b905060ff83166020830152949350505050565b606081526000613808606083018688613331565b60208301949094525090151560409091015292915050565b60006020828403121561383257600080fd5b815161096581612ce156fea26469706673582212203c8d5199f30c123dff9711c13e6d1af00442c59755d475d5781636aabab62db364736f6c63430008120033",
  },
  SequenceMainModuleUpgradeable: {
    address: "0x4222dcA3974E39A8b41c411FeDDE9b09Ae14b911",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_space",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_provided",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_current",
            type: "uint256",
          },
        ],
        name: "BadNonce",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_code",
            type: "bytes",
          },
        ],
        name: "CreateFailed",
        type: "error",
      },
      {
        inputs: [],
        name: "EmptySignature",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
        ],
        name: "HookAlreadyExists",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
        ],
        name: "HookDoesNotExist",
        type: "error",
      },
      {
        inputs: [],
        name: "ImageHashIsZero",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_implementation",
            type: "address",
          },
        ],
        name: "InvalidImplementation",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "_addr",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "InvalidNestedSignature",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "_s",
            type: "bytes32",
          },
        ],
        name: "InvalidSValue",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "InvalidSignature",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_flag",
            type: "uint256",
          },
        ],
        name: "InvalidSignatureFlag",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "InvalidSignatureLength",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes1",
            name: "_type",
            type: "bytes1",
          },
        ],
        name: "InvalidSignatureType",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "_v",
            type: "uint256",
          },
        ],
        name: "InvalidVValue",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "threshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_weight",
            type: "uint256",
          },
        ],
        name: "LowWeightChainedSignature",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_requested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_available",
            type: "uint256",
          },
        ],
        name: "NotEnoughGas",
        type: "error",
      },
      {
        inputs: [],
        name: "OnlyDelegatecall",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "_self",
            type: "address",
          },
        ],
        name: "OnlySelfAuth",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "SignerIsAddress0",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "_type",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "_recoverMode",
            type: "bool",
          },
        ],
        name: "UnsupportedSignatureType",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_current",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_prev",
            type: "uint256",
          },
        ],
        name: "WrongChainedCheckpointOrder",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_contract",
            type: "address",
          },
        ],
        name: "CreatedContract",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
          {
            indexed: false,
            internalType: "address",
            name: "_implementation",
            type: "address",
          },
        ],
        name: "DefinedHook",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
        ],
        name: "IPFSRootUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "bytes32",
            name: "newImageHash",
            type: "bytes32",
          },
        ],
        name: "ImageHashUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "newImplementation",
            type: "address",
          },
        ],
        name: "ImplementationUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_space",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_newNonce",
            type: "uint256",
          },
        ],
        name: "NonceChange",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "_imageHash",
            type: "bytes32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_expiration",
            type: "uint256",
          },
        ],
        name: "SetExtraImageHash",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "_tx",
            type: "bytes32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "TxExecuted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "_tx",
            type: "bytes32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "bytes",
            name: "_reason",
            type: "bytes",
          },
        ],
        name: "TxFailed",
        type: "event",
      },
      {
        stateMutability: "payable",
        type: "fallback",
      },
      {
        inputs: [],
        name: "SET_IMAGE_HASH_TYPE_HASH",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
          {
            internalType: "address",
            name: "_implementation",
            type: "address",
          },
        ],
        name: "addHook",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32[]",
            name: "_imageHashes",
            type: "bytes32[]",
          },
        ],
        name: "clearExtraImageHashes",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_code",
            type: "bytes",
          },
        ],
        name: "createContract",
        outputs: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "bool",
                name: "delegateCall",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "revertOnError",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "gasLimit",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct IModuleCalls.Transaction[]",
            name: "_txs",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "_nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_imageHash",
            type: "bytes32",
          },
        ],
        name: "extraImageHash",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "imageHash",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "ipfsRoot",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "ipfsRootBytes32",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "_signatures",
            type: "bytes",
          },
        ],
        name: "isValidSignature",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_data",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "_signatures",
            type: "bytes",
          },
        ],
        name: "isValidSignature",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "nonce",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        name: "onERC1155Received",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        name: "onERC721Received",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
        ],
        name: "readHook",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_space",
            type: "uint256",
          },
        ],
        name: "readNonce",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_signature",
            type: "bytes4",
          },
        ],
        name: "removeHook",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "bool",
                name: "delegateCall",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "revertOnError",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "gasLimit",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct IModuleCalls.Transaction[]",
            name: "_txs",
            type: "tuple[]",
          },
        ],
        name: "selfExecute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_imageHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "_expiration",
            type: "uint256",
          },
        ],
        name: "setExtraImageHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_digest",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "signatureRecovery",
        outputs: [
          {
            internalType: "uint256",
            name: "threshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "imageHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "subdigest",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "checkpoint",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_interfaceID",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
        ],
        name: "updateIPFSRoot",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_imageHash",
            type: "bytes32",
          },
        ],
        name: "updateImageHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_imageHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "_ipfsRoot",
            type: "bytes32",
          },
        ],
        name: "updateImageHashAndIPFS",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_implementation",
            type: "address",
          },
        ],
        name: "updateImplementation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        stateMutability: "payable",
        type: "receive",
      },
    ],
    bytecode:
      "0x6080604052600436106101a55760003560e01c80637a9a1628116100e1578063a4ab5f9f1161008a578063bc197c8111610064578063bc197c8114610603578063c71f1f961461064b578063d0748f7114610660578063f23a6e6114610680576101ac565b8063a4ab5f9f146105ae578063affed0e0146105ce578063b93ea7ad146105e3576101ac565b80638efa6441116100bb5780638efa64411461055957806390042baf1461057b578063a38cef191461058e576101ac565b80637a9a1628146104d1578063853c5068146104f15780638c3f556314610539576101ac565b806320c13b0b1161014e5780634fcf3eca116101285780634fcf3eca1461043a57806351605d801461045a57806357c56d6b1461047d57806361c2926c146104b1576101ac565b806320c13b0b146103da57806329561426146103fa5780634598154f1461041a576101ac565b8063150b7a021161017f578063150b7a02146102ff5780631626ba7e146103755780631a9b233714610395576101ac565b806301ffc9a71461028a578063025b22bc146102bf578063038dbaac146102df576101ac565b366101ac57005b600436106102885760006101e36000357fffffffff00000000000000000000000000000000000000000000000000000000166106c6565b905073ffffffffffffffffffffffffffffffffffffffff811615610286576000808273ffffffffffffffffffffffffffffffffffffffff1660003660405161022c929190612bc4565b600060405180830381855af49150503d8060008114610267576040519150601f19603f3d011682016040523d82523d6000602084013e61026c565b606091505b50915091508161027e57805160208201fd5b805160208201f35b505b005b34801561029657600080fd5b506102aa6102a5366004612c02565b61071a565b60405190151581526020015b60405180910390f35b3480156102cb57600080fd5b506102886102da366004612c48565b610725565b3480156102eb57600080fd5b506102886102fa366004612caf565b610777565b34801561030b57600080fd5b5061034461031a366004612d33565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016102b6565b34801561038157600080fd5b50610344610390366004612da2565b610882565b3480156103a157600080fd5b506103b56103b0366004612c02565b6108cf565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016102b6565b3480156103e657600080fd5b506103446103f5366004612dee565b6108da565b34801561040657600080fd5b50610288610415366004612e5a565b61093f565b34801561042657600080fd5b50610288610435366004612e73565b610989565b34801561044657600080fd5b50610288610455366004612c02565b610a4e565b34801561046657600080fd5b5061046f610b16565b6040519081526020016102b6565b34801561048957600080fd5b5061046f7f8713a7c4465f6fbee2b6e9d6646d1d9f83fec929edfc4baf661f3c865bdd04d181565b3480156104bd57600080fd5b506102886104cc366004612caf565b610b45565b3480156104dd57600080fd5b506102886104ec366004612e95565b610bcb565b3480156104fd57600080fd5b5061051161050c366004612da2565b610cd0565b604080519586526020860194909452928401919091526060830152608082015260a0016102b6565b34801561054557600080fd5b5061046f610554366004612e5a565b610e98565b34801561056557600080fd5b5061056e610ec4565b6040516102b69190612f6c565b6103b5610589366004612fae565b610f45565b34801561059a57600080fd5b506102886105a9366004612e5a565b61102f565b3480156105ba57600080fd5b5061046f6105c9366004612e5a565b611079565b3480156105da57600080fd5b5061046f611084565b3480156105ef57600080fd5b506102886105fe36600461307d565b611090565b34801561060f57600080fd5b5061034461061e3660046130b2565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561065757600080fd5b5061046f61115b565b34801561066c57600080fd5b5061028861067b366004612e73565b611185565b34801561068c57600080fd5b5061034461069b36600461316d565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60006107147fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff0000000000000000000000000000000000000000000000000000000084166111d8565b92915050565b600061071482611236565b33301461076b576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044015b60405180910390fd5b61077481611292565b50565b3330146107b8576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b8060005b8181101561087c5760008484838181106107d8576107d86131e5565b905060200201359050610838816000604080517f849e7bdc245db17e50b9f43086f1914d70eb4dab6dd89af4d541d53353ad97de602080830191909152818301859052825180830384018152606090920190925280519101208190555050565b807f804f6171d6008d9e16ee3aa0561fec328397f4ba2827a6605db388cfdefa3b0c600060405161086b91815260200190565b60405180910390a2506001016107bc565b50505050565b60008061089085858561134d565b50905080156108c257507f1626ba7e0000000000000000000000000000000000000000000000000000000090506108c8565b50600090505b9392505050565b6000610714826106c6565b6000806108ff86866040516108f0929190612bc4565b6040518091039020858561134d565b509050801561093157507f20c13b0b000000000000000000000000000000000000000000000000000000009050610937565b50600090505b949350505050565b333014610980576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b6107748161138b565b3330146109ca576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b604080517f849e7bdc245db17e50b9f43086f1914d70eb4dab6dd89af4d541d53353ad97de602080830191909152818301859052825180830384018152606083019384905280519101208390559082905282907f804f6171d6008d9e16ee3aa0561fec328397f4ba2827a6605db388cfdefa3b0c9060800160405180910390a25050565b333014610a8f576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b6000610a9a826106c6565b73ffffffffffffffffffffffffffffffffffffffff1603610b0b576040517f1c3812cc0000000000000000000000000000000000000000000000000000000081527fffffffff0000000000000000000000000000000000000000000000000000000082166004820152602401610762565b61077481600061141b565b6000610b407fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf85490565b905090565b333014610b86576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b6000610bb98383604051602001610b9e9291906133bc565b604051602081830303815290604052805190602001206114db565b9050610bc6818484611560565b505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000004222dca3974e39a8b41c411fedde9b09ae14b911163003610c3a576040517f0a57d61d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c43836116e8565b600080610c7b858888604051602001610c5e93929190613404565b60405160208183030381529060405280519060200120858561134d565b9150915081610cbc578084846040517f8f4a234f00000000000000000000000000000000000000000000000000000000815260040161076293929190613427565b610cc7818888611560565b50505050505050565b60008060008060008087876000818110610cec57610cec6131e5565b909101357fff00000000000000000000000000000000000000000000000000000000000000169150819050610d4257610d24896114db565b9250610d318389896117e5565b92985090965094509150610e8d9050565b7fff0000000000000000000000000000000000000000000000000000000000000081811601610d8157610d74896114db565b9250610d31838989611836565b7ffe000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821601610dd357610d7489611862565b7ffd000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821601610e3757610e278989896118cf565b9550955095509550955050610e8d565b6040517f6085cd820000000000000000000000000000000000000000000000000000000081527fff0000000000000000000000000000000000000000000000000000000000000082166004820152602401610762565b939792965093509350565b60006107147f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e836111d8565b6060610f21610f1c610ed461115b565b6040517f017012200000000000000000000000000000000000000000000000000000000060208201526024810191909152604401604051602081830303815290604052611a4c565b611c65565b604051602001610f319190613441565b604051602081830303815290604052905090565b6000333014610f88576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b81516020830134f0905073ffffffffffffffffffffffffffffffffffffffff8116610fe157816040517f0d2571910000000000000000000000000000000000000000000000000000000081526004016107629190612f6c565b60405173ffffffffffffffffffffffffffffffffffffffff821681527fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c9060200160405180910390a1919050565b333014611070576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b61077481611c8e565b600061071482611ce7565b6000610b406000610e98565b3330146110d1576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b60006110dc836106c6565b73ffffffffffffffffffffffffffffffffffffffff161461114d576040517f5b4d6d6a0000000000000000000000000000000000000000000000000000000081527fffffffff0000000000000000000000000000000000000000000000000000000083166004820152602401610762565b611157828261141b565b5050565b6000610b407f0eecac93ced8722d209199364cda3bc33da3bc3a23daef6be49ebd780511d0335490565b3330146111c6576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b6111cf8261138b565b61115781611c8e565b60008083836040516020016111f7929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60007f2e74b92a000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161128957506001919050565b61071482611d13565b73ffffffffffffffffffffffffffffffffffffffff81163b6112f8576040517f0c76093700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152602401610762565b611300813055565b60405173ffffffffffffffffffffffffffffffffffffffff821681527f310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca03906020015b60405180910390a150565b6000806000806000611360888888610cd0565b5096509194509250905082821080159061137e575061137e81611d6f565b9450505050935093915050565b806113c2576040517f4294d12700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113eb7fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf8829055565b6040518181527f307ed6bd941ee9fc80f369c94af5fa11e25bab5102a6140191756c5474a30bfa90602001611342565b604080517fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1206020808301919091527fffffffff000000000000000000000000000000000000000000000000000000008516828401819052835180840385018152606084018086528151919093012073ffffffffffffffffffffffffffffffffffffffff8616908190559152608082015290517f0d7fc113eaf016db4681a1ba86d083ce3e0961f321062a75ac2b0aeb33deeed19181900360a00190a15050565b6040517f190100000000000000000000000000000000000000000000000000000000000060208201524660228201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b166042820152605681018290526000906076015b604051602081830303815290604052805190602001209050919050565b8060005b818110156116e1573684848381811061157f5761157f6131e5565b90506020028101906115919190613486565b90506040810135805a10156115e65782815a6040517f2bb3e3ba000000000000000000000000000000000000000000000000000000008152600481019390935260248301919091526044820152606401610762565b60006115f560208401846134c4565b156116345761162d61160d6080850160608601612c48565b8315611619578361161b565b5a5b61162860a08701876134df565b611d7a565b905061166f565b61166c6116476080850160608601612c48565b60808501358415611658578461165a565b5a5b61166760a08801886134df565b611d95565b90505b80156116b457877f5c4eeb02dabf8976016ab414d617f9a162936dcace3cdef8c69ef6e262ad5ae7856040516116a791815260200190565b60405180910390a26116d6565b6116d66116c760408501602086016134c4565b89866116d1611db2565b611dd1565b505050600101611564565b5050505050565b606081901c6bffffffffffffffffffffffff8216600061170783610e98565b9050818114611753576040517f9b6514f4000000000000000000000000000000000000000000000000000000008152600481018490526024810183905260448101829052606401610762565b604080517f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e60208083019190915281830186905282518083038401815260609092019092528051910120600183019081905560408051858152602081018390527f1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f881910160405180910390a15050505050565b6000808080611800876117fb876006818b613544565b611e1f565b6000908152873560f01c6020818152604080842084526002909a013560e01c908190529890912090999198509695509350505050565b60008080806118518761184c876001818b613544565b6117e5565b935093509350935093509350935093565b6040517f190100000000000000000000000000000000000000000000000000000000000060208201526000602282018190527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b1660428301526056820183905290607601611543565b6000808080806004600188013560e81c826118ea838361359d565b90506118fc8b61050c83868d8f613544565b939b50919950975095509350878710156119545761191c81848b8d613544565b89896040517fb006aba000000000000000000000000000000000000000000000000000000000815260040161076294939291906135b0565b8092505b88831015611a3e5760038301928a013560e81c9150611977838361359d565b90506000611999611987886122b5565b8c8c8790869261050c93929190613544565b939c50919a50985090915050888810156119f1576119b982858c8e613544565b8a8a6040517fb006aba000000000000000000000000000000000000000000000000000000000815260040161076294939291906135b0565b848110611a34576040517f37daf62b0000000000000000000000000000000000000000000000000000000081526004810182905260248101869052604401610762565b9350915081611958565b505050939792965093509350565b8051606090600381901b60006005600483010467ffffffffffffffff811115611a7757611a77612f7f565b6040519080825280601f01601f191660200182016040528015611aa1576020820181803683370190505b5090506000806000805b86811015611bb557888181518110611ac557611ac56131e5565b01602001516008948501949390931b60f89390931c92909217915b60058410611bad576040805180820190915260208082527f6162636465666768696a6b6c6d6e6f707172737475767778797a323334353637818301527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb90950194601f85871c16908110611b5657611b566131e5565b602001015160f81c60f81b858381518110611b7357611b736131e5565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600190910190611ae0565b600101611aab565b508215611c59576040518060400160405280602081526020017f6162636465666768696a6b6c6d6e6f707172737475767778797a3233343536378152508360050383901b601f1681518110611c0c57611c0c6131e5565b602001015160f81c60f81b848281518110611c2957611c296131e5565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b50919695505050505050565b606081604051602001611c7891906135d7565b6040516020818303038152906040529050919050565b611cb77f0eecac93ced8722d209199364cda3bc33da3bc3a23daef6be49ebd780511d033829055565b6040518181527f20d3ef1b5738a9f6d7beae515432206e7a8e2740ca6dcf46a952190ad01bcb5190602001611342565b60006107147f849e7bdc245db17e50b9f43086f1914d70eb4dab6dd89af4d541d53353ad97de836111d8565b60007f6ffbd451000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601611d6657506001919050565b610714826122e9565b60006107148261242a565b60006040518284823760008084838989f49695505050505050565b6000604051828482376000808483898b8af1979650505050505050565b60603d604051915060208201818101604052818352816000823e505090565b8315611ddf57805160208201fd5b827fab46c69f7f32e1bf09b0725853da82a211e5402a0600296ab499a2fb5ea3b4198383604051611e1192919061361c565b60405180910390a250505050565b60008060005b838110156122ac57600181019085013560f81c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101611ec657601582019186013560f881901c9060581c73ffffffffffffffffffffffffffffffffffffffff81169074ff000000000000000000000000000000000000000016811785611eac5780611ebb565b60008681526020829052604090205b955050505050611e25565b80611f5c5760018201918681013560f81c906043016000611ef28a611eed84888c8e613544565b612461565b60ff841697909701969194508491905060a083901b74ff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff82161786611f415780611f50565b60008781526020829052604090205b96505050505050611e25565b60028103612084576000808784013560f881901c9060581c73ffffffffffffffffffffffffffffffffffffffff16601586019550909250905060008885013560e81c600386018162ffffff169150809650819250505060008186019050611fd58b848c8c8a908692611fd093929190613544565b612724565b61201d578a83611fe783898d8f613544565b6040517f9a9462320000000000000000000000000000000000000000000000000000000081526004016107629493929190613635565b60ff8416979097019694508460a084901b74ff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617876120685780612077565b60008881526020829052604090205b9750505050505050611e25565b600381036120b75760208201918601358361209f57806120ae565b60008481526020829052604090205b93505050611e25565b60048103612103576003808301928781013560e81c91908201016000806120e48b6117fb85898d8f613544565b60009889526020526040909720969097019650909350611e2592505050565b6006810361220b5760008287013560f81c60018401935060ff16905060008784013560f01c60028501945061ffff16905060008885013560e81c600386018162ffffff1691508096508192505050600081860190506000806121718d8d8d8b9087926117fb93929190613544565b9398508893909250905084821061218757988501985b604080517f53657175656e6365206e657374656420636f6e6669673a0a0000000000000000602080830191909152603882018490526058820188905260788083018a90528351808403909101815260989092019092528051910120896121ed57806121fc565b60008a81526020829052604090205b99505050505050505050611e25565b60058103612277576020820191860135878103612246577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff94505b60006122518261290b565b90508461225e578061226d565b60008581526020829052604090205b9450505050611e25565b6040517fb2505f7c00000000000000000000000000000000000000000000000000000000815260048101829052602401610762565b50935093915050565b7f8713a7c4465f6fbee2b6e9d6646d1d9f83fec929edfc4baf661f3c865bdd04d16000908152602082905260408120610714565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fec6aba5000000000000000000000000000000000000000000000000000000000148061237c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b806123c857507fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000145b8061241457507fffffffff0000000000000000000000000000000000000000000000000000000082167fc0ee0b8a00000000000000000000000000000000000000000000000000000000145b1561242157506001919050565b61071482612946565b6000612435826129a2565b1561244257506001919050565b600061244d83611ce7565b905080158015906108c85750421092915050565b6000604282146124a15782826040517f2ee17a3d000000000000000000000000000000000000000000000000000000008152600401610762929190613675565b60006124ba6124b1600185613689565b85013560f81c90565b60ff169050604084013560f81c843560208601357f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a081111561252e578686826040517fad4aac760000000000000000000000000000000000000000000000000000000081526004016107629392919061369c565b8260ff16601b1415801561254657508260ff16601c14155b15612583578686846040517fe578897e000000000000000000000000000000000000000000000000000000008152600401610762939291906136c0565b600184036125f0576040805160008152602081018083528a905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa1580156125df573d6000803e3d6000fd5b5050506020604051035194506126c8565b6002840361268d576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101899052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a0016125bd565b86868560016040517f9dfba85200000000000000000000000000000000000000000000000000000000815260040161076294939291906136e7565b73ffffffffffffffffffffffffffffffffffffffff85166127195786866040517f6c1719d2000000000000000000000000000000000000000000000000000000008152600401610762929190613675565b505050509392505050565b600081810361275f576040517fac241e1100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000838361276e600182613689565b81811061277d5761277d6131e5565b919091013560f81c91505060018114806127975750600281145b156127dc578473ffffffffffffffffffffffffffffffffffffffff166127be878686612461565b73ffffffffffffffffffffffffffffffffffffffff16149150612902565b600381036128c75773ffffffffffffffffffffffffffffffffffffffff8516631626ba7e8786600087612810600182613689565b9261281d93929190613544565b6040518463ffffffff1660e01b815260040161283b93929190613427565b602060405180830381865afa158015612858573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061287c9190613713565b7fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e00000000000000000000000000000000000000000000000000000000149150612902565b83838260006040517f9dfba85200000000000000000000000000000000000000000000000000000000815260040161076294939291906136e7565b50949350505050565b6040517f53657175656e636520737461746963206469676573743a0a0000000000000000602082015260388101829052600090605801611543565b60007ffda4dd44000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161299957506001919050565b610714826129d5565b600081158015906107145750507fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf8541490565b60007fe4a77bbc000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601612a2857506001919050565b6107148260007f1cbec625000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601612a7f57506001919050565b6107148260007fae9fa280000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601612ad657506001919050565b6107148260007fffffffff0000000000000000000000000000000000000000000000000000000082167fac6a444e000000000000000000000000000000000000000000000000000000001480612b6d57507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b15612b7a57506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610714565b8183823760009101908152919050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461077457600080fd5b600060208284031215612c1457600080fd5b81356108c881612bd4565b803573ffffffffffffffffffffffffffffffffffffffff81168114612c4357600080fd5b919050565b600060208284031215612c5a57600080fd5b6108c882612c1f565b60008083601f840112612c7557600080fd5b50813567ffffffffffffffff811115612c8d57600080fd5b6020830191508360208260051b8501011115612ca857600080fd5b9250929050565b60008060208385031215612cc257600080fd5b823567ffffffffffffffff811115612cd957600080fd5b612ce585828601612c63565b90969095509350505050565b60008083601f840112612d0357600080fd5b50813567ffffffffffffffff811115612d1b57600080fd5b602083019150836020828501011115612ca857600080fd5b600080600080600060808688031215612d4b57600080fd5b612d5486612c1f565b9450612d6260208701612c1f565b935060408601359250606086013567ffffffffffffffff811115612d8557600080fd5b612d9188828901612cf1565b969995985093965092949392505050565b600080600060408486031215612db757600080fd5b83359250602084013567ffffffffffffffff811115612dd557600080fd5b612de186828701612cf1565b9497909650939450505050565b60008060008060408587031215612e0457600080fd5b843567ffffffffffffffff80821115612e1c57600080fd5b612e2888838901612cf1565b90965094506020870135915080821115612e4157600080fd5b50612e4e87828801612cf1565b95989497509550505050565b600060208284031215612e6c57600080fd5b5035919050565b60008060408385031215612e8657600080fd5b50508035926020909101359150565b600080600080600060608688031215612ead57600080fd5b853567ffffffffffffffff80821115612ec557600080fd5b612ed189838a01612c63565b9097509550602088013594506040880135915080821115612ef157600080fd5b50612d9188828901612cf1565b60005b83811015612f19578181015183820152602001612f01565b50506000910152565b60008151808452612f3a816020860160208601612efe565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006108c86020830184612f22565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208284031215612fc057600080fd5b813567ffffffffffffffff80821115612fd857600080fd5b818401915084601f830112612fec57600080fd5b813581811115612ffe57612ffe612f7f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561304457613044612f7f565b8160405282815287602084870101111561305d57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000806040838503121561309057600080fd5b823561309b81612bd4565b91506130a960208401612c1f565b90509250929050565b60008060008060008060008060a0898b0312156130ce57600080fd5b6130d789612c1f565b97506130e560208a01612c1f565b9650604089013567ffffffffffffffff8082111561310257600080fd5b61310e8c838d01612c63565b909850965060608b013591508082111561312757600080fd5b6131338c838d01612c63565b909650945060808b013591508082111561314c57600080fd5b506131598b828c01612cf1565b999c989b5096995094979396929594505050565b60008060008060008060a0878903121561318657600080fd5b61318f87612c1f565b955061319d60208801612c1f565b94506040870135935060608701359250608087013567ffffffffffffffff8111156131c757600080fd5b6131d389828a01612cf1565b979a9699509497509295939492505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b80358015158114612c4357600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b81835260006020808501808196508560051b810191508460005b878110156133af57828403895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418836030181126132c657600080fd5b870160c06132d382613214565b151586526132e2878301613214565b15158688015260408281013590870152606073ffffffffffffffffffffffffffffffffffffffff613314828501612c1f565b16908701526080828101359087015260a080830135368490037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe101811261335a57600080fd5b90920187810192903567ffffffffffffffff81111561337857600080fd5b80360384131561338757600080fd5b82828901526133998389018286613224565b9c89019c97505050928601925050600101613287565b5091979650505050505050565b60408152600560408201527f73656c663a000000000000000000000000000000000000000000000000000000606082015260806020820152600061093760808301848661326d565b83815260406020820152600061341e60408301848661326d565b95945050505050565b83815260406020820152600061341e604083018486613224565b7f697066733a2f2f00000000000000000000000000000000000000000000000000815260008251613479816007850160208701612efe565b9190910160070192915050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418336030181126134ba57600080fd5b9190910192915050565b6000602082840312156134d657600080fd5b6108c882613214565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261351457600080fd5b83018035915067ffffffffffffffff82111561352f57600080fd5b602001915036819003821315612ca857600080fd5b6000808585111561355457600080fd5b8386111561356157600080fd5b5050820193919092039150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156107145761071461356e565b6060815260006135c4606083018688613224565b6020830194909452506040015292915050565b7f620000000000000000000000000000000000000000000000000000000000000081526000825161360f816001850160208701612efe565b9190910160010192915050565b8281526040602082015260006109376040830184612f22565b84815273ffffffffffffffffffffffffffffffffffffffff8416602082015260606040820152600061366b606083018486613224565b9695505050505050565b602081526000610937602083018486613224565b818103818111156107145761071461356e565b6040815260006136b0604083018587613224565b9050826020830152949350505050565b6040815260006136d4604083018587613224565b905060ff83166020830152949350505050565b6060815260006136fb606083018688613224565b60208301949094525090151560409091015292915050565b60006020828403121561372557600080fd5b81516108c881612bd456fea26469706673582212200b3ca2780c0956acf3c3ac0565452b20ff7214a6f5538fcc261e6fc29c7ca98764736f6c63430008120033",
  },
  SequenceGuestModule: {
    address: "0xfea230Ee243f88BC698dD8f1aE93F8301B6cdfaE",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_space",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_provided",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_current",
            type: "uint256",
          },
        ],
        name: "BadNonce",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_code",
            type: "bytes",
          },
        ],
        name: "CreateFailed",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "DelegateCallNotAllowed",
        type: "error",
      },
      {
        inputs: [],
        name: "EmptySignature",
        type: "error",
      },
      {
        inputs: [],
        name: "ImageHashIsZero",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "_addr",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "InvalidNestedSignature",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "_s",
            type: "bytes32",
          },
        ],
        name: "InvalidSValue",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "InvalidSignature",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_flag",
            type: "uint256",
          },
        ],
        name: "InvalidSignatureFlag",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "InvalidSignatureLength",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes1",
            name: "_type",
            type: "bytes1",
          },
        ],
        name: "InvalidSignatureType",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "_v",
            type: "uint256",
          },
        ],
        name: "InvalidVValue",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "threshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_weight",
            type: "uint256",
          },
        ],
        name: "LowWeightChainedSignature",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_requested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_available",
            type: "uint256",
          },
        ],
        name: "NotEnoughGas",
        type: "error",
      },
      {
        inputs: [],
        name: "NotSupported",
        type: "error",
      },
      {
        inputs: [],
        name: "OnlyDelegatecall",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "_self",
            type: "address",
          },
        ],
        name: "OnlySelfAuth",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "SignerIsAddress0",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "_type",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "_recoverMode",
            type: "bool",
          },
        ],
        name: "UnsupportedSignatureType",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_current",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_prev",
            type: "uint256",
          },
        ],
        name: "WrongChainedCheckpointOrder",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_contract",
            type: "address",
          },
        ],
        name: "CreatedContract",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "bytes32",
            name: "newImageHash",
            type: "bytes32",
          },
        ],
        name: "ImageHashUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_space",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_newNonce",
            type: "uint256",
          },
        ],
        name: "NonceChange",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "_tx",
            type: "bytes32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "TxExecuted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "_tx",
            type: "bytes32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "bytes",
            name: "_reason",
            type: "bytes",
          },
        ],
        name: "TxFailed",
        type: "event",
      },
      {
        inputs: [],
        name: "SET_IMAGE_HASH_TYPE_HASH",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_code",
            type: "bytes",
          },
        ],
        name: "createContract",
        outputs: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "bool",
                name: "delegateCall",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "revertOnError",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "gasLimit",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct IModuleCalls.Transaction[]",
            name: "_txs",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "_signatures",
            type: "bytes",
          },
        ],
        name: "isValidSignature",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "_data",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "_signatures",
            type: "bytes",
          },
        ],
        name: "isValidSignature",
        outputs: [
          {
            internalType: "bytes4",
            name: "",
            type: "bytes4",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "nonce",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_space",
            type: "uint256",
          },
        ],
        name: "readNonce",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "bool",
                name: "delegateCall",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "revertOnError",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "gasLimit",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct IModuleCalls.Transaction[]",
            name: "_txs",
            type: "tuple[]",
          },
        ],
        name: "selfExecute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_digest",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "signatureRecovery",
        outputs: [
          {
            internalType: "uint256",
            name: "threshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "imageHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "subdigest",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "checkpoint",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "_interfaceID",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_imageHash",
            type: "bytes32",
          },
        ],
        name: "updateImageHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    bytecode:
      "0x6080604052600436106100bc5760003560e01c806361c2926c116100745780638c3f55631161004e5780638c3f55631461025357806390042baf14610273578063affed0e0146102ab57600080fd5b806361c2926c146101cb5780637a9a1628146101eb578063853c50681461020b57600080fd5b806320c13b0b116100a557806320c13b0b14610147578063295614261461016757806357c56d6b1461018957600080fd5b806301ffc9a7146100c15780631626ba7e146100f6575b600080fd5b3480156100cd57600080fd5b506100e16100dc366004611880565b6102c0565b60405190151581526020015b60405180910390f35b34801561010257600080fd5b506101166101113660046118e6565b6102d1565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100ed565b34801561015357600080fd5b50610116610162366004611932565b61031e565b34801561017357600080fd5b5061018761018236600461199e565b610383565b005b34801561019557600080fd5b506101bd7f8713a7c4465f6fbee2b6e9d6646d1d9f83fec929edfc4baf661f3c865bdd04d181565b6040519081526020016100ed565b3480156101d757600080fd5b506101876101e63660046119fc565b6103d5565b3480156101f757600080fd5b50610187610206366004611a3e565b61041a565b34801561021757600080fd5b5061022b6102263660046118e6565b610447565b604080519586526020860194909452928401919091526060830152608082015260a0016100ed565b34801561025f57600080fd5b506101bd61026e36600461199e565b61060f565b610286610281366004611ae7565b61063b565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ed565b3480156102b757600080fd5b506101bd610725565b60006102cb82610736565b92915050565b6000806102df858585610792565b509050801561031157507f1626ba7e000000000000000000000000000000000000000000000000000000009050610317565b50600090505b9392505050565b6000806103438686604051610334929190611bb6565b60405180910390208585610792565b509050801561037557507f20c13b0b00000000000000000000000000000000000000000000000000000000905061037b565b50600090505b949350505050565b3330146103c9576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044015b60405180910390fd5b6103d2816107ca565b50565b600061040883836040516020016103ed929190611d97565b604051602081830303815290604052805190602001206107fc565b9050610415818484610881565b505050565b600061043286866040516020016103ed929190611ddf565b905061043f818787610881565b505050505050565b6000806000806000808787600081811061046357610463611e27565b909101357fff000000000000000000000000000000000000000000000000000000000000001691508190506104b95761049b896107fc565b92506104a8838989610a0e565b929850909650945091506106049050565b7fff00000000000000000000000000000000000000000000000000000000000000818116016104f8576104eb896107fc565b92506104a8838989610a5f565b7ffe000000000000000000000000000000000000000000000000000000000000007fff0000000000000000000000000000000000000000000000000000000000000082160161054a576104eb89610a8b565b7ffd000000000000000000000000000000000000000000000000000000000000007fff000000000000000000000000000000000000000000000000000000000000008216016105ae5761059e898989610af8565b9550955095509550955050610604565b6040517f6085cd820000000000000000000000000000000000000000000000000000000081527fff00000000000000000000000000000000000000000000000000000000000000821660048201526024016103c0565b939792965093509350565b60006102cb7f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e83610c75565b600033301461067e576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016103c0565b81516020830134f0905073ffffffffffffffffffffffffffffffffffffffff81166106d757816040517f0d2571910000000000000000000000000000000000000000000000000000000081526004016103c09190611eba565b60405173ffffffffffffffffffffffffffffffffffffffff821681527fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c9060200160405180910390a1919050565b6000610731600061060f565b905090565b60007f6ffbd451000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161078957506001919050565b6102cb82610cd3565b60008060008060006107a5888888610447565b509650919450925090508282108015906107bd575060015b9450505050935093915050565b6040517fa038794000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f190100000000000000000000000000000000000000000000000000000000000060208201524660228201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b166042820152605681018290526000906076015b604051602081830303815290604052805190602001209050919050565b8060005b81811015610a0757368484838181106108a0576108a0611e27565b90506020028101906108b29190611ecd565b90506108c16020820182611f0b565b156108fb576040517f230d1ccc000000000000000000000000000000000000000000000000000000008152600481018390526024016103c0565b6040810135805a101561094e5782815a6040517f2bb3e3ba0000000000000000000000000000000000000000000000000000000081526004810193909352602483019190915260448201526064016103c0565b60006109886109636080850160608601611f26565b608085013584156109745784610976565b5a5b61098360a0880188611f41565b610d2f565b905080156109cf57877f5c4eeb02dabf8976016ab414d617f9a162936dcace3cdef8c69ef6e262ad5ae7856040516109c291815260200190565b60405180910390a26109f1565b6109f16109e26040850160208601611f0b565b89866109ec610d4c565b610d6b565b50505080806109ff90611fd5565b915050610885565b5050505050565b6000808080610a2987610a24876006818b61200d565b610db9565b6000908152873560f01c6020818152604080842084526002909a013560e01c908190529890912090999198509695509350505050565b6000808080610a7a87610a75876001818b61200d565b610a0e565b935093509350935093509350935093565b6040517f190100000000000000000000000000000000000000000000000000000000000060208201526000602282018190527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b1660428301526056820183905290607601610864565b6000808080806004600188013560e81c82610b138383612037565b9050610b258b61022683868d8f61200d565b939b5091995097509550935087871015610b7d57610b4581848b8d61200d565b89896040517fb006aba00000000000000000000000000000000000000000000000000000000081526004016103c0949392919061204a565b8092505b88831015610c675760038301928a013560e81c9150610ba08383612037565b90506000610bc2610bb08861124f565b8c8c879086926102269392919061200d565b939c50919a5098509091505088881015610c1a57610be282858c8e61200d565b8a8a6040517fb006aba00000000000000000000000000000000000000000000000000000000081526004016103c0949392919061204a565b848110610c5d576040517f37daf62b00000000000000000000000000000000000000000000000000000000815260048101829052602481018690526044016103c0565b9350915081610b81565b505050939792965093509350565b6000808383604051602001610c94929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60007fe4a77bbc000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601610d2657506001919050565b6102cb82611283565b6000604051828482376000808483898b8af1979650505050505050565b60603d604051915060208201818101604052818352816000823e505090565b8315610d7957805160208201fd5b827fab46c69f7f32e1bf09b0725853da82a211e5402a0600296ab499a2fb5ea3b4198383604051610dab929190612071565b60405180910390a250505050565b60008060005b8381101561124657600181019085013560f81c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101610e6057601582019186013560f881901c9060581c73ffffffffffffffffffffffffffffffffffffffff81169074ff000000000000000000000000000000000000000016811785610e465780610e55565b60008681526020829052604090205b955050505050610dbf565b80610ef65760018201918681013560f81c906043016000610e8c8a610e8784888c8e61200d565b61136d565b60ff841697909701969194508491905060a083901b74ff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff82161786610edb5780610eea565b60008781526020829052604090205b96505050505050610dbf565b6002810361101e576000808784013560f881901c9060581c73ffffffffffffffffffffffffffffffffffffffff16601586019550909250905060008885013560e81c600386018162ffffff169150809650819250505060008186019050610f6f8b848c8c8a908692610f6a9392919061200d565b611630565b610fb7578a83610f8183898d8f61200d565b6040517f9a9462320000000000000000000000000000000000000000000000000000000081526004016103c0949392919061208a565b60ff8416979097019694508460a084901b74ff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617876110025780611011565b60008881526020829052604090205b9750505050505050610dbf565b60038103611051576020820191860135836110395780611048565b60008481526020829052604090205b93505050610dbf565b6004810361109d576003808301928781013560e81c919082010160008061107e8b610a2485898d8f61200d565b60009889526020526040909720969097019650909350610dbf92505050565b600681036111a55760008287013560f81c60018401935060ff16905060008784013560f01c60028501945061ffff16905060008885013560e81c600386018162ffffff16915080965081925050506000818601905060008061110b8d8d8d8b908792610a249392919061200d565b9398508893909250905084821061112157988501985b604080517f53657175656e6365206e657374656420636f6e6669673a0a0000000000000000602080830191909152603882018490526058820188905260788083018a90528351808403909101815260989092019092528051910120896111875780611196565b60008a81526020829052604090205b99505050505050505050610dbf565b600581036112115760208201918601358781036111e0577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff94505b60006111eb82611817565b9050846111f85780611207565b60008581526020829052604090205b9450505050610dbf565b6040517fb2505f7c000000000000000000000000000000000000000000000000000000008152600481018290526024016103c0565b50935093915050565b7f8713a7c4465f6fbee2b6e9d6646d1d9f83fec929edfc4baf661f3c865bdd04d160009081526020829052604081206102cb565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fac6a444e00000000000000000000000000000000000000000000000000000000148061131657507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b1561132357506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146102cb565b6000604282146113ad5782826040517f2ee17a3d0000000000000000000000000000000000000000000000000000000081526004016103c09291906120ca565b60006113c66113bd6001856120de565b85013560f81c90565b60ff169050604084013560f81c843560208601357f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a081111561143a578686826040517fad4aac760000000000000000000000000000000000000000000000000000000081526004016103c0939291906120f1565b8260ff16601b1415801561145257508260ff16601c14155b1561148f578686846040517fe578897e0000000000000000000000000000000000000000000000000000000081526004016103c093929190612115565b600184036114fc576040805160008152602081018083528a905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa1580156114eb573d6000803e3d6000fd5b5050506020604051035194506115d4565b60028403611599576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101899052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a0016114c9565b86868560016040517f9dfba8520000000000000000000000000000000000000000000000000000000081526004016103c0949392919061213c565b73ffffffffffffffffffffffffffffffffffffffff85166116255786866040517f6c1719d20000000000000000000000000000000000000000000000000000000081526004016103c09291906120ca565b505050509392505050565b600081810361166b576040517fac241e1100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000838361167a6001826120de565b81811061168957611689611e27565b919091013560f81c91505060018114806116a35750600281145b156116e8578473ffffffffffffffffffffffffffffffffffffffff166116ca87868661136d565b73ffffffffffffffffffffffffffffffffffffffff1614915061180e565b600381036117d35773ffffffffffffffffffffffffffffffffffffffff8516631626ba7e878660008761171c6001826120de565b926117299392919061200d565b6040518463ffffffff1660e01b815260040161174793929190612168565b602060405180830381865afa158015611764573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611788919061218b565b7fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e0000000000000000000000000000000000000000000000000000000014915061180e565b83838260006040517f9dfba8520000000000000000000000000000000000000000000000000000000081526004016103c0949392919061213c565b50949350505050565b6040517f53657175656e636520737461746963206469676573743a0a0000000000000000602082015260388101829052600090605801610864565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146103d257600080fd5b60006020828403121561189257600080fd5b813561031781611852565b60008083601f8401126118af57600080fd5b50813567ffffffffffffffff8111156118c757600080fd5b6020830191508360208285010111156118df57600080fd5b9250929050565b6000806000604084860312156118fb57600080fd5b83359250602084013567ffffffffffffffff81111561191957600080fd5b6119258682870161189d565b9497909650939450505050565b6000806000806040858703121561194857600080fd5b843567ffffffffffffffff8082111561196057600080fd5b61196c8883890161189d565b9096509450602087013591508082111561198557600080fd5b506119928782880161189d565b95989497509550505050565b6000602082840312156119b057600080fd5b5035919050565b60008083601f8401126119c957600080fd5b50813567ffffffffffffffff8111156119e157600080fd5b6020830191508360208260051b85010111156118df57600080fd5b60008060208385031215611a0f57600080fd5b823567ffffffffffffffff811115611a2657600080fd5b611a32858286016119b7565b90969095509350505050565b600080600080600060608688031215611a5657600080fd5b853567ffffffffffffffff80821115611a6e57600080fd5b611a7a89838a016119b7565b9097509550602088013594506040880135915080821115611a9a57600080fd5b50611aa78882890161189d565b969995985093965092949392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208284031215611af957600080fd5b813567ffffffffffffffff80821115611b1157600080fd5b818401915084601f830112611b2557600080fd5b813581811115611b3757611b37611ab8565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611b7d57611b7d611ab8565b81604052828152876020848701011115611b9657600080fd5b826020860160208301376000928101602001929092525095945050505050565b8183823760009101908152919050565b80358015158114611bd657600080fd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611bd657600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b81835260006020808501808196508560051b810191508460005b87811015611d8a57828403895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff41883603018112611ca157600080fd5b870160c0611cae82611bc6565b15158652611cbd878301611bc6565b15158688015260408281013590870152606073ffffffffffffffffffffffffffffffffffffffff611cef828501611bdb565b16908701526080828101359087015260a080830135368490037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1018112611d3557600080fd5b90920187810192903567ffffffffffffffff811115611d5357600080fd5b803603841315611d6257600080fd5b8282890152611d748389018286611bff565b9c89019c97505050928601925050600101611c62565b5091979650505050505050565b60408152600560408201527f73656c663a000000000000000000000000000000000000000000000000000000606082015260806020820152600061037b608083018486611c48565b60408152600660408201527f67756573743a0000000000000000000000000000000000000000000000000000606082015260806020820152600061037b608083018486611c48565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000815180845260005b81811015611e7c57602081850181015186830182015201611e60565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815260006103176020830184611e56565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff41833603018112611f0157600080fd5b9190910192915050565b600060208284031215611f1d57600080fd5b61031782611bc6565b600060208284031215611f3857600080fd5b61031782611bdb565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f7657600080fd5b83018035915067ffffffffffffffff821115611f9157600080fd5b6020019150368190038213156118df57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361200657612006611fa6565b5060010190565b6000808585111561201d57600080fd5b8386111561202a57600080fd5b5050820193919092039150565b808201808211156102cb576102cb611fa6565b60608152600061205e606083018688611bff565b6020830194909452506040015292915050565b82815260406020820152600061037b6040830184611e56565b84815273ffffffffffffffffffffffffffffffffffffffff841660208201526060604082015260006120c0606083018486611bff565b9695505050505050565b60208152600061037b602083018486611bff565b818103818111156102cb576102cb611fa6565b604081526000612105604083018587611bff565b9050826020830152949350505050565b604081526000612129604083018587611bff565b905060ff83166020830152949350505050565b606081526000612150606083018688611bff565b60208301949094525090151560409091015292915050565b838152604060208201526000612182604083018486611bff565b95945050505050565b60006020828403121561219d57600080fd5b81516103178161185256fea26469706673582212200896636ab1dae9ad33c5080d1044c3c12105a6d4bc196fd0009bf12ed3b0f85364736f6c63430008120033",
  },
} as const;
