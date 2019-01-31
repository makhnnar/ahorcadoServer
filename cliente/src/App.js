import React, { Component } from 'react';
import ButtonImage from './ButtonImage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ButtonImage/>
          <ButtonImage/>
        </header>
      </div>
    );
  }
}

export default App;
