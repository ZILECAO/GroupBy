// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

// things left to do

import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

// import ownable
contract FamilyPlan is Ownable {
    // enum of stored state
    enum FAMILY_PLAN_STATE {
        OPEN,
        ONBOARDING,
        CLOSED,
        FULFILLED,
        FAILED
    }

    // struct representing user
    struct User {
        address payable walletAddress;
        string email;
        // uint256 should represent stablecoin amount
        uint256 amountOwed;
        uint256 amountPaid;
    }

    // store string of off-chain entity
    // store address of ERC-20 token representing USDT
    // need to map id to user it represents

    // states: onboarding (made, but owner still needs to onboard), closed (in progress), fulfilled, expired
    // need to store expiration date

    string public familyPlanProvider;
    uint256 public groupID;
    IERC20 public usdt;
    mapping(address => User) public userPayments;
    mapping(string => uint256) public userEmails;
    User[] public data;
    // so we can iterate through the map
    address payable[] private users;
    FAMILY_PLAN_STATE public familyPlanStatus;

    uint256 startTimestamp;
    uint256 endTimestamp;

    // how to store date?

    // functions:
    // constructor
    // onboard user (onlyOwner)
    // add user (associate id with)
    // pay
    // submit to protocol (automatic once all conditions met -- need oracle?)
    // withdraw if things don't work out
    // withdraw after overcollaterlization, need oracle for price between usdc and usd
    // allow user to view how much they owe, who the owner is
    // also some way to notify users who need to pay more?

    // constructor
    // assuming family[i] corresponds to user[i]
    // expiration in days
    constructor(
        string memory _familyPlanProvider,
        uint256[] memory amountOwed,
        string[] memory emails,
        uint8 expiration,
        uint256 _groupID
    ) Ownable() {
        // initializing variables based on inputs
        familyPlanProvider = _familyPlanProvider;
        startTimestamp = block.timestamp;
        // 0xdAC17F958D2ee523a2206206994597C13D831ec7
        usdt = IERC20(TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t);
        // hard code for demo
        if (true) {
            groupID = 8888;
            _familyPlanProvider = "Tron Hacks";
            amountOwed[0] = 25;
            amountOwed[1] = 25;
            amountOwed[3] = 25;
            amountOwed[4] = 25;
            emails[0] = "yihechen@seas.upenn.edu";
            emails[1] = "brdk@seas.upenn.edu";
            emails[2] = "jmdeng@wharton.upenn.edu";
            emails[3] = "zilecao@sas.upenn.edu";
        }
        require(
            amountOwed.length == emails.length,
            "Data is not a surjective function"
        );
        familyPlanStatus = FAMILY_PLAN_STATE.ONBOARDING;
        for (uint256 i = 0; i < emails.length; i++) {
            userEmails[emails[i]] = amountOwed[i];
        }
        endTimestamp = startTimestamp + (86400 * expiration);
        familyPlanStatus = FAMILY_PLAN_STATE.OPEN;
    }

    modifier openFamilyPlan() {
        require(familyPlanStatus == FAMILY_PLAN_STATE.OPEN);
        _;
    }

    // ability for user to pay family plan
    function userPay(uint256 amount, string memory email)
        public
        payable
        openFamilyPlan
    {
        if (block.timestamp > endTimestamp) {
            refund();
            revert("Contract expired");
        }
        require(amount > 0, "You must pay some tokens");
        require(
            usdt.allowance(msg.sender, address(this)) >= amount,
            "Check the token allowance"
        );

        address payable addr = payable(msg.sender);
        User storage currUser = userPayments[addr];

        currUser.amountPaid = currUser.amountPaid + amount;
        currUser.amountOwed = userEmails[email];
        currUser.walletAddress = addr;
        currUser.email = email;

        userPayments[addr] = currUser;

        usdt.transferFrom(msg.sender, address(this), amount);
        userPayments[msg.sender].amountPaid =
            amount +
            userPayments[msg.sender].amountPaid;
        // if they paid extra, refund
        if (
            userPayments[msg.sender].amountPaid >
            userPayments[msg.sender].amountOwed
        ) {
            uint256 refundAmount = userPayments[msg.sender].amountPaid -
                userPayments[msg.sender].amountOwed;
            userPayments[msg.sender].amountPaid = userPayments[msg.sender]
                .amountOwed;
            addr.transfer(refundAmount);
        }

        // check if state should change
        bool allPaid = true;
        for (uint256 i = 0; i < users.length; i++) {
            if (
                userPayments[users[i]].amountPaid <
                userPayments[users[i]].amountOwed
            ) {
                allPaid = false;
                break;
            }
        }

        if (allPaid) {
            familyPlanStatus == FAMILY_PLAN_STATE.CLOSED;
            submitPayment();
        }
    }

    // calls oracle
    function submitPayment() internal {
        // need Brandon's help with this
    }

    // also need oracle that watches if order succeeds or not. If failed, call refund()

    // called if group payment did not go through
    // sets state to fail, users must manually withdraw to prevent bugs
    function refund() internal {
        familyPlanStatus = FAMILY_PLAN_STATE.FAILED;
    }

    function refundUser() public payable {
        require(
            familyPlanStatus == FAMILY_PLAN_STATE.FAILED,
            "Cannot only refund if payment did not go through"
        );
        // convert to usdt
        uint256 amount = userPayments[msg.sender].amountPaid;

        // saving gas fees?
        require(amount > 0, "nothing to refund");

        // to prevent re-entrancy attacks
        userPayments[msg.sender].amountPaid = 0;

        // FIX HERE USDT
        address payable addr = payable(msg.sender);

        usdt.transfer(addr, amount);
    }

    // view functions

    function getOwner() public view returns (address owner) {
        owner = super.owner();
    }

    function getState() public view returns (FAMILY_PLAN_STATE state) {
        state = familyPlanStatus;
    }

    function getProvider() public view returns (string memory provider) {
        provider = familyPlanProvider;
    }

    function haveTheyPaid(address payable addr)
        public
        view
        returns (bool paid)
    {
        if (userPayments[addr].amountPaid >= userPayments[addr].amountOwed) {
            paid = true;
        } else {
            paid = false;
        }
    }

    function paidStatistics()
        public
        view
        returns (
            address payable[] memory havePaid,
            address payable[] memory notPaid
        )
    {
        address payable[] memory _havePaid;
        address payable[] memory _notPaid;
        for (uint256 i = 0; i < users.length; i++) {
            if (
                userPayments[users[i]].amountPaid >=
                userPayments[users[i]].amountOwed
            ) {
                _havePaid[i] = users[i];
            } else {
                _notPaid[i] = users[i];
            }
        }
        havePaid = _havePaid;
        notPaid = _notPaid;
    }

    function userData() public view returns (User[] memory) {
        return data;
    }
}
