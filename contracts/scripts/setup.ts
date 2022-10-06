import { UpdatedGravatar } from './../../generated/Gravity/Gravity';
import { ethers } from "hardhat";

async function main() {
  let address = '0x48d2825f3238db40797dF659C97188d289401311'
  const registry = await ethers.getContractAt("GravatarRegistry", address)

  console.log('address:', registry.address)

  let accounts = await ethers.getSigners()

  await registry.connect(accounts[0]).createGravatar('Carl', 'https://gateway.pinata.cloud/ipfs/QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ')
  await registry.connect(accounts[1]).createGravatar('Lucas', 'https://gateway.pinata.cloud/ipfs/QmcJYkCKK7QPmYWjp4FD2e3Lv5WCGFuHNUByvGKBaytif4')
  // await registry.connect(accounts[0]).updateGravatarName('Lucas');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
