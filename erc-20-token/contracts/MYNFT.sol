//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MYNFT is ERC721A,Ownable {

    using Counters for Counters.Counter;
    uint256 public rate =  100*10**18;

    IERC20 public tokenAddress;

    Counters.Counter private _tokenIdCounter;

    constructor(address _tokenAdress) ERC721A("MYNFT", "MTK") {
        tokenAddress = IERC20(_tokenAdress);
    }

    function safeMint() public {
        tokenAddress.transferFrom(msg.sender, address(this), rate);
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
    }
}

// erc20 token rinkeby address : 0xED18E52891083efB20DAA3494A9f33d9A75d1100