import React, { Component } from 'react';

import Loading from './loadingview/Loading';

import GameView from './gameview/main/GameView';

import Inicio from './gameview/setwords/Inicio';

import Login from './views/login/Login';

import './App.css'

import Signup from "./views/signup/Signup";

import {
  NavLink,
  HashRouter
} from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
    	<Router>
	      	<div className="App">

							<div className="content">
		            
		            <Route path="/Login" component={Login}/><br/>
		            
		            <Route path="/Signup" component={Signup}/><br/>
	          	
	          	</div>
			
	      	</div>
					
	    </Router>
    );
  }
}

export default App;
