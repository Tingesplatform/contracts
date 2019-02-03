pragma solidity ^0.5.0;

/**
 * @title ERC20 interface
 * @dev see https://github.com/ethereum/EIPs/issues/20
 */
interface IRegistry {
    function withdrawStableCoin(address token, address spender, uint256 value) external returns (bool);
    function isStableCoin(address _stableCoin) external returns (bool);
}

/**
 * @title Fund
 * @dev Very simple Fund
 */
contract Fund {
    IRegistry public registry;
    string public name;
    uint256 public cap;

    /**
     * @dev Constructor
     */
    constructor (IRegistry _registry, uint256 _cap, string memory _name) public {
        name = _name;
        registry = _registry;
        cap = _cap;
    }

    function withdrawStableCoin(address _stableCoin, uint256 _value) public returns (bool) {
        return registry.withdrawStableCoin(_stableCoin, address(this), _value);
    }

}
