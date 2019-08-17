import React, { Component } from 'react';
import web3 from './web3';
import auction from './auction';
import './App.css';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Label from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl';
import AppBar from './AppBar'


class App extends Component {
  state = {
    manager: '',
    latestBid: '',
    latestBidder: '',
    seller: '',
    balance: '',
    auctionValue: '',
    bidValue: '',
    closingRemark: ''
  }

async componentDidMount() {
    const manager = await auction.methods.manager().call();
    const latestBid = await auction.methods.latestBid().call();
    const latestBidder = await auction.methods.latestBidder().call();
    const seller = await auction.methods.seller().call();
    const balance = await web3.eth.getBalance(auction.options.address);
    this.setState({ manager, latestBid, latestBidder, seller, balance });
    }
    onAuctionSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await auction.methods.auction(this.state.auctionValue).send({
    from: accounts[0]
    });
    this.setState({ seller: accounts[0] });
    }
    onBidSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const weiAmount = web3.utils.toWei(this.state.bidValue, 'ether');
    await auction.methods.bid().send({
    from: accounts[0],
    value: weiAmount
    });
    this.setState({ latestBid: weiAmount, balance: weiAmount, latestBidder: accounts[0] });
    }
    onFinishSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await auction.methods.finishAuction().send({
    from: accounts[0]
    });
    this.setState({ closingRemark: 'Auction has been closed.' })
    }

  render() {
    return (
      <div id= "content" className = 'Container'>
        <AppBar></AppBar>
        <div id = 'sidebar'>
          <br></br>
          <br></br>
          <br></br>
          <br></br><p>The contract manager is {this.state.manager}.</p>
          <br></br><p>The seller is {this.state.seller}.</p>
          <br></br><p>The lattest bidder is {this.state.latestBidder}.</p>
          <br></br><p>The lattest bid is {web3.utils.fromWei(this.state.latestBid, 'ether')} ether.</p>
        <br></br><p>The balance in the contract is {web3.utils.fromWei(this.state.balance, 'ether')} ether.</p>
        </div>

        <div id = 'post' >
        <h4>Seller</h4>
        <FormControl>
        <Label htmlFor="component-simple">Set initial bid</Label>
        <Input id="component-simple"
            value={this.state.auctionValue}
            onChange={event => this.setState({ auctionValue: event.target.value })}
        />
        </FormControl>
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" onClick={this.onAuctionSubmit}>Start</Button>
        <hr />
        <h4>Bidder</h4>
        <FormControl>
        <Label htmlFor="component-simple">Input bid amount</Label>
        <Input id="component-simple"
            value={this.state.bidValue}
            onChange={event => this.setState({ bidValue: event.target.value })}
        />
       </FormControl>
       <br></br>
       <br></br>
       <Button variant="contained" color="primary" onClick={this.onBidSubmit}>Bid</Button>
       <hr />
       <h4>Closing Auction</h4>
       <Button variant="contained" color="primary" onClick={this.onFinishSubmit}>Finish</Button>
       <h1>{this.state.closingRemark}</h1>
        </div>   
       
     </div>
    );
   }
  }
  export default App;




