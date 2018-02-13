import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { 
  Container,
  Row,
  Col,
  Table
 } from 'reactstrap';

class App extends Component {
  constructor(props){

    super(props);
    //Pass top 40 cryptos from array
    this.state = {  
      topOne: [],
      topTwo: [],
      topThree: [],
      topFour: [],
      topFive: [],
      topSix: [],
      topSeven: [],
      topEight: [],
      topNine: [],
      topTen: [],
      top11: [],
      top12: [],
      top13: [],
      top14: [],
      top15: [],
      top16: [],
      top17: [],
      top18: [],
      top19: [],
      top20: [],
      top21: [],
      top22: [],
      top23: [],
      top24: [],
      top25: [],
      top26: [],
      top27: [],
      top28: [],
      top29: [],
      top30: [],
      top31: [],
      top32: [],
      top33: [],
      top34: [],
      top35: [],
      top36: [],
      top37: [],
      top38: [],
      top39: [],
      top40: []
    };

  }

  componentDidMount(){
    fetch('/api/cc')
      .then(res => {return res.json()})
      .then(data => {
        this.setState({
          topOne: data[0],
          topTwo: data[1],
          topThree: data[2],
          topFour: data[3],
          topFive: data[4],
          topSix: data[5],
          topSeven: data[6],
          topEight: data[7],
          topNine: data[8],
          topTen: data[9]
        })
      })
      .catch(err => console.log(err));

    
      fetch('/api/top100')
        .then(res => {return res.json()})
        .then(data =>{
          //console.log(data);

          this.setState({
            topOne: data[0],
            topTwo: data[1],
            topThree: data[2],
            topFour: data[3],
            topFive: data[4],
            topSix: data[5],
            topSeven:data[6],
            topEight:data[7],
            topNine: data[8],
            topTen: data[9],
            top11: data[10],
            top12: data[11],
            top13: data[12],
            top14: data[13],
            top15: data[14],
            top16: data[15],
            top17: data[16],
            top18: data[17],
            top19: data[18],
            top20: data[19],
            top21: data[20],
            top22: data[21],
            top23: data[22],
            top24: data[23],
            top25: data[24],
            top26: data[25],
            top27: data[26],
            top28: data[27],
            top29: data[28],
            top30: data[29],
            top31: data[30],
            top32: data[31],
            top33: data[32],
            top34: data[33],
            top35: data[34],
            top36: data[35],
            top37: data[36],
            top38: data[37],
            top39: data[38],
            top40: data[39]
          })
        })
        .catch(err => console.log(err));
  }

  render() {

    let btc;
  
    if(this.state.topOne.percent_change_24h > 0){
      btc = <p className="green-text">{this.state.topOne.price_usd}</p>
    } else if(this.state.topOne.percent_change_24h < 0){
      btc = <p className="red-text">{this.state.topOne.price_usd}</p>
    } 
    
    let eth;
    
    if(this.state.topTwo.percent_change_24h > 0){
      eth = <p className="green-text">{this.state.topTwo.price_usd}</p>
    } else if(this.state.topTwo.percent_change_24h < 0){
      eth= <p className="red-text">{this.state.topTwo.price_usd}</p>
    } 

    let xrp;
    
    if(this.state.topThree.percent_change_24h > 0){
      xrp = <p className="green-text">{this.state.topThree.price_usd}</p>
    } else if(this.state.topThree.percent_change_24h < 0){
      xrp = <p className="red-text">{this.state.topThree.price_usd}</p>
    } 

    return (
     <div>
      <h1 className="title">Cryptocurrency Market Tracker</h1>
      <Container>
        <Row>
          <Col>
            <div className="box">
              <a href="https://bitcoin.org/en/" className="center">{this.state.topOne.symbol} {btc}</a>
            </div>
          </Col>
          <Col>
            <div className="box">
              <a href="https://www.ethereum.org/" className="center">{this.state.topTwo.symbol} {eth}</a>
            </div>
          </Col> 
          <Col>
            <div className="box">
              <a href="https://ripple.com/" className="center">{this.state.topThree.symbol} {xrp}</a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="some-padding"></div>
      <Container>
        <Table hover dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{this.state.topOne.rank}</th>
              <td>{this.state.topOne.symbol}</td>
              <td>${this.state.topOne.price_usd}</td>
              <td>{this.state.topOne.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.topTwo.rank}</th>
              <td>{this.state.topTwo.symbol}</td>
              <td>${this.state.topTwo.price_usd}</td>
              <td>{this.state.topTwo.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.topThree.rank}</th>
              <td>{this.state.topThree.symbol}</td>
              <td>${this.state.topThree.price_usd}</td>
              <td>{this.state.topThree.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.topFour.rank}</th>
              <td>{this.state.topFour.symbol}</td>
              <td>${this.state.topFour.price_usd}</td>
              <td>{this.state.topFour.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.topFive.rank}</th>
              <td>{this.state.topFive.symbol}</td>
              <td>${this.state.topFive.price_usd}</td>
              <td>{this.state.topFive.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.topSix.rank}</th>
              <td>{this.state.topSix.symbol}</td>
              <td>${this.state.topSix.price_usd}</td>
              <td>{this.state.topSix.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.topSeven.rank}</th>
              <td>{this.state.topSeven.symbol}</td>
              <td>${this.state.topSeven.price_usd}</td>
              <td>{this.state.topSeven.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.topEight.rank}</th>
              <td>{this.state.topEight.symbol}</td>
              <td>${this.state.topEight.price_usd}</td>
              <td>{this.state.topEight.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.topNine.rank}</th>
              <td>{this.state.topNine.symbol}</td>
              <td>${this.state.topNine.price_usd}</td>
              <td>{this.state.topNine.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.topTen.rank}</th>
              <td>{this.state.topTen.symbol}</td>
              <td>${this.state.topTen.price_usd}</td>
              <td>{this.state.topTen.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top11.rank}</th>
              <td>{this.state.top11.symbol}</td>
              <td>${this.state.top11.price_usd}</td>
              <td>{this.state.top11.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top12.rank}</th>
              <td>{this.state.top12.symbol}</td>
              <td>${this.state.top12.price_usd}</td>
              <td>{this.state.top12.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top13.rank}</th>
              <td>{this.state.top13.symbol}</td>
              <td>${this.state.top13.price_usd}</td>
              <td>{this.state.top13.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top14.rank}</th>
              <td>{this.state.top14.symbol}</td>
              <td>${this.state.top14.price_usd}</td>
              <td>{this.state.top14.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top15.rank}</th>
              <td>{this.state.top15.symbol}</td>
              <td>${this.state.top15.price_usd}</td>
              <td>{this.state.top15.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top16.rank}</th>
              <td>{this.state.top16.symbol}</td>
              <td>${this.state.top16.price_usd}</td>
              <td>{this.state.top16.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top17.rank}</th>
              <td>{this.state.top17.symbol}</td>
              <td>${this.state.top17.price_usd}</td>
              <td>{this.state.top17.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top18.rank}</th>
              <td>{this.state.top18.symbol}</td>
              <td>${this.state.top18.price_usd}</td>
              <td>{this.state.top18.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top19.rank}</th>
              <td>{this.state.top19.symbol}</td>
              <td>${this.state.top19.price_usd}</td>
              <td>{this.state.top19.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top20.rank}</th>
              <td>{this.state.top20.symbol}</td>
              <td>${this.state.top20.price_usd}</td>
              <td>{this.state.top20.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top21.rank}</th>
              <td>{this.state.top21.symbol}</td>
              <td>${this.state.top21.price_usd}</td>
              <td>{this.state.top21.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top22.rank}</th>
              <td>{this.state.top22.symbol}</td>
              <td>${this.state.top22.price_usd}</td>
              <td>{this.state.top22.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top23.rank}</th>
              <td>{this.state.top23.symbol}</td>
              <td>${this.state.top23.price_usd}</td>
              <td>{this.state.top23.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top24.rank}</th>
              <td>{this.state.top24.symbol}</td>
              <td>${this.state.top24.price_usd}</td>
              <td>{this.state.top24.available_supply}</td>
            </tr>
            <tr>
              <th scope="row">{this.state.top25.rank}</th>
              <td>{this.state.top25.symbol}</td>
              <td>${this.state.top25.price_usd}</td>
              <td>{this.state.top25.available_supply}</td>
            </tr>
          </tbody>
        </Table>
      </Container>

     </div>
    );
  }
}

export default App;
