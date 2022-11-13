// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

// things left to do

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// import ownable
contract FamilyPlan {
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
    mapping(string => uint256) public userEmails;
    User[] public data;
    uint256[] amountOwed;
    string[] emails;
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
    constructor() {
        groupID = 8888;
        familyPlanProvider = "Tron Hacks";

        usdt = IERC20(0xdAC17F958D2ee523a2206206994597C13D831ec7);

        amountOwed.push(25);
        amountOwed.push(25);
        amountOwed.push(25);
        amountOwed.push(25);
        emails.push("yihechen@seas.upenn.edu");
        emails.push("brdk@seas.upenn.edu");
        emails.push("jmdeng@wharton.upenn.edu");
        emails.push("zilecao@sas.upenn.edu");

        // 5 days time
        uint8 expiration = 5;

        familyPlanStatus = FAMILY_PLAN_STATE.ONBOARDING;
        for (uint256 i = 0; i < emails.length; i++) {
            userEmails[emails[i]] = amountOwed[i];
            data.push(User(payable(0), emails[i], amountOwed[i], 0));
        }
        endTimestamp = startTimestamp + (86400 * expiration);
        familyPlanStatus = FAMILY_PLAN_STATE.OPEN;
    }

    modifier openFamilyPlan() {
        require(familyPlanStatus == FAMILY_PLAN_STATE.OPEN);
        _;
    }

    // ability for user to pay family plan
    function userPay(uint256 amount) public payable openFamilyPlan {
        if (block.timestamp > endTimestamp) {
            refund();
            revert("Contract expired");
        }
        require(amount > 0, "must pay non-zero amound");

        usdt.transferFrom(msg.sender, address(this), amount);
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
        usdt.transfer(payable(msg.sender), 1);
    }
}
