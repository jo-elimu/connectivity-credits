// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.27;

contract GigaOracle {
    mapping (bytes32 schoolId => bool) public connected;

    function setConnected(bytes32 schoolId, bool connected_) public {
        connected[schoolId] = connected_;
    }
}
