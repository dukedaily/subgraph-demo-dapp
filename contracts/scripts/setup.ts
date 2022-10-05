import { ethers } from "hardhat";

async function main() {
  let address = '0x7977787f82c2379A082113354B9d5Ea3310c5265'
  const registry = await ethers.getContractAt("GravatarRegistry", address)

  console.log('address:', registry.address)

  let accounts = await ethers.getSigners()

  await registry.connect(accounts[0]).createGravatar('Carl', 'https://gateway.pinata.cloud/ipfs/QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ')
  await registry.connect(accounts[0]).createGravatar('Lucas', 'https://gateway.pinata.cloud/ipfs/QmcJYkCKK7QPmYWjp4FD2e3Lv5WCGFuHNUByvGKBaytif4')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
