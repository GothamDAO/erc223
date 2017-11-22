// ===========================================================================
// functions used by other scripts
// ===========================================================================

const fs = require('fs');
const Web3_ = require('web3');
const web3_ =
  new Web3_(new Web3_.providers.HttpProvider("http://localhost:8545"));

exports.getWeb3 = function() { return web3_; }

exports.getABI = function() {
  var contents = fs.readFileSync('../build/' +
                   'ERC223Token_sol_ERC223Token.abi').toString();
  var abiObj = JSON.parse(contents);
  return abiObj;
}

exports.getBinary = function() {
  var binary = fs.readFileSync('../build/' +
                 'ERC223Token_sol_ERC223Token.bin').toString();

  if (!binary.startsWith('0x'))
    binary = '0x' + binary;

  return binary;
}

exports.getContract = function(sca) {
  return new web3_.eth.Contract( exports.getABI(), sca );
}

exports.getGasPrice = function() {
  return web3_.eth.gasPrice;
}

