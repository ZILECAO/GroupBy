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
    constructor() Ownable() {
        uint256[] memory amountOwed;
        string[] memory emails;
        usdt = IERC20(TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t);

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

        // 5 days time
        uint8 expiration = 5;

        familyPlanStatus = FAMILY_PLAN_STATE.ONBOARDING;
        for (uint256 i = 0; i < emails.length; i++) {
            userEmails[emails[i]] = amountOwed[i];
            data.push(User(0, emails[i], amountOwed[i], 0));
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
        require(amount > 0, "must pay non-zero amound");
        require(
            usdt.allowance(msg.sender, address(this)) >= amount,
            "Check the token allowance"
        );

        usdt.transferFrom(msg.sender, address(this), amount);
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
        usdt.transfer(payable(msg.sender), 1);
    }

    function data() public view returns (User[] memory) {
        return data;
    }
}
