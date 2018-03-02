import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuotesPane from './facts.js';
import MapPanes from './mappanes.js';
import Spotlight from './spotlight/spotlight.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapPanes />
        <Spotlight />
        <QuotesPane />
      </div>
    );
  }
}

export default App;
