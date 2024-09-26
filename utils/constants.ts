import { createThirdwebClient, defineChain, getContract } from "thirdweb";

const  CLIENT_ID = "23acd1cf03411a55493f33b920cdb0f2";

export const client = createThirdwebClient({
  clientId: CLIENT_ID as string,
});

export const Chain = defineChain(11155111);
const contractAddress ="0x6852c6662ab1D2B0FB5D0b003986F5f36F242419";

const contractABI=[
  {
    "inputs": [],
    "name": "USD",
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
    "inputs": [],
    "name": "convertToJYEN",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "convertToRS",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "convertToRUB",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "convertedValue",
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
    "inputs": [],
    "name": "currentConversion",
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
    "name": "getActiveConversion",
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
    "name": "getUSDValue",
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
    "inputs": [],
    "name": "resetToUSD",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
export const CONTRACT = getContract({
  client: client,
  chain: Chain,
  address: contractAddress,
  abi : contractABI,

});