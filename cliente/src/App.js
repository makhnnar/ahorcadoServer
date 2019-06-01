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

import Login from './views/login/Login';
import Signup from "./views/signup/Signup";
import Forgot from "./views/forgot/Forgot";
import Alone from "./views/alone/Alone";
import Vs from "./views/vs/Vs";
import Wellcome from './views/wellcome/Wellcome';

class App extends React.Component {
  render() {
    return (
    	<BrowserRouter>
    		<Switch>
    			
          <Route exact path="/Loading" component={Loading}/>

          <Route path="/Wellcome" component={Wellcome}/>
    			
          <Route path="/Inicio" component={Inicio}/>
    			
          <Route path="/GameView" component={GameView}/>
    		  
          <Route path="/Login" component={Login}/>
            
          <Route path="/Signup" component={Signup}/>

          <Route path="/Forgot" component={Forgot}/>

          <Route path="/Alone" component={Alone}/>
          
          <Route path="/Vs" component={Vs}/>
        
        </Switch>
    	</BrowserRouter>
    );
  }
}

export default App;
