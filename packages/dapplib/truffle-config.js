require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan reward stereo punch hunt logic orange genre'; 
let testAccounts = [
"0x67b7b696cfb86fff5fe6da9c9036467319e60d411d3f0708af66ac96fc59e24b",
"0xb53aa3b85d6dbcbe115d6e31b23efabde5f3bc0b710a66ff6ab70ad9e58397e2",
"0x918b749c49e25d9e1226b7e4bec93e87590c7200dc5f0ab3068b2d34fd74a4ac",
"0x8249a255df24e34262cb4323bf5ab1a0b6a6de5817a7a48ec004156166387931",
"0x35b7e17e21f047e9c8615ebfbf0bbfd2b5dd4cef21ce9f867ad23544362473b7",
"0x66477ca7654c278c7c268ddcb038d2eeb4fe30b5575765fabdf59d2870725cbe",
"0x670914c90e8a9ee94cbdb5d094b0acd3111ebb1806d39d138a1f89fe295f988f",
"0x9380a485c9fea77691acf552a9d5b24d10457b8855214ced4cec8b547bf1971f",
"0x8d0acf9bcaa95781d3521ba5b68bf061e792a466fc5527391720068253bc0664",
"0xccab814e5a6c11e6e71d287c7334d55013c8fbf28776ade493f8a2866bba5fc5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

