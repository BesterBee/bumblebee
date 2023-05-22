require("@nomicfoundation/hardhat-toolbox");

// eslint-disable-next-line no-undef
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
 defaultNetwork: "localhost",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    localhost: {
      chainId: 1337
    }
  },
};
