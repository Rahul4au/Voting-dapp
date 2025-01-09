/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ganache",
  networks: {
    hardhat: {},
    ganache: {
      url: "http://127.0.0.1:7545", // Default Ganache network URL
      accounts: [`0x${PRIVATE_KEY}`], // Your private key here (for deploying)
      gas: 2100000,
      gasPrice: 20000000000, // You can adjust the gas price if necessary
    },
  },
};
