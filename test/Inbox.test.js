const assert = require("assert");
const ganache = require("ganache-cli");
// Web3 constructor function
const Web3 = require("web3");
// Create web3 instance
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  // Deploy Inbox contract using a Ganache account
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi"] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });
});
