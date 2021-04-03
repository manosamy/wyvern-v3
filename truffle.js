require('dotenv').config();
var HDWalletProvider = require('truffle-hdwallet-provider');

var rinkebyMnemonic = process.env.RINKEBY_MNEMONIC;
var mumbaiMnemonic = process.env.MUMBAI_MNEMONIC;
var mainnetMnemonic = process.env.MAINNET_MNEMONIC;
var xdaiMnemonic = process.env.XDAI_MNEMONIC;

module.exports = {
  mocha: {
    enableTimeouts: false
  },
  networks: {
    mainnet: {
      provider: function () {
        return new HDWalletProvider(mainnetMnemonic, 'https://mainnet.infura.io')
      },
      from: '',
      port: 8545,
      network_id: '1',
      gasPrice: 4310000000,
      confirmations: 2
    },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '50',
      gas: 6700000
    },
    coverage: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(rinkebyMnemonic, 'https://rinkeby.infura.io')
      },
      from: '',
      port: 8545,
      network_id: '4',
      gas: 6700000,
      gasPrice: 21110000000,
      confirmations: 2
    },
    mumbai: {
      provider: function () {
        return new HDWalletProvider(mumbaiMnemonic, 'https://rpc-mumbai.matic.today')
      },
      from: '',
      network_id: '80001'
      },
    xdai: {
      provider: function() {
        return new HDWalletProvider(xdaiMnemonic, 'https://rpc.xdaichain.com/')
      },
      network_id: "100",
      deploymentPollingInterval: 1000,
      gas: 4000000 
    },
    xdaidev: {
      host: 'localhost',
      port: 8545,
      network_id: '50',
      gas: 6700000
    },

  },
  compilers: {
    solc: {
      version: '0.7.5',
      settings: {
        optimizer: {
          enabled: true,
          runs: 750
        }
      }
    }
  }
}
