const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const CryptoWars = artifacts.require("CryptoWars");
const Blacksmith = artifacts.require("Blacksmith");

module.exports = async function (deployer, network, accounts) {
  // const game = await upgradeProxy(CryptoWars.address, CryptoWars, { deployer });

  // const weaponsAddr = await game.weapons();
  // const randomsAddr = await game.randoms();

  // const blacksmith = await deployProxy(Blacksmith, [weaponsAddr, randomsAddr], { deployer });

  // // await game.migrateTo_60872c8(blacksmith.address);

  // const GAME = await blacksmith.GAME();

  // await blacksmith.grantRole(GAME, game.address);
};
