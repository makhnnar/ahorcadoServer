import React, { Component } from 'react';

import Loading from './loadingview/Loading';

import GameView from './gameview/main/GameView';

import Inicio from './gameview/setwords/Inicio';

import './App.css'

import Login from './views/login/Login';
import Signup from "./views/signup/Signup";
import Forgot from "./views/forgot/Forgot";
import Alone from "./views/alone/Alone";
import Vs from "./views/vs/Vs";
import Wellcome from "./views/wellcome/Wellcome";

import {
  NavLink,
  HashRouter
} from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
			<div>
				<Router>
					<div className="App">
								
						<Route path="/Login" component={Login}/><br/>
						
						<Route path="/Signup" component={Signup}/><br/>

						<Route path="/Forgot" component={Forgot}/><br/>

						<Route path="/Alone" component={Alone}/><br/>
						
						<Route path="/Vs" component={Vs}/><br/>
						
						<Route path="/Wellcome" component={Wellcome}/><br/>

					</div>
	    	</Router>
			</div>
    );
  }
}

export default App;
/*
<Router>
  	<div className="App">
		<div className="content">
            
            <Route path="/Login" component={Login}/><br/>
            
            <Route path="/Signup" component={Signup}/><br/>
      	
      	</div>
	
  	</div>
</Router>
*/