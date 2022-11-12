// eslint-disable-next-line no-undef
const easyA = artifacts.require("easyA");

module.exports = function (deployer) {
  deployer.deploy(easyA);
};