require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name rice magic exchange grid nasty equal gather'; 
let testAccounts = [
"0xd448e91b99a055f452811a860aac339311ec81dc801f6ea6b7a534ba4ee019ad",
"0x283a6ffc28c01030fd341ef852e30344e01e4aee72785dc2427500e1b97468e1",
"0x7df6e859b7417f79214b28feecffe25d443b01ddf3b0117c4c6260c3ee27ea7d",
"0x7243f08686adb5e459f2f210ed5aee8ce70339f520919d1004bba49446aefff2",
"0xb02df21c89bbd7d749d3f8bbc164793c86a91c8f2dd577cb5500eb39563e4648",
"0x22ec0b71c1cb937ad676304ec2742fa90465b78c1d82906f196f1e577a1484ed",
"0xd08140a72eb8d9a2f2c90e0a4683f92dcdd9f84ae4093e8df5a448f5f7f73546",
"0xf9cb89e01c6ae1ba8e4c61b9241abb743cda203eaa218f8302fd28aaba00be9e",
"0x5f56270c53b56ffe1c7f68cfeae0baa80e2cda01dd6941c05a5aeab783c598ad",
"0x08b06fb9435ab50cc29d395ab8cfc39e6716528d65efb4c94d653e40a02b6d7b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

