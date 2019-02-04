const { should, ether } = require('openzeppelin-test-helpers');

const Tap = artifacts.require('Tap');
const Registry = artifacts.require('Registry');
const Fund = artifacts.require('Fund');
const ZERO = '0x0000000000000000000000000000000000000000';

contract('FullBehaviorTest', function ([_, deployer, owner, newOwner]) {
  beforeEach(async function () {
    this.reg = await Registry.new(owner, 'Registry');
    this.fund = await Fund.new(this.reg.address, ether('10'), 'Fund');
    this.tap = await Tap.new(this.reg.address, this.fund.address, deployer, 123, 'Tap');
  });
  it('should create crowdsale with correct parameters', async function () {
    should.exist(this.reg);
    should.exist(this.fund);
    should.exist(this.tap);
  });
  it('returns correct owner and pendingOwner', async function () {
    (await this.reg.owner()).should.be.equal(ZERO);
    (await this.reg.pendingOwner()).should.be.equal(owner);
  });
  describe('After claimed ownership', function () {
    beforeEach(async function () {
      await this.reg.claimOwnership({ from: owner });
    });
    it('returns correct owner', async function () {
      (await this.reg.owner()).should.be.equal(owner);
      (await this.reg.pendingOwner()).should.be.equal(ZERO);
    });
    describe('After transferred ownership to newOwner', function () {
      beforeEach(async function () {
        await this.reg.transferOwnership(newOwner, { from: owner });
      });
      it('returns correct owner', async function () {
        (await this.reg.owner()).should.be.equal(owner);
        (await this.reg.pendingOwner()).should.be.equal(newOwner);
      });
      describe('After claimed ownership by newOwner', function () {
        beforeEach(async function () {
          await this.reg.claimOwnership({ from: newOwner });
        });
        it('returns newOwner as owner', async function () {
          (await this.reg.owner()).should.be.equal(newOwner);
          (await this.reg.pendingOwner()).should.be.equal(ZERO);
        });
      });
    });
  });
});
