const hre = require("hardhat");

async function main() {
 
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contract with account ==>", deployer.address
  );
  

  const Insurance = await ethers.getContractFactory("Insurance");

  await Insurance.deploy();

  console.log(
    "Insurance contract deployed to ==>", Insurance.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
