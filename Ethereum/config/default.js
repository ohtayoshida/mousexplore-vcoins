var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8555"));

const config = {
  web3,
  port: 80,

  db: "mongodb://localhost:27017/ethereum-db",
  mainpass: "vCoinEthpass2018",
  provider: "http://127.0.0.1:8555",
  CRON_TIME_INTERVAL: 100,	//if we decrease this to 100ms, cronservice has trouble after some time.
}
module.exports = config;