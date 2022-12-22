// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Contract {
   uint public x;

   function changeX(uint _x) external {
    x = _x;
   }
}
