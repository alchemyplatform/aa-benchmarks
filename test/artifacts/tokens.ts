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
} as const;
