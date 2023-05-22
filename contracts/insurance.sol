// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Insurance {
    address public insurer;
    
    // Policy details
    string public policyName;
    string public filehash;
    uint256 public coverageAmount;
    uint256 public premiumAmount;
    uint256 public policyDuration;




    struct Policy{
        string policyID;
        string  policyName;
        string filehash;
        uint256 coverageAmount;
        uint256 premiumAmount;
        uint256 policyDuration;
    }
    
    // Claim details
    struct Claim {
        uint256 amount;
        string description;
        bool accepted;
        bool exists;
        string fileHash;
    }
    
    mapping(address => bool) public subscribed;
    mapping(address => Claim[]) public claims;
    mapping(address => Policy[]) public policies;
    
    constructor() {

        insurer = msg.sender;

    }
    
    function makePolicy(string memory _policyID, string memory _policyName, string memory _filehash, uint256 _coverageAmount, uint256 _premiumAmount, uint256 _policyDuration) public{
        require( msg.sender == insurer, "Only Insurer can make Policies");
        policies[msg.sender].push(Policy( _policyID, _policyName, _filehash, _coverageAmount, _premiumAmount, _policyDuration));
    }



    function subscribe() public payable {
        require(msg.value == premiumAmount, "Incorrect premium amount");
        subscribed[msg.sender] = true;
    }
    
    function makeClaim(uint256 _amount, string memory _description, string memory _fileHash) public {
        require(subscribed[msg.sender], "User is not subscribed to this policy");
        require(_amount <= coverageAmount, "Claim amount exceeds coverage amount");
        claims[msg.sender].push(Claim(_amount, _description, false, true, _fileHash));
    }
    
    function acceptClaim(address _user, uint256 _index) public {
        require(msg.sender == insurer, "Only the insurer can accept claims");
        require(claims[_user][_index].exists, "Claim does not exist");
        require(!claims[_user][_index].accepted, "Claim has already been accepted");
        claims[_user][_index].accepted = true;
        payable(_user).transfer(claims[_user][_index].amount);
    }
    
    function declineClaim(address _user, uint256 _index) public {
        require(msg.sender == insurer, "Only the insurer can decline claims");
        require(claims[_user][_index].exists, "Claim does not exist");
        require(!claims[_user][_index].accepted, "Claim has already been accepted");
        claims[_user][_index].accepted = false;
    }
    
    function getFileHash(address _user, uint256 _index) public view returns (string memory) {
        require(msg.sender == insurer, "Only the insurer can get the file hash");
        require(claims[_user][_index].exists, "Claim does not exist");
        return claims[_user][_index].fileHash;
    }
}

 