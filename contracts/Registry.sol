pragma solidity ^0.5.0;


/**
 * @title ERC20 interface
 * @dev see https://github.com/ethereum/EIPs/issues/20
 */
interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
}


/**
 * @title Fund
 * @dev Very simple Fund example
 */
contract Registry {
    string public name;
    address public owner;
    address public pendingOwner;
    mapping(address => bool) public stableCoins;

    /**
     * @dev Constructor
     */
    constructor (address _pendingOwner, string memory _name) public {
        name = _name;
        pendingOwner = _pendingOwner;
    }

    /**
    * @dev Throws if called by any account other than the owner.
    */
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can do this.");
        _;
    }

    /**
    * @dev Modifier throws if called by any account other than the pendingOwner.
    */
    modifier onlyPendingOwner() {
        require(msg.sender == pendingOwner, "Only pendingOwner can do this.");
        _;
    }

    /**
    * @dev Allows the current owner to set the pendingOwner address.
    * @param newOwner The address to transfer ownership to.
    */
    function transferOwnership(address newOwner) public onlyOwner {
        pendingOwner = newOwner;
    }

    /**
    * @dev Allows the pendingOwner address to finalize the transfer.
    */
    function claimOwnership() public onlyPendingOwner {
        owner = pendingOwner;
        pendingOwner = address(0);
    }

    function withdrawStableCoin(IERC20 _stableCoin, address _spender, uint256 _value) public returns (bool) {
        return _stableCoin.transfer(_spender, _value);
    }

    function addStableCoin(address _stableCoin) public {
        stableCoins[_stableCoin] = true;
    }

    function delStableCoin(address _stableCoin) public {
        stableCoins[_stableCoin] = false;
    }

    function isStableCoin(address _stableCoin) public view returns (bool) {
        return stableCoins[_stableCoin];
    }
}
