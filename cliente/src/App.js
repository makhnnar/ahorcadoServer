import React, { Component } from 'react';
import './App.css'

import Loading from './loadingview/Loading';
import GameView from './gameview/main/GameView';
import Inicio from './gameview/setwords/Inicio';
import ButtonImage from './ButtonImage';

import AppNavigator from "./Navigator";

import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";

const App = createBrowserApp(AppNavigator);

export default App;


/*export default class App extends React.Component {
  render() {
    return (
      <div className="App"> 
      	<Inicio/> 
      </div>
    );
  }
}*/
