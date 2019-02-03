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
    mapping(address => bool) public stableCoins;

    /**
     * @dev Constructor
     */
    constructor (string memory _name) public {
        name = _name;
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
