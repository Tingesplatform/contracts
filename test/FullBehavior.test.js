const { should, ether } = require('openzeppelin-test-helpers');

const Tap = artifacts.require('Tap');
const Registry = artifacts.require('Registry');
const Fund = artifacts.require('Fund');

contract('FullBehaviorTest', function ([_, deployer, owner, wallet, investor]) {
  beforeEach(async function () {
    this.reg = await Registry.new('Registry');
    this.fund = await Fund.new(this.reg.address, ether('10'), 'Fund');
    this.tap = await Tap.new(this.reg.address, this.fund.address, deployer, 123, 'Tap');
  });
  it('should create crowdsale with correct parameters', async function () {
    should.exist(this.reg);
    should.exist(this.fund);
    should.exist(this.tap);
  });
});
