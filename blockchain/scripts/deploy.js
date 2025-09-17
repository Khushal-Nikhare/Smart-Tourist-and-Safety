async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const DigitalSafetyID = await ethers.getContractFactory("DigitalSafetyID");
  const digitalSafetyID = await DigitalSafetyID.deploy();

  console.log("DigitalSafetyID deployed to:", digitalSafetyID.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
