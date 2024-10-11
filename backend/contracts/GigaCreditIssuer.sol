// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.27;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GigaCreditIssuer {
    IERC20 public immutable gigaCredit;
    mapping(bytes32 => uint256) public balance;

    constructor(address gigaCredit_) {
        gigaCredit = IERC20(gigaCredit_);
    }

    function issueCredits(bytes32 schoolId, uint256 amount) public {
        balance[schoolId] += amount;
        gigaCredit.transferFrom(msg.sender, address(this), amount);
    }
}
