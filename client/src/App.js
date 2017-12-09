import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {tickers: {}, text: ''}
  }

  componentDidMount() {
  }

  handleClick() {
    const startdate = Date();
    console.log("ticker requested on: "+startdate);

    fetch(`/tickers/_getticker/${this.state.text}`)
      .then(res => res.json())
      .then(tickers => this.setState({ tickers }))
      .then(()=>{
        var date = new Date();
        var date1 = new Date(startdate)
        var timeDiff = Math.abs(date1.getTime() - date.getTime());
        console.log(this.state.tickers);
        console.log("Request time: "+ timeDiff + "ms");
      });
  }

  render() {
    setInterval(function(){

    }, 3000);

    let displayVal = '';
    if(this.state.tickers['Error Message']){
      displayVal = `Stock Symbol ${this.state.text} is invalid`;
    }
    if(this.state.tickers['Monthly Time Series']){
      let c = Object.keys(this.state.tickers['Monthly Time Series']);
      let keyVal = c[0];
      displayVal = this.state.tickers['Monthly Time Series'][keyVal]['4. close'];
    }

    return (
      <div className="App">
        <h1>Stock Ticker Dash</h1>
          <input onChange={(event) => this.setState({text:event.target.value})} type="text" id="symbol" placeholder="ticker symbol" value={this.state.text}></input>{ ' '}
          <Button onClick={this.handleClick} bsStyle="primary" bsSize="small" >Submit</Button>
          {displayVal && <div>{displayVal}</div>}
      </div>

    );
  }
}

export default App;
