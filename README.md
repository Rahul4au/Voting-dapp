# Decentralized Voting Application

This is a demo application to implement voting in solidity smart contract using ReactJS. 

## Installation

After you cloned the repository, you want to install the packages using

```shell
npm install
```

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

## If you are Using ganache-cli for local blockchain deployment
hardhat.config.js
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

```shell
npx hardhat compile 
npx hardhat run --network ganache script/deploy.js
```

Once the contract is uploaded to the blockchain, copy the contract address and copy it in the .env file. You can also use another blockchain by writing the blockchain's endpoint in hardhat-config.

Once you have pasted your private key and contract address in the .env file, simply run command

```shell
npm start
```