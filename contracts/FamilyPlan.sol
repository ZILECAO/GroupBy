// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

// things left to do: trc-10, date (so funds cannot be locked in), reminding users, importing ownable

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

    // store address of protocol
    // store address of ERC-20 token representing
    // need to map id to user address (ids 1 to n, where n = size)
    // need to store size
    // need to store cost per person
    // boolean about whether or not user has paid
    // states: open, closed (in progress), fulfilled, expired
    // need to store expiration date

    string public familyPlanProvider;
    mapping(address => User) private userPayments;
    // so we can iterate through the map
    address payable[] private users;
    FAMILY_PLAN_STATE public familyPlanStatus;

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
    constructor(
        string memory _familyPlanProvider,
        address payable[] memory family,
        uint256[] memory amountOwed,
        string[] memory emails
    ) Ownable() {
        // initializing variables based on inputs
        familyPlanProvider = _familyPlanProvider;
        require(
            family.length == amountOwed.length &&
                amountOwed.length == emails.length,
            "Data is not a surjective function"
        );
        familyPlanStatus = FAMILY_PLAN_STATE.ONBOARDING;
        for (uint256 i = 0; i < family.length; i++) {
            userPayments[family[i]] = User(
                family[i],
                emails[i],
                amountOwed[i],
                0
            );
            users.push(family[i]);
        }
        familyPlanStatus = FAMILY_PLAN_STATE.OPEN;
    }

    modifier openFamilyPlan() {
        require(familyPlanStatus == FAMILY_PLAN_STATE.OPEN);
        _;
    }

    // ability for user to pay family plan
    function userPay() public payable openFamilyPlan {
        // convert to trc-10 for usdt
        uint256 amount = msg.value;
        userPayments[msg.sender].amountPaid =
            msg.value +
            userPayments[msg.sender].amountPaid;
        // if they paid extra, refund
        if (
            userPayments[msg.sender].amountPaid >
            userPayments[msg.sender].amountOwed
        ) {
            uint256 amount = userPayments[msg.sender].amountPaid -
                userPayments[msg.sender].amountOwed;
            userPayments[msg.sender].amountPaid = userPayments[msg.sender]
                .amountOwed;
            address payable addr = payable(msg.sender);
            addr.transfer(amount);
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
    function submitPayment() internal payable {
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
        address payable addr = payable(msg.sender);

        addr.transfer(amount);
    }

    // view functions

    function getOwner() public view returns (address owner) {
        owner = super.owner();
    }

    function getState() public view returns (FAMILY_PLAN_STATE state) {
        state = familyPlanStatus;
    }

    function getProvider() public view returns (string provider) {
        provider = familyPlanProvider;
    }
}
