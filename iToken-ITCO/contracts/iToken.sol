// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract iToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("iToken", "ITCO") {
        _mint(address(0x6DbC7634dEee8d09c82D2984b3739BEB264EBA61), 1000000000 * 10 ** decimals());
    }
}