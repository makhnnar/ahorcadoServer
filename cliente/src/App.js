import React, { Component } from 'react';
import './App.css'

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Loading from './loadingview/Loading';
import GameView from './gameview/main/GameView';
import Inicio from './gameview/setwords/Inicio';

class App extends React.Component {
  render() {
    return (
    	<BrowserRouter>
    		<Switch>
    			<Route exact path="/" component={Loading}/>
    			<Route path="/Loading" component={Loading}/>
    			<Route path="/Inicio" component={Inicio}/>
    			<Route path="/GameView" component={GameView}/>
    		</Switch>
    	</BrowserRouter>
    );
  }
}

export default App;