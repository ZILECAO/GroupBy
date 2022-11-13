export const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "data",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "walletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amountOwed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountPaid",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "familyPlanProvider",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "familyPlanStatus",
		"outputs": [
			{
				"internalType": "enum FamilyPlan.FAMILY_PLAN_STATE",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProvider",
		"outputs": [
			{
				"internalType": "string",
				"name": "provider",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getState",
		"outputs": [
			{
				"internalType": "enum FamilyPlan.FAMILY_PLAN_STATE",
				"name": "state",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "groupID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "haveTheyPaid",
		"outputs": [
			{
				"internalType": "bool",
				"name": "paid",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_familyPlanProvider",
				"type": "string"
			},
			{
				"internalType": "uint256[]",
				"name": "amountOwed",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "emails",
				"type": "string[]"
			},
			{
				"internalType": "uint8",
				"name": "expiration",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "onboard",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paidStatistics",
		"outputs": [
			{
				"internalType": "address payable[]",
				"name": "havePaid",
				"type": "address[]"
			},
			{
				"internalType": "address payable[]",
				"name": "notPaid",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "refundUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdt",
		"outputs": [
			{
				"internalType": "contract ITRC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "walletAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amountOwed",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountPaid",
						"type": "uint256"
					}
				],
				"internalType": "struct FamilyPlan.User[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "userEmails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			}
		],
		"name": "userPay",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userPayments",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "walletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amountOwed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountPaid",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const testABI = [{"inputs":[],"name":"favoriteNumber","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"pure","type":"function"}];