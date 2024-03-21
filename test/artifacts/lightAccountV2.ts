export const LIGHT_ACCOUNT_V2_ARTIFACTS = {
  LightAccountFactory: {
    address: "0x854cf7dccacedae799b4261376aa8e7111fc2d7a",
    abi: [
      {
        inputs: [
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
        inputs: [],
        name: "accountImplementation",
        outputs: [
          {internalType: "contract LightAccount", name: "", type: "address"},
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "owner", type: "address"},
          {internalType: "uint256", name: "salt", type: "uint256"},
        ],
        name: "createAccount",
        outputs: [
          {
            internalType: "contract LightAccount",
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
        name: "getAddress",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
    ],
    bytecode:
      "0x60806040818152600491600436101561001757600080fd5b600092833560e01c91826311464fbe146102f6575081635fbfb9cf146101285750638cb84e181461004757600080fd5b34610124579060209161005936610364565b73ffffffffffffffffffffffffffffffffffffffff92918452845280832081517fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e207683526160098652837f0000000000000000000000002255fb563f40ea41af8d59e98906e09aef85f6d316601e5268603d3d8160223d3973600a52605f6021209083528460605260ff85536035523060601b60015260155260558320926035525191168152f35b5080fd5b919050346102f25761013936610364565b73ffffffffffffffffffffffffffffffffffffffff9391939084865260205282852093858451937fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e20768652616009602052837f0000000000000000000000002255fb563f40ea41af8d59e98906e09aef85f6d316601e5268603d3d8160223d3973600a52605f96602197605f60212060358801523060581b875260ff87538160158801526055872098893b156102d0575050505050816001955b8486528760605216941561022f575b6020858551908152f35b843b156102cc577fc4d66de8000000000000000000000000000000000000000000000000000000008352166004820152838160248183875af180156102c25761027a575b8080610225565b67ffffffffffffffff81116102955760209350815238610273565b6024847f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b82513d86823e3d90fd5b8580fd5b90919293985089f59081156102e757508290610216565b63301164258852601cfd5b8280fd5b84903461012457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101245760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000002255fb563f40ea41af8d59e98906e09aef85f6d3168152f35b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60409101126103b55760043573ffffffffffffffffffffffffffffffffffffffff811681036103b5579060243590565b600080fdfea264697066735822122076ddbfe75bcfa9bed43d7d67814960cf4ebbb1eb3c0d461028ac0f150380b42664736f6c63430008170033",
  },
  LightAccount: {
    address: "0x2255FB563f40ea41aF8d59E98906E09aEF85f6D3",
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
      {inputs: [], name: "UnauthorizedCallContext", type: "error"},
      {inputs: [], name: "UpgradeFailed", type: "error"},
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
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        name: "LightAccountInitialized",
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
        inputs: [],
        name: "getNonce",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "owner_", type: "address"}],
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
        outputs: [{internalType: "bytes4", name: "result", type: "bytes4"}],
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
        name: "owner",
        outputs: [{internalType: "address", name: "", type: "address"}],
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
        inputs: [{internalType: "address", name: "newOwner", type: "address"}],
        name: "transferOwnership",
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
      "0x6080604081815260049081361015610022575b505050361561002057600080fd5b005b600092833560e01c90816301ffc9a71461140a57508063150b7a021461137c5780631626ba7e1461114957806318dfb3c71461107257806319822f7c14610f2957806347e1da2a14610e055780634a58db1914610d4e578381634d44560d14610c61575080634f1ef28614610b1657806352d1902d14610a8a57806384b0196e146109585780638da5cb5b146108e6578063b0d691fe14610877578063b61d27f6146107f8578063bc197c8114610737578063c399ec8814610686578063c4d66de8146103ea578063d087d288146102e9578063f23a6e61146102585763f2fde38b0361001257346102545760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610254576101406114f8565b9161014961188f565b73ffffffffffffffffffffffffffffffffffffffff809316928315801561024b575b61021c577f691ec1a18226d004c07c9f8e5c4a6ff15a7b38db267cf7e3c945aef8be512200918254918216938486146101ed5750507fffffffffffffffffffffffff000000000000000000000000000000000000000016831790557f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b908560249251917fb20f76e3000000000000000000000000000000000000000000000000000000008352820152fd5b508260249251917fb20f76e3000000000000000000000000000000000000000000000000000000008352820152fd5b5030841461016b565b8280fd5b5082346102e65760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e6576102916114f8565b5061029a61151b565b506084359067ffffffffffffffff82116102e657506020926102be9136910161153e565b5050517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b80fd5b508290346103e657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103e6578051927f35567e1a000000000000000000000000000000000000000000000000000000008452309084015281602484015260208360448173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032165afa9182156103db57916103a1575b6020925051908152f35b90506020823d6020116103d3575b816103bc60209383611726565b810103126103ce576020915190610397565b600080fd5b3d91506103af565b9051903d90823e3d90fd5b5080fd5b5090346102545760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610254576104236114f8565b917f33e4b41198cc5b8053630ed667ea7c0c4c873f7fc8d9a478b5d7259cec0a4a009182549160ff83821c16159267ffffffffffffffff81168015908161067e575b6001149081610674575b15908161066b575b50610644578360017fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000831617865561060f575b5073ffffffffffffffffffffffffffffffffffffffff8095169182156105e1575081907f691ec1a18226d004c07c9f8e5c4a6ff15a7b38db267cf7e3c945aef8be512200827fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905551947f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032167fec6a23b49d2c363d250c9dda15610e835d428207d15ddb36a6c230e37371ddf18780a3847f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a361058b578280f35b7fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d291817fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff6020935416905560018152a138808280f35b8660249251917fb20f76e3000000000000000000000000000000000000000000000000000000008352820152fd5b7fffffffffffffffffffffffffffffffffffffffffffffff0000000000000000001668010000000000000001178455386104aa565b50517ff92ee8a9000000000000000000000000000000000000000000000000000000008152fd5b90501538610477565b303b15915061046f565b859150610465565b508290346103e657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103e6578051927f70a08231000000000000000000000000000000000000000000000000000000008452309084015260208360248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032165afa9182156103db57916103a1576020925051908152f35b5082346102e65760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e6576107706114f8565b5061077961151b565b5067ffffffffffffffff906044358281116103e65761079b903690860161156c565b50506064358281116103e6576107b4903690860161156c565b50506084359182116102e657506020926107d09136910161153e565b5050517fbc197c81000000000000000000000000000000000000000000000000000000008152f35b5050346103e65760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103e6576108316114f8565b6044359167ffffffffffffffff831161087357610857610866916108709436910161153e565b61085f61188f565b36916117a1565b9060243590611977565b80f35b8380fd5b8382346103e657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103e6576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032168152f35b8382346103e657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103e65760209073ffffffffffffffffffffffffffffffffffffffff7f691ec1a18226d004c07c9f8e5c4a6ff15a7b38db267cf7e3c945aef8be51220054169051908152f35b5082346102e657807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e657908051906109958261170a565b600c82526020927f4c696768744163636f756e74000000000000000000000000000000000000000084840152610a428251926109d08461170a565b600193600181527f320000000000000000000000000000000000000000000000000000000000000087820152610a358251967f0f00000000000000000000000000000000000000000000000000000000000000885260e08989015260e088019061159d565b918683039087015261159d565b4660608501523060808501528160a085015283810360c0850152846060519182815201946080925b828110610a775785870386f35b8351875295810195928101928401610a6a565b5082346102e657807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e657307f0000000000000000000000002255fb563f40ea41af8d59e98906e09aef85f6d303610b0a57602082517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b639f03a026915052601cfd5b5090817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261025457610b496114f8565b9160243567ffffffffffffffff8111610c5d57610b69903690840161153e565b919093307f0000000000000000000000002255fb563f40ea41af8d59e98906e09aef85f6d314610c515773ffffffffffffffffffffffffffffffffffffffff90610bb161188f565b16926352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90816020600183601d895afa5103610c45575090828480949388967fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8880a255610c24578380f35b8190519485378338925af415610c3c57818180808380f35b903d90823e3d90fd5b6355299b49600152601dfd5b83639f03a0268752601cfd5b8480fd5b80848434610d4a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610d4a5781359173ffffffffffffffffffffffffffffffffffffffff808416809403610c5d57610cbc61188f565b7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0321692833b15610c5d576044859283855196879485937f205c287800000000000000000000000000000000000000000000000000000000855284015260243560248401525af1908115610d415750610d315750f35b610d3a906116c7565b6102e65780f35b513d84823e3d90fd5b5050fd5b50827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610254578273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0321692833b156103e65760248351809581937fb760faf9000000000000000000000000000000000000000000000000000000008352309083015234905af1908115610d415750610dfc575080f35b610870906116c7565b50346102545760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102545767ffffffffffffffff908235828111610c5d57610e55903690850161156c565b602494919435848111610f2557610e6f903690840161156c565b919094604435908111610f2157610e89903690850161156c565b939094610e9461188f565b848314801590610f17575b610ef1575050865b818110610eb2578780f35b80610eeb610ecb610ec6600194868c6115fb565b61163a565b610ed683878b6115fb565b35610ee561085f858a8c6116ac565b91611977565b01610ea7565b517fa24a13a6000000000000000000000000000000000000000000000000000000008152fd5b5083831415610e9f565b8780fd5b8680fd5b508290346103e6577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc916060833601126102e65783359267ffffffffffffffff84116103e6576101209084360301126102e6576044359273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da03216330361101557602094610fce91602435910161199f565b9280610fdd575b505051908152f35b81808092337ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff15061100d611947565b508380610fd5565b60648560208551917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152fd5b50903461025457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102545767ffffffffffffffff908035828111610c5d576110c2903690830161156c565b9092602435908111611145576110db903690840161156c565b9290946110e661188f565b838303610ef1575050845b8181106110fc578580f35b61110a610ec68284876115fb565b868061111a61085f85888b6116ac565b602093828583519301915af19061112f611947565b911561113f5750506001016110f1565b81519101fd5b8580fd5b50903461025457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102545760243567ffffffffffffffff811161087357926112d17fffffffff00000000000000000000000000000000000000000000000000000000926111c06020963690830161153e565b91829035928751917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0809285010160609283828a376119018952838310876042601e20181715611369575050897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201911102938152878020918682525b8089527fce68fe8aa5758d81cf0aaf22910974c89adc5d61657ebe035fe5a591a1f2996f917f0000000000000000000000002255fb563f40ea41af8d59e98906e09aef85f6d330147f0000000000000000000000000000000000000000000000000000000000014a34461416156112e5575b50506719010000000000008652601a52603a52604260182084603a526117d8565b159003631626ba7e1760e01b915191168152f35b60a092507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527fcbe29a6ace531c23849b5cdb1a6b991866eb7dc20deda15202ba6fd921ed2c008b8301527fad7c5bef027816a800da1736444fb58a807ef4c9603b7848673f7e3a68eb14a58a83015246908201523060808201522038806112b0565b909591019435875289528086209161123e565b5082346102e65760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e6576113b56114f8565b506113be61151b565b506064359067ffffffffffffffff82116102e657506020926113e29136910161153e565b5050517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b849084346102545760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261025457357fffffffff00000000000000000000000000000000000000000000000000000000811680910361025457602092507f150b7a020000000000000000000000000000000000000000000000000000000081149081156114ce575b81156114a4575b5015158152f35b7f01ffc9a7000000000000000000000000000000000000000000000000000000009150148361149d565b7f4e2312e00000000000000000000000000000000000000000000000000000000081149150611496565b6004359073ffffffffffffffffffffffffffffffffffffffff821682036103ce57565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036103ce57565b9181601f840112156103ce5782359167ffffffffffffffff83116103ce57602083818601950101116103ce57565b9181601f840112156103ce5782359167ffffffffffffffff83116103ce576020808501948460051b0101116103ce57565b919082519283825260005b8481106115e75750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016115a8565b919081101561160b5760051b0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b3573ffffffffffffffffffffffffffffffffffffffff811681036103ce5790565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1813603018212156103ce570180359067ffffffffffffffff82116103ce576020019181360383136103ce57565b9082101561160b576116c39160051b81019061165b565b9091565b67ffffffffffffffff81116116db57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff8211176116db57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176116db57604052565b67ffffffffffffffff81116116db57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b9291926117ad82611767565b916117bb6040519384611726565b8294818452818301116103ce578281602093846000960137010152565b909160019081811061188657801561160b5781843560f81c80611838575081106103ce576118359361182f927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff36930191016117a1565b90611bc0565b90565b146118465750505050600090565b8082116103ce5761183593611880927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff36930191016117a1565b90611ac9565b50505050600090565b73ffffffffffffffffffffffffffffffffffffffff807f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da03216331415908161193c575b8161190e575b506118de57565b60246040517f4a0bfec1000000000000000000000000000000000000000000000000000000008152336004820152fd5b90507f691ec1a18226d004c07c9f8e5c4a6ff15a7b38db267cf7e3c945aef8be5122005416331415386118d7565b3330141591506118d1565b3d15611972573d9061195882611767565b916119666040519384611726565b82523d6000602084013e565b606090565b916000928392602083519301915af161198e611947565b90156119975750565b602081519101fd5b61010081016119ae818361165b565b1561160b573560f81c80611a4157506119f4906000937f19457468657265756d205369676e6564204d6573736167653a0a3332000000008552601c52603c84209261165b565b908160011161087357611a33929161182f9160017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff36930191016117a1565b15611a3b5790565b50600190565b600114611a725760046040517f60cd402d000000000000000000000000000000000000000000000000000000008152fd5b611a7b9161165b565b9190826001116103ce57611aba926118809160017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff36930191016117a1565b15611ac457600090565b600190565b906000809173ffffffffffffffffffffffffffffffffffffffff7f691ec1a18226d004c07c9f8e5c4a6ff15a7b38db267cf7e3c945aef8be512200541690604051611b7d81611b5160208201947f1626ba7e00000000000000000000000000000000000000000000000000000000998a8752602484015260406044840152606483019061159d565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282611726565b51915afa90611b8a611947565b82611bb2575b82611b9a57505090565b9091506020818051810103126103ce57602001511490565b915060208251101591611b90565b90611bca91611c4f565b506004811015611c2057159081611bdf575090565b905073ffffffffffffffffffffffffffffffffffffffff807f691ec1a18226d004c07c9f8e5c4a6ff15a7b38db267cf7e3c945aef8be512200541691161490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8151919060418303611c8057611c7992506020820151906060604084015193015160001a90611c8b565b9192909190565b505060009160029190565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611d1c57926020929160ff608095604051948552168484015260408301526060820152600092839182805260015afa15611d1057805173ffffffffffffffffffffffffffffffffffffffff811615611d0757918190565b50809160019190565b604051903d90823e3d90fd5b5050506000916003919056fea264697066735822122022a38c2581cfbc8f1e9c2edb7a06b134b613afc06f84839e8c86449b43d8c1ae64736f6c63430008170033",
  },
} as const;
