export const TOKEN_ARTIFACTS = {
  USDC: {
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "amt",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "name_",
            type: "string",
            internalType: "string",
          },
          {
            name: "symbol_",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "allowance",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            internalType: "address",
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
        name: "approve",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "balanceOf",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
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
        name: "decimals",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint8",
            internalType: "uint8",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "mint",
        inputs: [
          {
            name: "rcvr",
            type: "address",
            internalType: "address",
          },
          {
            name: "amt",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
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
        name: "symbol",
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
        name: "totalSupply",
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
        name: "transfer",
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
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "transferFrom",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
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
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        type: "event",
        name: "Approval",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Transfer",
        inputs: [
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "error",
        name: "ERC20InsufficientAllowance",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "allowance",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "needed",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        type: "error",
        name: "ERC20InsufficientBalance",
        inputs: [
          {
            name: "sender",
            type: "address",
            internalType: "address",
          },
          {
            name: "balance",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "needed",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        type: "error",
        name: "ERC20InvalidApprover",
        inputs: [
          {
            name: "approver",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        type: "error",
        name: "ERC20InvalidReceiver",
        inputs: [
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        type: "error",
        name: "ERC20InvalidSender",
        inputs: [
          {
            name: "sender",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        type: "error",
        name: "ERC20InvalidSpender",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        type: "error",
        name: "InvalidShortString",
        inputs: [],
      },
      {
        type: "error",
        name: "StringTooLong",
        inputs: [
          {
            name: "str",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    bytecode:
      "0x608060405234801561001057600080fd5b50600436106100be5760003560e01c806340c10f191161007657806395d89b411161005b57806395d89b4114610181578063a9059cbb14610189578063dd62ed3e1461019c57600080fd5b806340c10f191461013857806370a082311461014b57600080fd5b806318160ddd116100a757806318160ddd1461010457806323b872dd14610116578063313ce5671461012957600080fd5b806306fdde03146100c3578063095ea7b3146100e1575b600080fd5b6100cb6101e2565b6040516100d89190610802565b60405180910390f35b6100f46100ef366004610898565b610212565b60405190151581526020016100d8565b6002545b6040519081526020016100d8565b6100f46101243660046108c2565b61022c565b604051601281526020016100d8565b6100f4610146366004610898565b610250565b6101086101593660046108fe565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100cb610265565b6100f4610197366004610898565b610290565b6101086101aa366004610920565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b606061020d7f000000000000000000000000000000000000000000000000000000000000000061029e565b905090565b6000336102208185856102dd565b60019150505b92915050565b60003361023a8582856102ef565b6102458585856103c3565b506001949350505050565b600061025c838361046e565b50600192915050565b606061020d7f000000000000000000000000000000000000000000000000000000000000000061029e565b6000336102208185856103c3565b606060006102ab836104ce565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6102ea838383600161050f565b505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146103bd57818110156103ae576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260248101829052604481018390526064015b60405180910390fd5b6103bd8484848403600061050f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610413576040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600060048201526024016103a5565b73ffffffffffffffffffffffffffffffffffffffff8216610463576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a5565b6102ea838383610657565b73ffffffffffffffffffffffffffffffffffffffff82166104be576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a5565b6104ca60008383610657565b5050565b600060ff8216601f811115610226576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661055f576040517fe602df05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a5565b73ffffffffffffffffffffffffffffffffffffffff83166105af576040517f94280d62000000000000000000000000000000000000000000000000000000008152600060048201526024016103a5565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020908152604080832093871683529290522082905580156103bd578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161064991815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff831661068f5780600260008282546106849190610953565b909155506107419050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610715576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260248101829052604481018390526064016103a5565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020819052604090209082900390555b73ffffffffffffffffffffffffffffffffffffffff821661076a57600280548290039055610796565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090208054820190555b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516107f591815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b8181101561083057858101830151858201604001528201610814565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461089357600080fd5b919050565b600080604083850312156108ab57600080fd5b6108b48361086f565b946020939093013593505050565b6000806000606084860312156108d757600080fd5b6108e08461086f565b92506108ee6020850161086f565b9150604084013590509250925092565b60006020828403121561091057600080fd5b6109198261086f565b9392505050565b6000806040838503121561093357600080fd5b61093c8361086f565b915061094a6020840161086f565b90509250929050565b80820180821115610226577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea164736f6c6343000817000a",
  },
  USDT: {
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "amt",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "name_",
            type: "string",
            internalType: "string",
          },
          {
            name: "symbol_",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "allowance",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            internalType: "address",
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
        name: "approve",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "balanceOf",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
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
        name: "decimals",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint8",
            internalType: "uint8",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "mint",
        inputs: [
          {
            name: "rcvr",
            type: "address",
            internalType: "address",
          },
          {
            name: "amt",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
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
        name: "symbol",
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
        name: "totalSupply",
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
        name: "transfer",
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
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "transferFrom",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
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
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        type: "event",
        name: "Approval",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Transfer",
        inputs: [
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "error",
        name: "ERC20InsufficientAllowance",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "allowance",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "needed",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        type: "error",
        name: "ERC20InsufficientBalance",
        inputs: [
          {
            name: "sender",
            type: "address",
            internalType: "address",
          },
          {
            name: "balance",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "needed",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        type: "error",
        name: "ERC20InvalidApprover",
        inputs: [
          {
            name: "approver",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        type: "error",
        name: "ERC20InvalidReceiver",
        inputs: [
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        type: "error",
        name: "ERC20InvalidSender",
        inputs: [
          {
            name: "sender",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        type: "error",
        name: "ERC20InvalidSpender",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        type: "error",
        name: "InvalidShortString",
        inputs: [],
      },
      {
        type: "error",
        name: "StringTooLong",
        inputs: [
          {
            name: "str",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    bytecode:
      "0x608060405234801561001057600080fd5b50600436106100be5760003560e01c806340c10f191161007657806395d89b411161005b57806395d89b4114610181578063a9059cbb14610189578063dd62ed3e1461019c57600080fd5b806340c10f191461013857806370a082311461014b57600080fd5b806318160ddd116100a757806318160ddd1461010457806323b872dd14610116578063313ce5671461012957600080fd5b806306fdde03146100c3578063095ea7b3146100e1575b600080fd5b6100cb6101e2565b6040516100d89190610802565b60405180910390f35b6100f46100ef366004610898565b610212565b60405190151581526020016100d8565b6002545b6040519081526020016100d8565b6100f46101243660046108c2565b61022c565b604051601281526020016100d8565b6100f4610146366004610898565b610250565b6101086101593660046108fe565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100cb610265565b6100f4610197366004610898565b610290565b6101086101aa366004610920565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b606061020d7f000000000000000000000000000000000000000000000000000000000000000061029e565b905090565b6000336102208185856102dd565b60019150505b92915050565b60003361023a8582856102ef565b6102458585856103c3565b506001949350505050565b600061025c838361046e565b50600192915050565b606061020d7f000000000000000000000000000000000000000000000000000000000000000061029e565b6000336102208185856103c3565b606060006102ab836104ce565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6102ea838383600161050f565b505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146103bd57818110156103ae576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260248101829052604481018390526064015b60405180910390fd5b6103bd8484848403600061050f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610413576040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600060048201526024016103a5565b73ffffffffffffffffffffffffffffffffffffffff8216610463576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a5565b6102ea838383610657565b73ffffffffffffffffffffffffffffffffffffffff82166104be576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a5565b6104ca60008383610657565b5050565b600060ff8216601f811115610226576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661055f576040517fe602df05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a5565b73ffffffffffffffffffffffffffffffffffffffff83166105af576040517f94280d62000000000000000000000000000000000000000000000000000000008152600060048201526024016103a5565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020908152604080832093871683529290522082905580156103bd578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161064991815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff831661068f5780600260008282546106849190610953565b909155506107419050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610715576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260248101829052604481018390526064016103a5565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020819052604090209082900390555b73ffffffffffffffffffffffffffffffffffffffff821661076a57600280548290039055610796565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090208054820190555b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516107f591815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b8181101561083057858101830151858201604001528201610814565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461089357600080fd5b919050565b600080604083850312156108ab57600080fd5b6108b48361086f565b946020939093013593505050565b6000806000606084860312156108d757600080fd5b6108e08461086f565b92506108ee6020850161086f565b9150604084013590509250925092565b60006020828403121561091057600080fd5b6109198261086f565b9392505050565b6000806040838503121561093357600080fd5b61093c8361086f565b915061094a6020840161086f565b90509250929050565b80820180821115610226577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea164736f6c6343000817000a",
  },
  NFT: {
    address: "0x1234567890123456789012345678901234567890",
    abi: [
      {type: "constructor", inputs: [], stateMutability: "nonpayable"},
      {
        type: "function",
        name: "approve",
        inputs: [
          {name: "to", type: "address", internalType: "address"},
          {name: "tokenId", type: "uint256", internalType: "uint256"},
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "balanceOf",
        inputs: [{name: "owner", type: "address", internalType: "address"}],
        outputs: [{name: "", type: "uint256", internalType: "uint256"}],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getApproved",
        inputs: [{name: "tokenId", type: "uint256", internalType: "uint256"}],
        outputs: [{name: "", type: "address", internalType: "address"}],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "isApprovedForAll",
        inputs: [
          {name: "owner", type: "address", internalType: "address"},
          {name: "operator", type: "address", internalType: "address"},
        ],
        outputs: [{name: "", type: "bool", internalType: "bool"}],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "mint",
        inputs: [
          {name: "to", type: "address", internalType: "address"},
          {name: "tokenId", type: "uint256", internalType: "uint256"},
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [{name: "", type: "string", internalType: "string"}],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "ownerOf",
        inputs: [{name: "tokenId", type: "uint256", internalType: "uint256"}],
        outputs: [{name: "", type: "address", internalType: "address"}],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
          {name: "from", type: "address", internalType: "address"},
          {name: "to", type: "address", internalType: "address"},
          {name: "tokenId", type: "uint256", internalType: "uint256"},
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
          {name: "from", type: "address", internalType: "address"},
          {name: "to", type: "address", internalType: "address"},
          {name: "tokenId", type: "uint256", internalType: "uint256"},
          {name: "data", type: "bytes", internalType: "bytes"},
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setApprovalForAll",
        inputs: [
          {name: "operator", type: "address", internalType: "address"},
          {name: "approved", type: "bool", internalType: "bool"},
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "supportsInterface",
        inputs: [{name: "interfaceId", type: "bytes4", internalType: "bytes4"}],
        outputs: [{name: "", type: "bool", internalType: "bool"}],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "symbol",
        inputs: [],
        outputs: [{name: "", type: "string", internalType: "string"}],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "tokenURI",
        inputs: [{name: "tokenId", type: "uint256", internalType: "uint256"}],
        outputs: [{name: "", type: "string", internalType: "string"}],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "transferFrom",
        inputs: [
          {name: "from", type: "address", internalType: "address"},
          {name: "to", type: "address", internalType: "address"},
          {name: "tokenId", type: "uint256", internalType: "uint256"},
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "event",
        name: "Approval",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "approved",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "ApprovalForAll",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "approved",
            type: "bool",
            indexed: false,
            internalType: "bool",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Transfer",
        inputs: [
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {name: "to", type: "address", indexed: true, internalType: "address"},
          {
            name: "tokenId",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "error",
        name: "ERC721IncorrectOwner",
        inputs: [
          {name: "sender", type: "address", internalType: "address"},
          {name: "tokenId", type: "uint256", internalType: "uint256"},
          {name: "owner", type: "address", internalType: "address"},
        ],
      },
      {
        type: "error",
        name: "ERC721InsufficientApproval",
        inputs: [
          {name: "operator", type: "address", internalType: "address"},
          {name: "tokenId", type: "uint256", internalType: "uint256"},
        ],
      },
      {
        type: "error",
        name: "ERC721InvalidApprover",
        inputs: [{name: "approver", type: "address", internalType: "address"}],
      },
      {
        type: "error",
        name: "ERC721InvalidOperator",
        inputs: [{name: "operator", type: "address", internalType: "address"}],
      },
      {
        type: "error",
        name: "ERC721InvalidOwner",
        inputs: [{name: "owner", type: "address", internalType: "address"}],
      },
      {
        type: "error",
        name: "ERC721InvalidReceiver",
        inputs: [{name: "receiver", type: "address", internalType: "address"}],
      },
      {
        type: "error",
        name: "ERC721InvalidSender",
        inputs: [{name: "sender", type: "address", internalType: "address"}],
      },
      {
        type: "error",
        name: "ERC721NonexistentToken",
        inputs: [{name: "tokenId", type: "uint256", internalType: "uint256"}],
      },
    ],
    bytecode:
      "0x6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a7146107455750806306fdde031461068d578063081812fc14610651578063095ea7b31461056757806323b872dd1461055057806340c10f191461044657806342842e0e1461041d5780636352211e146103ed57806370a082311461039c57806395d89b4114610294578063a22cb465146101f9578063b88d4fde1461016f578063c87b56dd146101125763e985e9c5146100b8575f80fd5b3461010f57604036600319011261010f5760406100d36107d4565b916100dc6107ea565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b80fd5b3461016b57602036600319011261016b5761012e600435610b59565b505f60405161013e60208261083a565b5261016760405161015060208261083a565b5f81526040519182916020835260208301906107b0565b0390f35b5f80fd5b3461016b57608036600319011261016b576101886107d4565b6101906107ea565b6064359167ffffffffffffffff831161016b573660238401121561016b578260040135916101bd83610870565b926101cb604051948561083a565b808452366024828701011161016b576020815f9260246101f79801838801378501015260443591610a19565b005b3461016b57604036600319011261016b576102126107d4565b6024359081151580920361016b576001600160a01b031690811561028157335f52600560205260405f20825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b50630b61174360e31b5f5260045260245ffd5b3461016b575f36600319011261016b576040515f6001548060011c90600181168015610392575b60208310811461037e5782855290811561035a57506001146102fc575b610167836102e88185038261083a565b6040519182916020835260208301906107b0565b91905060015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6915f905b808210610340575090915081016020016102e86102d8565b919260018160209254838588010152019101909291610328565b60ff191660208086019190915291151560051b840190910191506102e890506102d8565b634e487b7160e01b5f52602260045260245ffd5b91607f16916102bb565b3461016b57602036600319011261016b576001600160a01b036103bd6107d4565b1680156103da575f526003602052602060405f2054604051908152f35b6322718ad960e21b5f525f60045260245ffd5b3461016b57602036600319011261016b57602061040b600435610b59565b6040516001600160a01b039091168152f35b3461016b576101f761042e36610800565b906040519261043e60208561083a565b5f8452610a19565b3461016b57604036600319011261016b5761045f6107d4565b6001600160a01b0316602435811561053d575f818152600260205260409020546001600160a01b0316801515929091908361050a575b805f52600360205260405f2060018154019055815f52600260205260405f20816bffffffffffffffffffffffff60a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a4506104f757005b6339e3563760e11b5f525f60045260245ffd5b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f198154019055610495565b633250574960e11b5f525f60045260245ffd5b3461016b576101f761056136610800565b9161088c565b3461016b57604036600319011261016b576105806107d4565b60243561058c81610b59565b3315158061063e575b80610611575b6105fe5781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff161561059b565b506001600160a01b038116331415610595565b3461016b57602036600319011261016b5760043561066e81610b59565b505f526004602052602060018060a01b0360405f205416604051908152f35b3461016b575f36600319011261016b576040515f5f548060011c9060018116801561073b575b60208310811461037e5782855290811561035a57506001146106df57610167836102e88185038261083a565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b808210610721575090915081016020016102e86102d8565b919260018160209254838588010152019101909291610709565b91607f16916106b3565b3461016b57602036600319011261016b576004359063ffffffff60e01b821680920361016b576020916380ac58cd60e01b811490811561079f575b811561078e575b5015158152f35b6301ffc9a760e01b14905083610787565b635b5e139f60e01b81149150610780565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361016b57565b602435906001600160a01b038216820361016b57565b606090600319011261016b576004356001600160a01b038116810361016b57906024356001600160a01b038116810361016b579060443590565b90601f8019910116810190811067ffffffffffffffff82111761085c57604052565b634e487b7160e01b5f52604160045260245ffd5b67ffffffffffffffff811161085c57601f01601f191660200190565b6001600160a01b039091169190821561053d575f828152600260205260409020546001600160a01b031692829033151580610984575b5084610951575b805f52600360205260405f2060018154019055815f52600260205260405f20816bffffffffffffffffffffffff60a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b031680830361093957505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f1981540190556108c9565b909150806109c8575b1561099a5782905f6108c2565b82846109b257637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b5033841480156109f7575b8061098d57505f838152600460205260409020546001600160a01b0316331461098d565b505f84815260056020908152604080832033845290915290205460ff166109d3565b9291610a2681838661088c565b813b610a33575b50505050565b604051630a85bd0160e11b81523360048201526001600160a01b0394851660248201526044810191909152608060648201529216919060209082908190610a7e9060848301906107b0565b03815f865af15f9181610b14575b50610ae157503d15610ada573d610aa281610870565b90610ab0604051928361083a565b81523d5f602083013e5b80519081610ad55782633250574960e11b5f5260045260245ffd5b602001fd5b6060610aba565b6001600160e01b03191663757a42ff60e11b01610b0257505f808080610a2d565b633250574960e11b5f5260045260245ffd5b9091506020813d602011610b51575b81610b306020938361083a565b8101031261016b57516001600160e01b03198116810361016b57905f610a8c565b3d9150610b23565b5f818152600260205260409020546001600160a01b0316908115610b7b575090565b637e27328960e01b5f5260045260245ffdfea264697066735822122078cccbfc64fb3a50ac8ff34f8fc89032eea11c0ed20849591ef7bbee50162bf864736f6c634300081c0033",
  },
} as const;
