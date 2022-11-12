require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

// eslint-disable-next-line no-undef
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  networks: {
    hardhat: {
      chainId: 1337
    },
    //zileNet3 is a local avalanche subnet running on Zile's device
    zileNet3: {
      url: process.env.ZILENET3_RPC_URL || "",
      chainId: 12345,
      accounts: process.env.PRIVATE_KEY_1 !== undefined ? [process.env.PRIVATE_KEY_1] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
};
