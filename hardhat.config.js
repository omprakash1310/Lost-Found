require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [PRIVATE_KEY], // ✅ No 0x prefix here!
    },
  },
  paths: {
    artifacts: "./frontend/src/artifacts",
  },
};
