const hre = require("hardhat");

const CONTRACT_ADDRESS = "0x91Fb63bBe14251d9DC49399D434497b8d528631b";

async function main() {
  const contract = await hre.ethers.getContractAT("Contract", CONTRACT_ADDRESS);

  await contract.deployed();

  console.log(await contract.x());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
