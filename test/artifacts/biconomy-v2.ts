export const BICONOMY_V2_ARTIFACTS = {
  SmartAccountFactory: {
    address: "0x000000a56Aaca3e9a4C479ea6b6CD0DbcB6634F5",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_basicImplementation",
            type: "address",
          },
          {internalType: "address", name: "_newOwner", type: "address"},
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "initialAuthModule",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "AccountCreation",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "initialAuthModule",
            type: "address",
          },
        ],
        name: "AccountCreationWithoutIndex",
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
        name: "accountCreationCode",
        outputs: [{internalType: "bytes", name: "", type: "bytes"}],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "epAddress", type: "address"},
          {internalType: "uint32", name: "unstakeDelaySec", type: "uint32"},
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "basicImplementation",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "moduleSetupContract",
            type: "address",
          },
          {internalType: "bytes", name: "moduleSetupData", type: "bytes"},
        ],
        name: "deployAccount",
        outputs: [{internalType: "address", name: "proxy", type: "address"}],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "moduleSetupContract",
            type: "address",
          },
          {internalType: "bytes", name: "moduleSetupData", type: "bytes"},
          {internalType: "uint256", name: "index", type: "uint256"},
        ],
        name: "deployCounterFactualAccount",
        outputs: [{internalType: "address", name: "proxy", type: "address"}],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "moduleSetupContract",
            type: "address",
          },
          {internalType: "bytes", name: "moduleSetupData", type: "bytes"},
          {internalType: "uint256", name: "index", type: "uint256"},
        ],
        name: "getAddressForCounterFactualAccount",
        outputs: [{internalType: "address", name: "_account", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "minimalHandler",
        outputs: [
          {
            internalType: "contract DefaultCallbackHandler",
            name: "",
            type: "address",
          },
        ],
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [{internalType: "address", name: "epAddress", type: "address"}],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "epAddress", type: "address"},
          {
            internalType: "address payable",
            name: "withdrawAddress",
            type: "address",
          },
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    bytecode:
      "0x60806040526004361015610013575b600080fd5b60003560e01c80632e7a1a831461010357806331c884df146100fa5780633b3cb143146100f157806345171159146100e85780634a1ce599146100df578063715018a6146100d6578063743b1e03146100cd5780638da5cb5b146100c4578063b36f9705146100bb578063daf0dfc8146100b2578063df20ffbc146100a95763f2fde38b146100a157600080fd5b61000e6108a6565b5061000e61076a565b5061000e610725565b5061000e6106a1565b5061000e610679565b5061000e610533565b5061000e6104cb565b5061000e61045f565b5061000e6103c2565b5061000e61037d565b5061000e61031d565b5061000e61018c565b6001600160a01b0381160361000e57565b9181601f8401121561000e5782359167ffffffffffffffff831161000e576020838186019501011161000e57565b90606060031983011261000e576004356101648161010c565b916024359067ffffffffffffffff821161000e576101849160040161011d565b909160443590565b503461000e576102f66102dc6102d06101b16101a73661014b565b9392919091610b54565b6102c1610120916020926101c6848201610a8e565b90808252610bdb858301396040519461024a61025687610214888201956001600160a01b037f0000000000000000000000000000002512019dafb59528b82cb92d3c5d2423ac169087610a9e565b0394610228601f19968781018b528a610a5f565b8781519101209260405192839189830195869091604092825260208201520190565b03858101835282610a5f565b519020945190206040517fff000000000000000000000000000000000000000000000000000000000000009481019485523060601b6bffffffffffffffffffffffff191660018601526015850195909552603584015291929182605585015b03908101835282610a5f565b5190206001600160a01b031690565b6001600160a01b031690565b6040516001600160a01b0390911681529081906020820190565b0390f35b60005b83811061030d5750506000910152565b81810151838201526020016102fd565b503461000e57600036600319011261000e5761036f60406101208151906103476020820183610a5f565b8082526020820190610cfb8239825193849260208452518092816020860152858501906102fa565b601f01601f19168101030190f35b503461000e57600036600319011261000e5760206040516001600160a01b037f0000000000000000000000000bba6d96bd616bedc6bfaa341742fd43c60b83c1168152f35b506000604036600319011261045c576004356103dd8161010c565b816024359163ffffffff8316809303610458576001600160a01b0390610401610991565b169161040e8315156109e9565b823b1561045857602460405180948193621cb65b60e51b8352600483015234905af1801561044b575b61043f575080f35b61044890610a35565b80f35b610453610a81565b610437565b5080fd5b80fd5b503461000e576000602036600319011261045c57806001600160a01b036004356104888161010c565b610490610991565b1661049c8115156109e9565b803b156104c857819060046040518094819363bb9fe6bf60e01b83525af1801561044b5761043f575080f35b50fd5b503461000e5760008060031936011261045c576104e6610991565b806001600160a01b03815473ffffffffffffffffffffffffffffffffffffffff1981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b503461000e57604036600319011261000e576004356105518161010c565b60243567ffffffffffffffff811161000e5761057190369060040161011d565b6101209161058160208401610a8e565b92808452610e1b60208501396105fe604051926105df846105d16001600160a01b0397887f0000000000000000000000000000002512019dafb59528b82cb92d3c5d2423ac169060208401610a9e565b03601f198101865285610a5f565b835160009460200185f092858416966105f9881515610b08565b610b54565b805183918161064c575b50506040519485946102f69416917f9a6cbf173278cf7dfadb45414d824f7828c0c94479f1b15e45453653070cf6579080a36001600160a01b031682526020820190565b8296945090602083920182855af193604051943d82873e1561067557935191936102f638610608565b3d85fd5b503461000e57600036600319011261000e5760206001600160a01b0360005416604051908152f35b503461000e576000604036600319011261045c576004356106c18161010c565b81602435916106cf8361010c565b6106d7610991565b6001600160a01b03809116926106ee8415156109e9565b833b156107215760249083604051958694859363611d2e7560e11b85521660048401525af1801561044b5761043f575080f35b8280fd5b503461000e57600036600319011261000e5760206040516001600160a01b037f0000000000000000000000000000002512019dafb59528b82cb92d3c5d2423ac168152f35b503461000e5761077c6101a73661014b565b9081519160208082019384209260405193846107a78385830193849091604092825260208201520190565b03946107bb601f1996878101835282610a5f565b519020610120946107cd848701610a8e565b95808752610f3b8588013961081860405191826102b56001600160a01b03998a7f0000000000000000000000000000002512019dafb59528b82cb92d3c5d2423ac1690898401610a9e565b8051906000940184f591848316610830811515610abc565b8194518061087d575b50604051965086956102f69516917f8967dcaa00d8fcb9bb2b5beff4aaf8c020063512cf08fbe11fec37a1e3a150f29080a46001600160a01b031682526020820190565b82978380939750865af194604051953d82883e156108a2579451939485949338610839565b3d86fd5b503461000e57602036600319011261000e576004356108c48161010c565b6108cc610991565b6001600160a01b0380911680156109265760009182548273ffffffffffffffffffffffffffffffffffffffff198216178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608490fd5b6001600160a01b036000541633036109a557565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b156109f057565b60405162461bcd60e51b815260206004820152601260248201527f496e76616c6964204550206164647265737300000000000000000000000000006044820152606490fd5b67ffffffffffffffff8111610a4957604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610a4957604052565b506040513d6000823e3d90fd5b90610a9c6040519283610a5f565b565b6020929190610ab48492828151948592016102fa565b019081520190565b15610ac357565b60405162461bcd60e51b815260206004820152601360248201527f437265617465322063616c6c206661696c6564000000000000000000000000006044820152606490fd5b15610b0f57565b60405162461bcd60e51b815260206004820152601260248201527f4372656174652063616c6c206661696c656400000000000000000000000000006044820152606490fd5b60a490610bd7929380604051958693631bc6fec760e11b60208601526001600160a01b0390817f0000000000000000000000000bba6d96bd616bedc6bfaa341742fd43c60b83c116602487015216604485015260606064850152816084850152848401376000838284010152601f80199101168101036084810184520182610a5f565b9056fe6080346100aa57601f61012038819003918201601f19168301916001600160401b038311848410176100af578084926020946040528339810103126100aa57516001600160a01b0381168082036100aa5715610065573055604051605a90816100c68239f35b60405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420696d706c656d656e746174696f6e206164647265737300006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060405230546000808092368280378136915af43d82803e156020573d90f35b3d90fdfea2646970667358221220a03b18dce0be0b4c9afe58a9eb85c35205e2cf087da098bbf1d23945bf89496064736f6c634300081100336080346100aa57601f61012038819003918201601f19168301916001600160401b038311848410176100af578084926020946040528339810103126100aa57516001600160a01b0381168082036100aa5715610065573055604051605a90816100c68239f35b60405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420696d706c656d656e746174696f6e206164647265737300006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060405230546000808092368280378136915af43d82803e156020573d90f35b3d90fdfea2646970667358221220a03b18dce0be0b4c9afe58a9eb85c35205e2cf087da098bbf1d23945bf89496064736f6c634300081100336080346100aa57601f61012038819003918201601f19168301916001600160401b038311848410176100af578084926020946040528339810103126100aa57516001600160a01b0381168082036100aa5715610065573055604051605a90816100c68239f35b60405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420696d706c656d656e746174696f6e206164647265737300006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060405230546000808092368280378136915af43d82803e156020573d90f35b3d90fdfea2646970667358221220a03b18dce0be0b4c9afe58a9eb85c35205e2cf087da098bbf1d23945bf89496064736f6c634300081100336080346100aa57601f61012038819003918201601f19168301916001600160401b038311848410176100af578084926020946040528339810103126100aa57516001600160a01b0381168082036100aa5715610065573055604051605a90816100c68239f35b60405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420696d706c656d656e746174696f6e206164647265737300006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060405230546000808092368280378136915af43d82803e156020573d90f35b3d90fdfea2646970667358221220a03b18dce0be0b4c9afe58a9eb85c35205e2cf087da098bbf1d23945bf89496064736f6c63430008110033a2646970667358221220cc3855215776915d9c3562b4380fe9fbf7afb53b9434cabc4802d531f12df64364736f6c63430008110033",
  },
  SmartAccount: {
    address: "0x0000002512019Dafb59528B82CB92D3c5D2423aC",
    abi: [
      {
        inputs: [
          {
            internalType: "contract IEntryPoint",
            name: "anEntryPoint",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {inputs: [], name: "AlreadyInitialized", type: "error"},
      {inputs: [], name: "BaseImplementationCannotBeZero", type: "error"},
      {
        inputs: [{internalType: "address", name: "caller", type: "address"}],
        name: "CallerIsNotAnEntryPoint",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "caller", type: "address"}],
        name: "CallerIsNotEntryPoint",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "caller", type: "address"}],
        name: "CallerIsNotEntryPointOrOwner",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "caller", type: "address"}],
        name: "CallerIsNotEntryPointOrSelf",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "caller", type: "address"}],
        name: "CallerIsNotOwner",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "caller", type: "address"}],
        name: "CallerIsNotSelf",
        type: "error",
      },
      {inputs: [], name: "DelegateCallsOnly", type: "error"},
      {inputs: [], name: "EntryPointCannotBeZero", type: "error"},
      {inputs: [], name: "HandlerCannotBeZero", type: "error"},
      {
        inputs: [
          {
            internalType: "address",
            name: "implementationAddress",
            type: "address",
          },
        ],
        name: "InvalidImplementation",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "caller", type: "address"}],
        name: "MixedAuthFail",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "module", type: "address"}],
        name: "ModuleAlreadyEnabled",
        type: "error",
      },
      {
        inputs: [
          {internalType: "address", name: "expectedModule", type: "address"},
          {internalType: "address", name: "returnedModule", type: "address"},
          {internalType: "address", name: "prevModule", type: "address"},
        ],
        name: "ModuleAndPrevModuleMismatch",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "module", type: "address"}],
        name: "ModuleCannotBeZeroOrSentinel",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "module", type: "address"}],
        name: "ModuleNotEnabled",
        type: "error",
      },
      {inputs: [], name: "ModulesAlreadyInitialized", type: "error"},
      {inputs: [], name: "ModulesSetupExecutionFailed", type: "error"},
      {inputs: [], name: "OwnerCanNotBeSelf", type: "error"},
      {inputs: [], name: "OwnerCannotBeZero", type: "error"},
      {inputs: [], name: "OwnerProvidedIsSame", type: "error"},
      {inputs: [], name: "TransferToZeroAddressAttempt", type: "error"},
      {
        inputs: [
          {internalType: "uint256", name: "destLength", type: "uint256"},
          {internalType: "uint256", name: "valueLength", type: "uint256"},
          {internalType: "uint256", name: "funcLength", type: "uint256"},
          {internalType: "uint256", name: "operationLength", type: "uint256"},
        ],
        name: "WrongBatchProvided",
        type: "error",
      },
      {
        inputs: [
          {internalType: "bytes", name: "contractSignature", type: "bytes"},
        ],
        name: "WrongContractSignature",
        type: "error",
      },
      {
        inputs: [
          {internalType: "uint256", name: "uintS", type: "uint256"},
          {
            internalType: "uint256",
            name: "contractSignatureLength",
            type: "uint256",
          },
          {internalType: "uint256", name: "signatureLength", type: "uint256"},
        ],
        name: "WrongContractSignatureFormat",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "moduleAddressProvided",
            type: "address",
          },
        ],
        name: "WrongValidationModule",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousHandler",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "handler",
            type: "address",
          },
        ],
        name: "ChangedFallbackHandler",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "module",
            type: "address",
          },
        ],
        name: "DisabledModule",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "module",
            type: "address",
          },
        ],
        name: "EnabledModule",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {indexed: true, internalType: "address", name: "to", type: "address"},
          {
            indexed: true,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {indexed: true, internalType: "bytes", name: "data", type: "bytes"},
          {
            indexed: false,
            internalType: "enum Enum.Operation",
            name: "operation",
            type: "uint8",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "txGas",
            type: "uint256",
          },
        ],
        name: "ExecutionFailure",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "module",
            type: "address",
          },
        ],
        name: "ExecutionFromModuleFailure",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "module",
            type: "address",
          },
        ],
        name: "ExecutionFromModuleSuccess",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {indexed: true, internalType: "address", name: "to", type: "address"},
          {
            indexed: true,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {indexed: true, internalType: "bytes", name: "data", type: "bytes"},
          {
            indexed: false,
            internalType: "enum Enum.Operation",
            name: "operation",
            type: "uint8",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "txGas",
            type: "uint256",
          },
        ],
        name: "ExecutionSuccess",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "oldImplementation",
            type: "address",
          },
          {
            indexed: true,
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
            internalType: "address",
            name: "module",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {indexed: false, internalType: "bytes", name: "data", type: "bytes"},
          {
            indexed: false,
            internalType: "enum Enum.Operation",
            name: "operation",
            type: "uint8",
          },
        ],
        name: "ModuleTransaction",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "SmartAccountReceivedNativeToken",
        type: "event",
      },
      {stateMutability: "nonpayable", type: "fallback"},
      {
        inputs: [],
        name: "VERSION",
        outputs: [{internalType: "string", name: "", type: "string"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "addDeposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "prevModule", type: "address"},
          {internalType: "address", name: "module", type: "address"},
        ],
        name: "disableModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "module", type: "address"}],
        name: "enableModule",
        outputs: [],
        stateMutability: "nonpayable",
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
          {internalType: "address[]", name: "to", type: "address[]"},
          {internalType: "uint256[]", name: "value", type: "uint256[]"},
          {internalType: "bytes[]", name: "data", type: "bytes[]"},
          {
            internalType: "enum Enum.Operation[]",
            name: "operations",
            type: "uint8[]",
          },
        ],
        name: "execBatchTransactionFromModule",
        outputs: [{internalType: "bool", name: "success", type: "bool"}],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "to", type: "address"},
          {internalType: "uint256", name: "value", type: "uint256"},
          {internalType: "bytes", name: "data", type: "bytes"},
          {
            internalType: "enum Enum.Operation",
            name: "operation",
            type: "uint8",
          },
          {internalType: "uint256", name: "txGas", type: "uint256"},
        ],
        name: "execTransactionFromModule",
        outputs: [{internalType: "bool", name: "success", type: "bool"}],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "to", type: "address"},
          {internalType: "uint256", name: "value", type: "uint256"},
          {internalType: "bytes", name: "data", type: "bytes"},
          {
            internalType: "enum Enum.Operation",
            name: "operation",
            type: "uint8",
          },
        ],
        name: "execTransactionFromModule",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "to", type: "address"},
          {internalType: "uint256", name: "value", type: "uint256"},
          {internalType: "bytes", name: "data", type: "bytes"},
          {
            internalType: "enum Enum.Operation",
            name: "operation",
            type: "uint8",
          },
        ],
        name: "execTransactionFromModuleReturnData",
        outputs: [
          {internalType: "bool", name: "success", type: "bool"},
          {internalType: "bytes", name: "returnData", type: "bytes"},
        ],
        stateMutability: "nonpayable",
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
          {internalType: "uint256[]", name: "value", type: "uint256[]"},
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
        name: "executeBatch_y6U",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "dest", type: "address"},
          {internalType: "uint256", name: "value", type: "uint256"},
          {internalType: "bytes", name: "func", type: "bytes"},
        ],
        name: "execute_ncC",
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
        inputs: [],
        name: "getFallbackHandler",
        outputs: [{internalType: "address", name: "_handler", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getImplementation",
        outputs: [
          {internalType: "address", name: "_implementation", type: "address"},
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "start", type: "address"},
          {internalType: "uint256", name: "pageSize", type: "uint256"},
        ],
        name: "getModulesPaginated",
        outputs: [
          {internalType: "address[]", name: "array", type: "address[]"},
          {internalType: "address", name: "next", type: "address"},
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "handler", type: "address"},
          {
            internalType: "address",
            name: "moduleSetupContract",
            type: "address",
          },
          {internalType: "bytes", name: "moduleSetupData", type: "bytes"},
        ],
        name: "init",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "module", type: "address"}],
        name: "isModuleEnabled",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes32", name: "dataHash", type: "bytes32"},
          {internalType: "bytes", name: "signature", type: "bytes"},
        ],
        name: "isValidSignature",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "uint192", name: "_key", type: "uint192"}],
        name: "nonce",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "uint256", name: "", type: "uint256"}],
        name: "noncesDeprecated",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "ownerDeprecated",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "handler", type: "address"}],
        name: "setFallbackHandler",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "setupContract", type: "address"},
          {internalType: "bytes", name: "setupData", type: "bytes"},
        ],
        name: "setupAndEnableModule",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes4", name: "_interfaceId", type: "bytes4"},
        ],
        name: "supportsInterface",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "_implementation", type: "address"},
        ],
        name: "updateImplementation",
        outputs: [],
        stateMutability: "nonpayable",
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
              {internalType: "uint256", name: "callGasLimit", type: "uint256"},
              {
                internalType: "uint256",
                name: "verificationGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "preVerificationGas",
                type: "uint256",
              },
              {internalType: "uint256", name: "maxFeePerGas", type: "uint256"},
              {
                internalType: "uint256",
                name: "maxPriorityFeePerGas",
                type: "uint256",
              },
              {internalType: "bytes", name: "paymasterAndData", type: "bytes"},
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct UserOperation",
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
        stateMutability: "payable",
        type: "function",
      },
      {stateMutability: "payable", type: "receive"},
    ],
    bytecode:
      "0x60806040526004361015610030575b36156100285734610023576100216119d6565b005b600080fd5b6100216114d3565b60003560e01c8061189a146101b357806146801461021657806301ffc9a71461025e578063025b22bc146102555780631626ba7e1461024c57806321632045146102435780632d9ad53d1461023a578063378dfd8e146102315780633a871cdd14610228578063468721a71461021f57806347e1da2a146102165780634a58db191461020d5780634d44560d146102045780635229073f146101fb5780635305dd27146101f2578063610b5925146101e95780636424e9fe146101e0578063856dfd99146101d7578063aaf10f42146101ce578063acfdf503146101c5578063b0d691fe146101bc578063b61d27f6146101b3578063c399ec88146101aa578063cc2f8452146101a1578063d86f2b3c14610198578063e009cfde1461018f578063f08a032314610186578063f33623b11461017d5763ffa1ad740361000e57610178611439565b61000e565b5061017861140c565b506101786113de565b5061017861120c565b5061017861113a565b50610178611038565b50610178610f45565b506101786102b3565b50610178610f00565b50610178610e5d565b50610178610e36565b50610178610def565b50610178610dc7565b50610178610d99565b50610178610d2d565b50610178610cab565b50610178610bd4565b50610178610b4a565b50610178610342565b50610178610afc565b50610178610929565b506101786107c8565b5061017861076a565b506101786106ab565b5061017861064f565b5061017861049d565b50610178610461565b6001600160a01b0381160361002357565b359061028382610267565b565b9181601f840112156100235782359167ffffffffffffffff8311610023576020838186019501011161002357565b5034610023576060366003190112610023576004356102d181610267565b6044359067ffffffffffffffff8211610023576103076102f8610021933690600401610285565b61030061198c565b36916105fa565b906024359061190d565b9181601f840112156100235782359167ffffffffffffffff8311610023576020808501948460051b01011161002357565b50346100235760603660031901126100235767ffffffffffffffff60043581811161002357610375903690600401610311565b906024358381116100235761038e903690600401610311565b93604435908111610023576103a7903690600401610311565b926103b061198c565b84158015610445575b801561043b575b61040f5760005b8581106103d057005b806104096103e96103e46001948a87611745565b611763565b6103f4838b89611745565b35610403610300858b8a61176d565b9161190d565b016103c7565b5050506084926040519263470c355760e01b845260048401526024830152604482015260006064820152fd5b50838614156103c0565b50858514156103b9565b6001600160e01b031981160361002357565b50346100235760203660031901126100235760206004356104818161044f565b6040516001600160e01b03199091166301ffc9a760e01b148152f35b5034610023576020366003190112610023576004356104bb81610267565b6104c3611931565b6001600160a01b0380821691821561053057803b15610509573054903055167faa3f731066a578e5f39b4215468d826cdd15373cbc0dfc9cb9bdc649718ef7da600080a3005b604051630c76093760e01b81526001600160a01b03919091166004820152602490fd5b0390fd5b60405162461bcd60e51b815260206004820152601660248201527f416464726573732063616e6e6f74206265207a65726f000000000000000000006044820152606490fd5b50634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff81116105a057604052565b6105a8610575565b604052565b90601f8019910116810190811067ffffffffffffffff8211176105a057604052565b60209067ffffffffffffffff81116105ed575b601f01601f19160190565b6105f5610575565b6105e2565b929192610606826105cf565b9161061460405193846105ad565b829481845281830111610023578281602093846000960137010152565b9080601f830112156100235781602061064c933591016105fa565b90565b50346100235760403660031901126100235760243567ffffffffffffffff81116100235761068e6106866020923690600401610631565b600435611834565b6040516001600160e01b03199091168152f35b6002111561002357565b50346100235760a0366003190112610023576004356106c981610267565b60443567ffffffffffffffff8111610023576106e9903690600401610631565b90606435906106f7826106a1565b6084359160013314801561074b575b61073357602093610723938061072d57505a925b60243590611b5a565b6040519015158152f35b9261071a565b6040516321ac7c5f60e01b8152336004820152602490fd5b503360005260006020526001600160a01b036040600020541615610706565b503461002357602036600319011261002357602060043561078a81610267565b6001600160a01b0380911690816001141591826107ae575b50506040519015158152f35b9091506000526000825260406000205416151538806107a2565b5034610023576060366003190112610023576004356107e681610267565b602435906107f382610267565b60443567ffffffffffffffff811161002357610813903690600401610285565b91909260009360018552846020526001600160a01b0393604093858588205416158015906108fd575b6108ed5791610852916103006108589594611a24565b90611f7a565b918216801580156108e3575b6108cd578282856108b1936108c997528060205261089182822060016001600160a01b0319825416179055565b6001815220906001600160a01b03166001600160a01b0319825416179055565b516001600160a01b0390911681529081906020820190565b0390f35b602491519063cadb248f60e01b82526004820152fd5b5060018114610864565b845162dc149f60e41b8152600490fd5b50857f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d45416151561083c565b503461002357600319606036820112610023576004359067ffffffffffffffff82116100235761016082600401918336030112610023576000906001600160a01b0392837f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d2789163303610a9b576109af6109a76101448693018461153d565b810190611570565b905016926109e06109d3856001600160a01b03166000526000602052604060002090565b546001600160a01b031690565b1615610a7a576020610a116108c9948493604051948580948193637ff9adb960e11b835260243590600484016115fa565b03925af1918215610a6d575b91610a3f575b50610a2f6044356116f1565b6040519081529081906020820190565b610a60915060203d8111610a66575b610a5881836105ad565b8101906114b7565b38610a23565b503d610a4e565b610a756114c6565b610a1d565b6040516326cc3fab60e21b81526001600160a01b0384166004820152602490fd5b604051635dac3db760e11b8152336004820152602490fd5b608060031982011261002357600435610acb81610267565b91602435916044359067ffffffffffffffff821161002357610aef91600401610631565b9060643561064c816106a1565b503461002357610b0b36610ab3565b600193919333148015610b2b575b61073357602093610723935a93611b5a565b503360005260006020526001600160a01b036040600020541615610b19565b50600080600319360112610bd1576001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27891681813b15610bd15760405163b760faf960e01b8152306004820152918290602490829034905af18015610bc4575b610bb8575080f35b610bc19061058c565b80f35b610bcc6114c6565b610bb0565b80fd5b5060006040366003190112610bd157600435610bef81610267565b610bf7611931565b816001600160a01b03807f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27891692833b15610c5f5760449083604051958694859363040b850f60e31b855216600484015260243560248401525af18015610bc457610bb8575080f35b8280fd5b60005b838110610c765750506000910152565b8181015183820152602001610c66565b90602091610c9f81518092818552858086019101610c63565b601f01601f1916010190565b503461002357610cba36610ab3565b90600193929333148015610d0e575b61073357610cd8935a93611b5a565b6040519060203d8301016040523d82523d6000602084013e6108c960405192839215158352604060208401526040830190610c86565b503360005260006020526001600160a01b036040600020541615610cc9565b503461002357604036600319011261002357600435610d4b81610267565b60243567ffffffffffffffff811161002357602091610d71610d7f923690600401610631565b90610d7a611931565b611f7a565b610d8881611d68565b6001600160a01b0360405191168152f35b503461002357602036600319011261002357610021600435610dba81610267565b610dc2611931565b611d68565b50346100235760003660031901126100235760206001600160a01b0360315416604051908152f35b50346100235760003660031901126100235760207f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d4546001600160a01b0360405191168152f35b503461002357600036600319011261002357602030546001600160a01b0360405191168152f35b50346100235760803660031901126100235767ffffffffffffffff60043581811161002357610e90903690600401610311565b60249291923582811161002357610eab903690600401610311565b60449491943584811161002357610ec6903690600401610311565b91606435958611610023576108c996610ee6610eee973690600401610311565b969095611c22565b60405190151581529081906020820190565b50346100235760003660031901126100235760206040516001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d2789168152f35b5034610023576000366003190112610023576040516370a0823160e01b815230600482015260209081816024817f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27896001600160a01b03165afa908115610fd4575b600091610fb7575b50604051908152f35b610fce9150823d8111610a6657610a5881836105ad565b38610fae565b610fdc6114c6565b610fa6565b90929192604082016040835281518091526060830160208093019160005b8482821061101b575050506001600160a01b0391509416910152565b84516001600160a01b031684529384019390920191600101610fff565b50346100235760403660031901126100235760043561105681610267565b60243561106281611a96565b61106f60405191826105ad565b818152601f1961107e83611a96565b013660208301376110a76109d36000946001600160a01b03166000526000602052604060002090565b6001600160a01b038116801515908161112e575b5080611125575b15611112576111066109d3826110ed61110c946110df8988611ab7565b906001600160a01b03169052565b6001600160a01b03166000526000602052604060002090565b93611ad9565b926110a7565b908381526108c960405192839283610fe1565b508284106110c2565b600191501415386110bb565b50346100235760203660031901126100235760043577ffffffffffffffffffffffffffffffffffffffffffffffff8116809103610023576108c99060405190631aab3f0d60e11b825230600483015260248201526020816044816001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d2789165afa9081156111ff575b6000916111e1575b506040519081529081906020820190565b6111f9915060203d8111610a6657610a5881836105ad565b386111d0565b6112076114c6565b6111c8565b50346100235760403660031901126100235760043561122a81610267565b60243561123681610267565b61123e611931565b6001600160a01b038116801580156113d4575b6113b3576112846112786109d3856001600160a01b03166000526000602052604060002090565b6001600160a01b031690565b03611359578061130a7faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace4054276936112ef6112d56109d3611354966001600160a01b03166000526000602052604060002090565b916001600160a01b03166000526000602052604060002090565b906001600160a01b03166001600160a01b0319825416179055565b61133a61132a826001600160a01b03166000526000602052604060002090565b6001600160a01b03198154169055565b6040516001600160a01b0390911681529081906020820190565b0390a1005b61052c61137c6109d3846001600160a01b03166000526000602052604060002090565b604051633103525b60e21b81526001600160a01b039384166004820152908316602482015292909116604483015281906064820190565b60405163cadb248f60e01b81526001600160a01b0383166004820152602490fd5b5060018114611251565b5034610023576020366003190112610023576100216004356113ff81610267565b611407611931565b611a24565b50346100235760203660031901126100235760043560005260326020526020604060002054604051908152f35b5034610023576000366003190112610023576108c96040516040810181811067ffffffffffffffff8211176114aa575b604052600581527f322e302e300000000000000000000000000000000000000000000000000000006020820152604051918291602083526020830190610c86565b6114b2610575565b611469565b90816020910312610023575190565b506040513d6000823e3d90fd5b6001600160a01b037f0000000000000000000000000000002512019dafb59528b82cb92d3c5d2423ac16301461152b5734337ed05ab44e279ac59e855cb75dc2ae23b200ad994797b6f1f028f96a46ecce02600080a3565b604051633c97166560e21b8152600490fd5b903590601e1981360301821215610023570180359067ffffffffffffffff82116100235760200191813603831361002357565b919060408382031261002357823567ffffffffffffffff81116100235760209161159b918501610631565b92013561064c81610267565b9035601e198236030181121561002357016020813591019167ffffffffffffffff821161002357813603831361002357565b908060209392818452848401376000828201840152601f01601f1916010190565b9291906116ec611657602092604087526116276040880161161a83610278565b6001600160a01b03169052565b8381013560608801526116dc61164060408301836115a7565b9390610160948560808c01526101a08b01916115d9565b916116d361167f61166b60608401846115a7565b603f198d8803810160a08f015296916115d9565b608083013560c08c015260a083013560e08c01528a6101009660c0850135888301526116c361012060e087013581850152610140998701358a8501528601866115a7565b92909188828603019101526115d9565b938101906115a7565b91888403016101808901526115d9565b930152565b806116f95750565b600080808093338219f1503d15610283573d611714816105cf565b9061172260405192836105ad565b8152600060203d92013e565b50634e487b7160e01b600052603260045260246000fd5b9190811015611756575b60051b0190565b61175e61172e565b61174f565b3561064c81610267565b90916117869281101561178a575b60051b81019061153d565b9091565b61179261172e565b61177b565b919060408382031261002357825167ffffffffffffffff81116100235783019080601f83011215610023578151916117ce836105cf565b916117dc60405193846105ad565b83835260208483010111610023576020926117fc91848085019101610c63565b92015161064c81610267565b90816020910312610023575161064c8161044f565b60409061064c939281528160208201520190610c86565b906118489060208082518301019101611797565b90916001600160a01b03809216916118766109d3846001600160a01b03166000526000602052604060002090565b16156118ec57916020916118a093604051809581948293630b135d3f60e11b84526004840161181d565b03915afa9081156118df575b6000916118b7575090565b61064c915060203d81116118d8575b6118d081836105ad565b810190611808565b503d6118c6565b6118e76114c6565b6118ac565b6040516326cc3fab60e21b81526001600160a01b0383166004820152602490fd5b916000928392602083519301915af1604051903d6000833e1561192d5750565b3d90fd5b6001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27891633141580611982575b61196a57565b604051634776242160e01b8152336004820152602490fd5b5030331415611964565b6001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27891633036119be57565b60405163e6fce6a560e01b8152336004820152602490fd5b507f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d4548015610021576000808092368280373360601b3652818060143601925af13d82803e1561192d573d90f35b6001600160a01b03808216918215611a84577f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d49081549155167f06be9a1bea257286cf2afa8205ed494ca9d6a4b41aa58d04238deebada20fb0c600080a3565b60405163dd449f5f60e01b8152600490fd5b60209067ffffffffffffffff8111611aaf5760051b0190565b61175e610575565b6020918151811015611acc575b60051b010190565b611ad461172e565b611ac4565b6000198114611ae85760010190565b634e487b7160e01b600052601160045260246000fd5b611b1690602060405192828480945193849201610c63565b810103902090565b906002821015611b2b5752565b634e487b7160e01b600052602160045260246000fd5b60209093929193611b56816040810196611b1e565b0152565b9493929091946002821015611b2b5760018203611c05576000808751602089018488f4955b8615611bcf577f81d12fffced46c214dfae8ab8fa0b9f7b69f70c9d500e33f612f2105deb261ee91611bca611bbb6001600160a01b0393611afe565b96604051938493169583611b41565b0390a4565b7f3ddd038f78c876172d5dbfd730b14c9f8692dfa197ef104eaac6df3f85a0874a91611bca611bbb6001600160a01b0393611afe565b600080875160208901868589f195611b7f565b3561064c816106a1565b9497969391929795909560009887158015611d5e575b8015611d54575b8015611d4a575b611d1b576001978833148015611ceb575b6107335797969594939291906000985b808a10611c7a5750505050505050505050565b9091929394959697899b50611cdb888888611cd589869f8f81611cc0818e611cb98f968f97611cb36103e483611ccd9b611cc89b611745565b9c611745565b359861176d565b989094611745565b611c18565b9436916105fa565b91611eab565b9b01989796959493929190611c67565b506001600160a01b03611d146109d3336001600160a01b03166000526000602052604060002090565b1615611c57565b60405163470c355760e01b81526004810189905260248101919091526044810182905260648101869052608490fd5b5085821415611c46565b5081811415611c3f565b5080881415611c38565b6001600160a01b0381168015908115611ea0575b50611e7d57611da46112786109d3836001600160a01b03166000526000602052604060002090565b611e5a57600160009081526020527fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f844090611e5590611e21611e047fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d6109d3565b6112ef836001600160a01b03166000526000602052604060002090565b6001600090815260205261133a817fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d6112ef565b0390a1565b60405163b29d459560e01b81526001600160a01b03919091166004820152602490fd5b60405163cadb248f60e01b81526001600160a01b03919091166004820152602490fd5b600191501438611d7c565b939293611ebb5a86858585611b5a565b948515611f4e57611f23611f187f8c014e41cffd68ba64f3e7830b8b2e4ee860509d8deab25ebbcbba2f0405e2da956001600160a01b0395604051968796338852166020870152604086015260a0606086015260a0850190610c86565b916080840190611b1e565b0390a1337f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb8600080a2565b50505050337facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd375600080a2565b6001600160a01b03811615611fab5781600092918360208194519301915af1604051903d6000833e1561192d575190565b60405162461bcd60e51b815260206004820152601a60248201527f57726f6e67204d6f64756c6520536574757020416464726573730000000000006044820152606490fdfea26469706673582212205e35c32c65281399d0271586e25905b496a0e4ccfd6e3ff9ffae2c43380c16ac64736f6c63430008110033",
  },
  MinimalHandler: {
    address: "0x0bBa6d96BD616BedC6BFaa341742FD43c60b83C1",
    abi: [],
    bytecode:
      "0x60806040908082526004918236101561001757600080fd5b600091823560e01c90816223de291461031b57816301ffc9a71461029457508063150b7a021461023d578063a3f4df7e146101d6578063bc197c811461014c578063f23a6e61146100f25763ffa1ad741461007157600080fd5b346100ee57816003193601126100ee578051918183019083821067ffffffffffffffff8311176100db57506100d793508152600582527f312e302e300000000000000000000000000000000000000000000000000000006020830152519182918261041a565b0390f35b634e487b7160e01b815260418552602490fd5b5080fd5b5090346101495760a03660031901126101495761010d6103a1565b506101166103c9565b506084359067ffffffffffffffff8211610149575060209261013a913691016103ec565b50505163f23a6e6160e01b8152f35b80fd5b5090346101495760a0366003190112610149576101676103a1565b506101706103c9565b5067ffffffffffffffff906044358281116100ee576101929036908601610463565b50506064358281116100ee576101ab9036908601610463565b505060843591821161014957506020926101c7913691016103ec565b50505163bc197c8160e01b8152f35b50346100ee57816003193601126100ee578051918183019083821067ffffffffffffffff8311176100db57506100d793508152601882527f44656661756c742043616c6c6261636b2048616e646c657200000000000000006020830152519182918261041a565b509034610149576080366003190112610149576102586103a1565b506102616103c9565b506064359067ffffffffffffffff82116101495750602092610285913691016103ec565b505051630a85bd0160e11b8152f35b83908534610317576020366003190112610317573563ffffffff60e01b81168091036103175760209250630271189760e51b8114908115610306575b81156102f6575b81156102e5575b5015158152f35b6301ffc9a760e01b149050836102de565b6223de2960e01b811491506102d7565b630a85bd0160e11b811491506102d0565b8280fd5b8385346100ee5760c03660031901126100ee576103366103a1565b5061033f6103c9565b5060443573ffffffffffffffffffffffffffffffffffffffff8116036100ee5767ffffffffffffffff9060843582811161039d5761038090369083016103ec565b505060a43591821161031757610398913691016103ec565b505080f35b8380fd5b6004359073ffffffffffffffffffffffffffffffffffffffff821682036103c457565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff821682036103c457565b9181601f840112156103c45782359167ffffffffffffffff83116103c457602083818601950101116103c457565b6020808252825181830181905290939260005b82811061044f57505060409293506000838284010152601f8019910116010190565b81810186015184820160400152850161042d565b9181601f840112156103c45782359167ffffffffffffffff83116103c4576020808501948460051b0101116103c45756fea2646970667358221220e22ad453b03efac358b2f092a996c1bf999c6cba4b1e5c7d1e917139d697fca764736f6c63430008110033",
  },
  EcdsaOwnershipRegistryModule: {
    address: "0x0000001c5b32F37F5beA87BDD5374eB2aC54eA8e",
    abi: [
      {
        inputs: [
          {internalType: "address", name: "smartAccount", type: "address"},
        ],
        name: "AlreadyInitedForSmartAccount",
        type: "error",
      },
      {
        inputs: [
          {internalType: "address", name: "smartAccount", type: "address"},
        ],
        name: "NoOwnerRegisteredForSmartAccount",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "account", type: "address"}],
        name: "NotEOA",
        type: "error",
      },
      {inputs: [], name: "WrongSignatureLength", type: "error"},
      {inputs: [], name: "ZeroAddressNotAllowedAsOwner", type: "error"},
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "smartAccount",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "oldOwner",
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
        name: "NAME",
        outputs: [{internalType: "string", name: "", type: "string"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "VERSION",
        outputs: [{internalType: "string", name: "", type: "string"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "smartAccount", type: "address"},
        ],
        name: "getOwner",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "eoaOwner", type: "address"}],
        name: "initForSmartAccount",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes32", name: "dataHash", type: "bytes32"},
          {internalType: "bytes", name: "moduleSignature", type: "bytes"},
        ],
        name: "isValidSignature",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes32", name: "dataHash", type: "bytes32"},
          {internalType: "bytes", name: "moduleSignature", type: "bytes"},
          {internalType: "address", name: "smartAccount", type: "address"},
        ],
        name: "isValidSignatureForAddress",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "owner", type: "address"}],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
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
              {internalType: "uint256", name: "callGasLimit", type: "uint256"},
              {
                internalType: "uint256",
                name: "verificationGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "preVerificationGas",
                type: "uint256",
              },
              {internalType: "uint256", name: "maxFeePerGas", type: "uint256"},
              {
                internalType: "uint256",
                name: "maxPriorityFeePerGas",
                type: "uint256",
              },
              {internalType: "bytes", name: "paymasterAndData", type: "bytes"},
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct UserOperation",
            name: "userOp",
            type: "tuple",
          },
          {internalType: "bytes32", name: "userOpHash", type: "bytes32"},
        ],
        name: "validateUserOp",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
    ],
    bytecode:
      "0x6040608081526004908136101561001557600080fd5b6000803560e01c80631626ba7e146104065780632ede3bc014610384578063715018a614610314578063a3f4df7e146102c1578063f2fde38b1461020b578063f44c339d14610183578063fa5441611461012b578063ffa1ad74146100d45763fff35b721461008357600080fd5b346100cd576003199082823601126100cd5783359167ffffffffffffffff83116100d0576101609083360301126100cd57506020926100c6916024359101610543565b9051908152f35b80fd5b5080fd5b5090346100d057816003193601126100d057610127906100f2610446565b90600582527f302e322e30000000000000000000000000000000000000000000000000000000602083015251918291826104fa565b0390f35b5082346100d05760203660031901126100d0576001600160a01b0383816101506104e4565b16938481528060205220541691821561016d576020838551908152f35b8351633d3fff5360e21b81529182015260249150fd5b5091346102075760603660031901126102075760243567ffffffffffffffff8111610203576101b5903690830161047c565b90604435936001600160a01b03851685036100cd5750926101d991602094356105d8565b90517fffffffff000000000000000000000000000000000000000000000000000000009091168152f35b8380fd5b8280fd5b50919034610207576020366003190112610207576102276104e4565b803b6102a2576001600160a01b0380911692831561029457503384528360205281842054169083208273ffffffffffffffffffffffffffffffffffffffff19825416179055337fc8894f26f396ce8c004245c8b7cd1b92103a6e4302fcbab883987149ac01b7ec8480a480f35b82516307e179e960e31b8152fd5b826001600160a01b0360249351926377817ac360e01b84521690820152fd5b5090346100d057816003193601126100d057610127906102df610446565b90601f82527f4543445341204f776e657273686970205265676973747279204d6f64756c6500602083015251918291826104fa565b50809134610381578160031936011261038157338252816020526001600160a01b03818320541690822073ffffffffffffffffffffffffffffffffffffffff198154169055337fc8894f26f396ce8c004245c8b7cd1b92103a6e4302fcbab883987149ac01b7ec8380a480f35b50fd5b5091346102075760203660031901126102075761039f6104e4565b338452836020526001600160a01b03908184862054166103f05716908115610294575081602093338152808552209073ffffffffffffffffffffffffffffffffffffffff1982541617905551308152f35b8351632c4dfb7d60e21b81523381850152602490fd5b50346100cd57816003193601126100cd576024359067ffffffffffffffff82116100cd575060209261043e6101d9923690830161047c565b3391356105d8565b604051906040820182811067ffffffffffffffff82111761046657604052565b634e487b7160e01b600052604160045260246000fd5b81601f820112156104df5780359067ffffffffffffffff928383116104665760405193601f8401601f19908116603f011685019081118582101761046657604052828452602083830101116104df57816000926020809301838601378301015290565b600080fd5b600435906001600160a01b03821682036104df57565b6020808252825181830181905290939260005b82811061052f57505060409293506000838284010152601f8019910116010190565b81810186015184820160400152850161050d565b610140810135601e19823603018112156104df57810167ffffffffffffffff81358181116104df57602083019080360382136104df578301906040848303126104df57359182116104df576040916020806105a293019185010161047c565b910135916001600160a01b0392838116036104df573591821682036104df576105ca92610616565b6105d357600190565b600090565b906105e39291610616565b61060b577fffffffff0000000000000000000000000000000000000000000000000000000090565b630b135d3f60e11b90565b916001600160a01b038091169160009383855284602052826040862054169384156106c4575060418251106106b2577f19457468657265756d205369676e6564204d6573736167653a0a333200000000855280601c528261068561067d84603c89206107f6565b9190916106dc565b1684146106a8576106999161067d916107f6565b16146106a25790565b50600190565b5050505050600190565b604051632bb1a9c560e11b8152600490fd5b60249060405190633d3fff5360e21b82526004820152fd5b60058110156107e057806106ed5750565b6001810361073a5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b600281036107875760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b60031461079057565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b90604181511460001461082457610820916020820151906060604084015193015160001a9061082e565b9091565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116108ab5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa1561089e5781516001600160a01b038116156106a2579190565b50604051903d90823e3d90fd5b5050505060009060039056fea2646970667358221220d77d1372dac830175d3da0f00a91bc884b7cab72695fa25594e2902bca4a7bd964736f6c63430008110033",
  },
  BatchedSessionRouterModule: {
    address: "0x000008dA71757C0E1D83CE56c823e25Aa49bC058",
    abi: [
      {
        inputs: [],
        name: "EXECUTE_BATCH_OPTIMIZED_SELECTOR",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "EXECUTE_BATCH_SELECTOR",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes32", name: "_dataHash", type: "bytes32"},
          {internalType: "bytes", name: "_signature", type: "bytes"},
        ],
        name: "isValidSignature",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "view",
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
              {internalType: "uint256", name: "callGasLimit", type: "uint256"},
              {
                internalType: "uint256",
                name: "verificationGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "preVerificationGas",
                type: "uint256",
              },
              {internalType: "uint256", name: "maxFeePerGas", type: "uint256"},
              {
                internalType: "uint256",
                name: "maxPriorityFeePerGas",
                type: "uint256",
              },
              {internalType: "bytes", name: "paymasterAndData", type: "bytes"},
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct UserOperation",
            name: "userOp",
            type: "tuple",
          },
          {internalType: "bytes32", name: "userOpHash", type: "bytes32"},
        ],
        name: "validateUserOp",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    bytecode:
      "0x604060808152600436101561001357600080fd5b600090813560e01c80631626ba7e146100dd5780631aeaaf4f146100bc578063b13b90f11461009e5763fff35b721461004b57600080fd5b3461009a57600319918183360112610097576004359267ffffffffffffffff841161009a57610160908436030112610097575061009060209260243590600401610302565b9051908152f35b80fd5b5080fd5b503461009a578160031936011261009a5751608d60e71b8152602090f35b503461009a578160031936011261009a57516323f0ed1560e11b8152602090f35b503461009a578060031936011261009a576024359167ffffffffffffffff83116100975750610112602092369060040161018d565b50517fffffffff000000000000000000000000000000000000000000000000000000008152f35b90601f8019910116810190811067ffffffffffffffff82111761015b57604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161015b57601f01601f191660200190565b81601f820112156101d4578035906101a482610171565b926101b26040519485610139565b828452602083830101116101d457816000926020809301838601378301015290565b600080fd5b903590601e19813603018212156101d4570180359067ffffffffffffffff82116101d4576020019181360383136101d457565b67ffffffffffffffff811161015b5760051b60200190565b519065ffffffffffff821682036101d457565b51906001600160a01b03821682036101d457565b60005b83811061025e5750506000910152565b818101518382015260200161024e565b81601f820112156101d457805161028481610171565b926102926040519485610139565b818452602082840101116101d4576102b0916020808501910161024b565b90565b80518210156102c75760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b906020916102f68151809281855285808601910161024b565b601f01601f1916010190565b61030f60608201826101d9565b6004116101d4577fffffffff00000000000000000000000000000000000000000000000000000000903516608d60e71b8114908115610ca0575b5015610c5b5761035d6101408201826101d9565b819291016040838203126101d457823567ffffffffffffffff81116101d45760209161038a91850161018d565b9201356001600160a01b038116036101d45781518201916060818403126101d4576020810151926001600160a01b03841684036101d45760408201519167ffffffffffffffff83116101d45760208201603f8483010112156101d457602083820101516103f68161020c565b936104046040519586610139565b818552602085016020850160408460051b8487010101116101d457604082850101905b60408460051b84870101018210610a9e575050505060608101519167ffffffffffffffff83116101d45761046292602080920192010161026e565b9360405194602086019182526bffffffffffffffffffffffff198560601b16604087015260348652606086019186831067ffffffffffffffff84111761015b576104e9966104e1936040525190207f19457468657265756d205369676e6564204d6573736167653a0a333200000000600052601c52603c600020610dcb565b949094610cb1565b65ffffffffffff9360009361050160608501856101d9565b9190826004116101d4576060600319828581010301126101d45760048101359267ffffffffffffffff84116101d45780820160238584010112156101d45760048483010135936105508561020c565b9461055e6040519687610139565b808652602086019183850160248360051b8388010101116101d45791602483860101925b60248360051b82880101018410610a77575050505060248201359067ffffffffffffffff82116101d45780830160238385010112156101d457600482840101356105cb8161020c565b926105d96040519485610139565b818452602084019083860160248460051b8389010101116101d45790602482870101915b60248460051b82890101018310610a62575050505060448301359067ffffffffffffffff82116101d45780840160238386010112156101d45760048285010135906106478261020c565b946106556040519687610139565b828652602086019082810160248560051b8784010101116101d457602485820101915b60248560051b87840101018310610a2c5750505050505085519660005b8881106106ef575050505050505050507fffffffffffff000000000000000000000000000000000000000000000000000079ffffffffffff00000000000000000000000000000000000000009160d01b169160a01b161790565b81356001600160a01b03811681036101d45765ffffffffffff610712838b6102b3565b51511665ffffffffffff6020610728858d6102b3565b51015116908a6001600160a01b03604061074287846102b3565b51015116608061076187606061075882876102b3565b510151946102b3565b510151936001600160a01b038b163b156101d457906107bc92916001600160a01b03969594604051978897635898a97760e11b895216600488015260248701526044860152606485015260c0608485015260c48401906102dd565b6003198382030160a4840152602080835192838152019201906000905b808210610a105750505090806000920381836001600160a01b038b165af180156109ec576109f8575b5061089a6020896001600160a01b03604061081d86846102b3565b510151166001600160a01b03610833868c6102b3565b51166000610841878a6102b3565b51916108be610850898d6102b3565b51956108ac60a06108678c606061075882876102b3565b510151916040519a8b998a98899763c20bccb960e01b89526004890152602488015260a0604488015260a48701906102dd565b858103600319016064870152906102dd565b838103600319016084850152906102dd565b03925af180156109ec576000906109ac575b6001600160a01b039150166001600160a01b0388160361099c5765ffffffffffff6108fb828a6102b3565b515116151580610978575b61095c575b65ffffffffffff602061091e838b6102b3565b5101511665ffffffffffff8b1610610939575b600101610695565b9850600165ffffffffffff60206109508c8b6102b3565b51015116999050610931565b995065ffffffffffff61096f8b896102b3565b5151169961090b565b5065ffffffffffff61098a828a6102b3565b51511665ffffffffffff8c1611610906565b5050505050505050505050600190565b506020813d6020116109e4575b816109c660209383610139565b810103126101d4576109df6001600160a01b0391610237565b6108d0565b3d91506109b9565b6040513d6000823e3d90fd5b67ffffffffffffffff811161015b5760405238610802565b91935091602080600192865181520194019201849392916107d9565b67ffffffffffffffff8335116101d457602080602492610a558786018588358c8901010161018d565b8152019301929050610678565b602080602493853581520193019291506105fd565b6001600160a01b038435168435036101d45760208060249386358152019401939150610582565b815167ffffffffffffffff81116101d45760c086850182018803601f1901126101d457604051918260c081011067ffffffffffffffff60c085011117610c465760c08301604052610af5604083878a010101610224565b8352610b07606083878a010101610224565b6020840152610b1c608083878a010101610237565b604084015260a08286890101015167ffffffffffffffff81116101d457610b5090604060208b019185898c0101010161026e565b606084015260c08286890101015167ffffffffffffffff81116101d45760208901605f8285898c0101010112156101d45760408184888b0101010151610b958161020c565b91610ba36040519384610139565b818352602083019060208c0160608c83898d8860051b930101010101116101d457606081878b8e01010101915b60608c83898d8860051b9301010101018310610c365750505050608084015260e0828689010101519067ffffffffffffffff82116101d457604093610c2489866020969587968b8f8901940101010161026e565b60a08201528152019201919050610427565b8251815260209283019201610bd0565b60246000634e487b7160e01b81526041600452fd5b60405162461bcd60e51b815260206004820152601360248201527f535220496e76616c69642053656c6563746f72000000000000000000000000006044820152606490fd5b6323f0ed1560e11b14905038610349565b6005811015610db55780610cc25750565b60018103610d0f5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b60028103610d5c5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b600314610d6557565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b906041815114600014610df957610df5916020820151906060604084015193015160001a90610e03565b9091565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311610e865791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15610e795781516001600160a01b03811615610e73579190565b50600190565b50604051903d90823e3d90fd5b5050505060009060039056fea2646970667358221220ecad82d1d0487d682e0a0af413eea027f73b1ec13b9da0cab14b97ad77e1a5a164736f6c63430008110033",
  },
  SessionKeyManager: {
    address: "0x000002FbFfedd9B33F4E7156F2DE8D48945E7489",
    abi: [
      {
        inputs: [
          {internalType: "address", name: "smartAccount", type: "address"},
        ],
        name: "getSessionKeys",
        outputs: [
          {
            components: [
              {internalType: "bytes32", name: "merkleRoot", type: "bytes32"},
            ],
            internalType: "struct SessionStorage",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes32", name: "_dataHash", type: "bytes32"},
          {internalType: "bytes", name: "_signature", type: "bytes"},
        ],
        name: "isValidSignature",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes32", name: "_merkleRoot", type: "bytes32"},
        ],
        name: "setMerkleRoot",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "smartAccount", type: "address"},
          {internalType: "uint48", name: "validUntil", type: "uint48"},
          {internalType: "uint48", name: "validAfter", type: "uint48"},
          {
            internalType: "address",
            name: "sessionValidationModule",
            type: "address",
          },
          {internalType: "bytes", name: "sessionKeyData", type: "bytes"},
          {internalType: "bytes32[]", name: "merkleProof", type: "bytes32[]"},
        ],
        name: "validateSessionKey",
        outputs: [],
        stateMutability: "nonpayable",
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
              {internalType: "uint256", name: "callGasLimit", type: "uint256"},
              {
                internalType: "uint256",
                name: "verificationGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "preVerificationGas",
                type: "uint256",
              },
              {internalType: "uint256", name: "maxFeePerGas", type: "uint256"},
              {
                internalType: "uint256",
                name: "maxPriorityFeePerGas",
                type: "uint256",
              },
              {internalType: "bytes", name: "paymasterAndData", type: "bytes"},
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct UserOperation",
            name: "userOp",
            type: "tuple",
          },
          {internalType: "bytes32", name: "userOpHash", type: "bytes32"},
        ],
        name: "validateUserOp",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    bytecode:
      "0x6080604052600436101561001257600080fd5b60003560e01c80631626ba7e146105d35780637cb64759146105ab578063b13152ee146104c7578063fde5354d1461046e5763fff35b721461005357600080fd5b346104405760403660031901126104405767ffffffffffffffff6004351161044057600435360361016060031982011261044057600435610144013590602219018112156104405760043501600481013567ffffffffffffffff811161044057602482019080360382136104405782019060408383031261044057359067ffffffffffffffff8211610440576044916024806100f39301918501016106a0565b9101356001600160a01b03811603610440578051810160c0828203126104405761011f60208301610715565b61012b60408401610715565b9160608401516001600160a01b038116810361044057608085015167ffffffffffffffff8111610440576101679060208085019188010161074b565b9160a08601519567ffffffffffffffff87116104405760208201603f888301011215610440576020878201015161019d816106fd565b976101ab604051998a610662565b81895260208901906020850160408460051b8387010101116104405790604082850101915b60408460051b82870101018310610459575050505060c08101519167ffffffffffffffff83116104405761020b92602080920192010161074b565b906004803501356001600160a01b03811690036104405761038060006001600160a01b038561024b6103929a6020988488168c8c60043560040135610808565b604051998a96879586936384f16a4d60e01b85526080600486015285600435600401351660848601526024600435013560a48601526103666102ad61029a604460043501600435600401610790565b61016060c48a01526101e48901916107c2565b6103406102db6102c7606460043501600435600401610790565b6083198b8603810160e48d015294916107c2565b61032f61010460846004350135818c01526101249060a46004350135828d015260c460043501356101448d015260e460043501356101648d015260043501356101848c015260043501600435600401610790565b90848b8403016101a48c01526107c2565b9061035661014460043501600435600401610790565b91898403016101c48a01526107c2565b9060243560248701526003198683030160448701526107e3565b838103600319016064850152906107e3565b0393165af1801561044d5760009061040a575b602093506104035760015b60ff79ffffffffffff00000000000000000000000000000000000000007fffffffffffff00000000000000000000000000000000000000000000000000006040519560d01b169360a01b16911617178152f35b60006103b0565b50916020813d602011610445575b8161042560209383610662565b810103126104405751918215158303610440576020926103a5565b600080fd5b3d9150610418565b6040513d6000823e3d90fd5b602080604093855181520193019291506101d0565b34610440576020366003190112610440576001600160a01b0361048f6106e7565b600060405161049d81610630565b5216600052600060205260206040600020604051906104bb82610630565b54809152604051908152f35b346104405760c0366003190112610440576104e06106e7565b65ffffffffffff6024358181168103610440576044359182168203610440576064356001600160a01b03811681036104405767ffffffffffffffff92608435848111610440576105349036906004016106a0565b9260a435948511610440573660238601121561044057846004013595610559876106fd565b956105676040519788610662565b87875260209760248989019160051b8301019136831161044057602401905b82821061059c5750505061059a9650610808565b005b81358152908901908901610586565b3461044057602036600319011261044057336000526000602052600435604060002055600080f35b346104405760403660031901126104405760243567ffffffffffffffff8111610440576106049036906004016106a0565b506040517fffffffff000000000000000000000000000000000000000000000000000000008152602090f35b6020810190811067ffffffffffffffff82111761064c57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761064c57604052565b67ffffffffffffffff811161064c57601f01601f191660200190565b81601f82011215610440578035906106b782610684565b926106c56040519485610662565b8284526020838301011161044057816000926020809301838601378301015290565b600435906001600160a01b038216820361044057565b67ffffffffffffffff811161064c5760051b60200190565b519065ffffffffffff8216820361044057565b60005b83811061073b5750506000910152565b818101518382015260200161072b565b81601f8201121561044057805161076181610684565b9261076f6040519485610662565b818452602082840101116104405761078d9160208085019101610728565b90565b9035601e198236030181121561044057016020813591019167ffffffffffffffff821161044057813603831361044057565b908060209392818452848401376000828201840152601f01601f1916010190565b906020916107fc81518092818552858086019101610728565b601f01601f1916010190565b9490939592916001600160a01b036000961686526020928684526108a160408097818a209a8251948592898401977fffffffffffff0000000000000000000000000000000000000000000000000000809260d01b16895260d01b1660268401526bffffffffffffffffffffffff199060601b16602c830152610892815180928a8686019101610728565b81010386810184520182610662565b5190209554959285935b825185101561090457838560051b84010151908181106000146108f757875283528486205b9360001981146108e357600101936108ab565b634e487b7160e01b87526011600452602487fd5b90875283528486206108d0565b9295509592505003610914575050565b60649250519062461bcd60e51b82526004820152601260248201527f53657373696f6e4e6f74417070726f76656400000000000000000000000000006044820152fdfea26469706673582212206e319ba0cd2074c2476c54765e486d5e38b9906f13ca047f6aeaa0c8561fa33164736f6c63430008110033",
  },
} as const;
