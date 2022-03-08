const NSToken = artifacts.require("NSToken");
const NSTCrowdsale = artifacts.require("NSTCrowdsale");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(
    NSToken,
    "NSToken",
    "NST",
    "100000000000000000000000000"
  );
  const token = await NSToken.deployed();
  console.log(accounts);
  await deployer.deploy(NSTCrowdsale, 5, accounts[0], token.address);
  const crowdsale = await NSTCrowdsale.deployed();

  token.transfer(crowdsale.address, await token.totalSupply());
};
