// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

/**
 * @dev Represents a contract that does not support IERC721.safeTransferFrom
 */
contract InvalidERC721Receiver {}

/**
 * @dev Represents a contract that supports IERC721.safeTransferFrom by implementing IERC721Receiver.onERC721Received
 */
contract ValidERC721Receiver is IERC721Receiver {

    /**
     * @dev see {IERC721Receiver-onERC721Received}
     */
    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }
}
