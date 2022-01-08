import React, { Component } from 'react';

//import Tabletop from 'import logo from './logo.svg';
import Tabletop from "tabletop";

class Task extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
        // key: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQe412mPe3e2IDJco0b1GpPgsfx3VqNfUH_VGdUziRCSe0zEgnyjLvCxmuFrRVdJWVa14-aZoahdfX2/pubhtml",
        key :'1iVF8AyyuSoAYHqqUoQ8h60XDvN2umTH5MBUbm8PamZQ',
        callback: googleData => {
        console.log('google sheet data --->', googleData)
      },
      simpleSheet: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">React + Google Sheets Demo</h1>
        </header>
      </div>
    );
  }
}

export default {Task};


// import './App.css';
// import Task from './task'

// function App() {
//   return (
//     <div className="App">
//       <Task/>
//     </div>
//   );
// }

// export default App;
