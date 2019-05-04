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
import Wellcome from './views/wellcome/Wellcome';

class App extends React.Component {
  render() {
    return (
    	<BrowserRouter>
    		<Switch>
    			<Route exact path="/" component={Wellcome}/>
    			<Route path="/Loading" component={Loading}/>
    			<Route path="/Inicio" component={Inicio}/>
    			<Route path="/GameView" component={GameView}/>
    		</Switch>
    	</BrowserRouter>
    );
  }
}

export default App;