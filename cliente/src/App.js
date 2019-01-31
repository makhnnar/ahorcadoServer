import React, { Component } from 'react';
import Loading from './loadingview/Loading';
import GameView from './gameview/main/GameView';
import Inicio from './gameview/setwords/Inicio';
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="App"> 
      	<Loading/> 
      </div>
    );
  }
}

