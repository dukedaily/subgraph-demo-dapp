import { ethers } from "hardhat";

async function main() {

  const gRegistry = await ethers.getContractFactory("GravatarRegistry");
  const GRegistry = await gRegistry.deploy();

  await GRegistry.deployed();

  console.log(`new GRegistry deployed to ${GRegistry.address}`);
  console.log('please replace the address before run `setup.ts`');
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
