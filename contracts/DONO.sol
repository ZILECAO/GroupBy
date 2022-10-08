// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import './ReentrancyGuard.sol';


contract DONO is ReentrancyGuard {
    string public name = "Donate Notes smart contract";

    address private ownAcc;
    uint256 private ownBal;
    uint256 private ownRoyaltyBal;
    uint256 private royaltyPercent; 
    uint256 public totalNotes = 0;
    uint256 public totalListed = 0;


    mapping(uint256 => ItemStruct) private notes;
    mapping(address => ItemStruct[]) private notesOf;
    mapping(uint256 => address) public ownerOf;
    mapping(uint256 => Available) public isAvailable;
  


    enum Available { NO, YES }

    struct ItemStruct {
        uint256 itemId;
        address owner;
        string nickname;
        string noteDescription;
        string ipfsURI;
      
        uint256 totalDonated;
        uint256 lastDonation;
        uint256 timestamp;       
    }


    event Action (
        uint256 itemId,
        string actionType,
        Available available,
        address indexed executor
    );

    constructor() {
        ownAcc = msg.sender;
        ownBal = 0;
        ownRoyaltyBal = 0; 
        royaltyPercent = 10; //Set escrow royalty percentage, TODO: Make function to edit this later on
    }


    function getOwnBalance() public view returns (uint256) {
        return ownBal;
    }

    function getOwnRoyaltyBal() public view returns (uint256) {
        return ownRoyaltyBal;
    }

    function getRoyaltyPercent() public view returns (uint256) {
        return royaltyPercent;
    }

    function setRoyaltyPercent(uint256 newRoyaltyPercent) public returns (bool) {
      require(msg.sender == ownAcc, "Only owner wallet allowed");
      
      royaltyPercent = newRoyaltyPercent;
      return true;
    }

    function createNewListing(
        string calldata nickname,
        string calldata noteDescription,
        string calldata ipfsURI
    ) payable external returns (bool) {
        require(bytes(nickname).length > 0, "Nickname cannot be empty");
        require(bytes(noteDescription).length > 0, "Note description cannot be empty");
        require(bytes(ipfsURI).length > 0, "IPFS URI cannot be empty");
        require(msg.value == 0, "Price must be equal to listing fee of 0.045eth");

        uint256 itemId = totalNotes++;
      
        ItemStruct storage note = notes[itemId];
        note.itemId = itemId;
        note.nickname = nickname;
        note.noteDescription = noteDescription;
        note.timestamp = block.timestamp;
        note.owner = msg.sender;
        note.ipfsURI = ipfsURI;

        notesOf[msg.sender].push(note);
        ownerOf[itemId] = msg.sender;
        isAvailable[itemId] = Available.YES;
        ownBal += msg.value;
        ownRoyaltyBal += msg.value;

        emit Action (
            itemId,
            "NOTE LISTED",
            Available.YES,
            msg.sender
        );
        return true;
    }

    function getAllNotes()
        external
        view
        returns (ItemStruct[] memory props) {
        props = new ItemStruct[](totalNotes);

        for (uint256 i = 0; i < totalNotes; i++) {
            props[i] = notes[i];
        }
    }

    function getNote(uint256 itemId)
        external
        view
        returns (ItemStruct memory) {
        return notes[itemId];
    }

    function getNoteURI(uint256 itemId)
        external
        view
        returns (string memory) {

        string memory temp = notes[itemId].ipfsURI;
        return temp;
    }



    function myNotes()
        external
        view
        returns (ItemStruct[] memory) {
        return notesOf[msg.sender];
    }

    function donate (uint256 itemId) payable external returns (bool) {
        require(msg.sender != ownerOf[itemId], "Owner of item not allowed to donate to yourself");
        require(msg.sender != ownAcc, "Owner wallet cannot interact");
        require(isAvailable[itemId] == Available.YES, "Note not available");
        
        //payment
        require(msg.value >= 0, "Donation must be greater than 0");
        ownBal += msg.value;
        notes[itemId].totalDonated += msg.value;
        notes[itemId].lastDonation = msg.value;

        //funds transfered to Note poster
        uint256 fee = (notes[itemId].lastDonation * royaltyPercent) / 100;
        
        payTo(notes[itemId].owner, (notes[itemId].lastDonation - fee));
        ownBal -= notes[itemId].lastDonation - fee;
        ownRoyaltyBal += fee;
        

        emit Action (
            itemId,
            "DONATION made by some Donor",
            Available.YES,
            msg.sender
        );

        return true;
    }


    function ownerWithdrawRoyalty(
        address to,
        uint256 amount
    ) external returns (bool) {
        require(msg.sender == ownAcc, "Only owner wallet allowed");
        require(amount > 0 ether && amount <= ownRoyaltyBal, "There is nothing to withdraw");

        payTo(to, amount);
        ownRoyaltyBal -= amount;

        emit Action (
            block.timestamp,
            "WITHDRAWED",
            Available.YES,
            msg.sender
        );

        return true;
    }

    function payTo(
        address to, 
        uint256 amount
    ) internal returns (bool) {
        (bool success,) = payable(to).call{value: amount}("");
        require(success, "Payment failed");
        return true;
    }
}