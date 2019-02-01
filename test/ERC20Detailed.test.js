const { BN } = require('openzeppelin-test-helpers');

const StableCoin = artifacts.require('StableCoin');

contract('StableCoin', function () {
  const _symbol = 'DAI';
  const _decimals = new BN(18);

  beforeEach(async function () {
    this.stableCoin = await StableCoin.new(_symbol);
  });

  it('has a symbol', async function () {
    (await this.stableCoin.symbol()).should.be.equal(_symbol);
  });

  it('has an amount of decimals', async function () {
    (await this.stableCoin.decimals()).should.be.bignumber.equal(_decimals);
  });
});
