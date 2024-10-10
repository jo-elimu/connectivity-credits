// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.27;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GigaCreditIssuer {
    IERC20 public immutable gigaCredit = IERC20(0x603f1B4dAf6A3780f1c9237BDfcb02A3A7DBBA88);
    mapping(bytes32 => uint256) balance;

    function issueCredits(bytes32 schoolId, uint256 amount) public {
        balance[schoolId] += amount;
        gigaCredit.transfer(address(this), amount);
    }
}
