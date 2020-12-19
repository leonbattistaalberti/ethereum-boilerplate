const assert = require("assert");
const ganache = require("ganache-cli");
// Web3 constructor function
const Web3 = require("web3");
// Create web3 instance
const web3 = new Web3(ganache.provider());
