import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

const privateKeys = process.env.WALLET_KEY ? [process.env.WALLET_KEY] : []

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  gasReporter: {
    enabled: true
  },
  networks: {
    sepolia: { // Chain ID 11155111
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: privateKeys
    },
    mainnet: { // Chain ID 1
      url: "https://ethereum-rpc.publicnode.com",
      accounts: privateKeys
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  sourcify: {
    enabled: true
  }
};

export default config;
