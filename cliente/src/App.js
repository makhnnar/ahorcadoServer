import React, { Component } from 'react';

import Loading from './loadingview/Loading';

import GameView from './gameview/main/GameView';

import Inicio from './gameview/setwords/Inicio';

import Login from './views/login/Login';

import './App.css'

import Signup from "./views/signup/Signup";

import { 
	BrowserRouter as Router,
	Route,
	Link
 } from "react-router-dom";

class App extends Component {
  render() {
    return (
    	<Router>
	      	<div className="App">

							<div className="content">
		            
		            <Route exact path="/login" component={Login}/><br/>
		            
		            <Route path="/signup" component={Signup}/><br/>
	          	
	          	</div>
			
	      	</div>

	    </Router>
    );
  }
}

export default App;
