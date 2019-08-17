import web3 from './web3'
import AuctionContract from './contracts/Auction.json'


const deployedNetwork = AuctionContract.networks[42];


const address = deployedNetwork.address;

console.log(address);

export default new web3.eth.Contract(AuctionContract.abi, address);
