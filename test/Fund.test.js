const { ether } = require('openzeppelin-test-helpers');

const Fund = artifacts.require('Fund');

contract('Fund', function ([_, spender, fakeRegistry]) {
  const CAP = ether('10');

  beforeEach(async function () {
    this.fund = await Fund.new(fakeRegistry, CAP, 'Fund Name');
  });

  it('has a cap', async function () {
    (await this.fund.cap()).should.be.bignumber.equal(CAP);
  });

  it('has a registry', async function () {
    (await this.fund.registry()).should.equal(fakeRegistry);
  });

  it('has a name', async function () {
    (await this.fund.name()).should.equal('Fund Name');
  });
});
