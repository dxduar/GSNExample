/* global web3 */
// put your metamask address here, so it will always have some ether on local network...
const myMetamaskAddr = '0xd69558211e9f6cDcdfF2002132f28474a062869c'

module.exports = async function (deployer, network) {
  if (network === 'development') {
    const accounts = await web3.eth.getAccounts()
    web3.eth.sendTransaction({ from: accounts[0], to: myMetamaskAddr, value: 2e18 }, (e, r) => {
      if (e) {
        console.log('Failed to fund metamask', e)
      } else {
        console.log('Funded metamask @', myMetamaskAddr)
      }
    })
  }
}
