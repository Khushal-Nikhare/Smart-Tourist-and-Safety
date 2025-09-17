const { expect } = require("chai");

describe("DigitalSafetyID", function () {
  it("Should create a new Digital Safety ID", async function () {
    const DigitalSafetyID = await ethers.getContractFactory("DigitalSafetyID");
    const digitalSafetyID = await DigitalSafetyID.deploy();
    await digitalSafetyID.deployed();

    await digitalSafetyID.createID("Alice", "12345", "Bob");

    const [name, nationalId, emergencyContact] = await digitalSafetyID.getID();
    expect(name).to.equal("Alice");
    expect(nationalId).to.equal("12345");
    expect(emergencyContact).to.equal("Bob");
  });
});
