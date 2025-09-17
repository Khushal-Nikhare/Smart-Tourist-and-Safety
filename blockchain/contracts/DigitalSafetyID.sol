// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DigitalSafetyID {
    struct Tourist {
        string name;
        string nationalId;
        string emergencyContact;
        bool exists;
    }

    mapping(address => Tourist) public tourists;

    function createID(string memory _name, string memory _nationalId, string memory _emergencyContact) public {
        require(!tourists[msg.sender].exists, "ID already exists");
        tourists[msg.sender] = Tourist(_name, _nationalId, _emergencyContact, true);
    }

    function getID() public view returns (string memory, string memory, string memory) {
        require(tourists[msg.sender].exists, "ID not found");
        Tourist memory tourist = tourists[msg.sender];
        return (tourist.name, tourist.nationalId, tourist.emergencyContact);
    }
}
