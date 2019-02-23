import React, { Component } from 'react';
import './App.css'

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Loading from './loadingview/Loading';
import GameView from './gameview/main/GameView';
import Inicio from './gameview/setwords/Inicio';
import ButtonImage from './ButtonImage';


export default class App extends React.Component {
  render() {
    return (
    	<HashRouter>
      		<div className="App">
      			<h1>Ahorcado App</h1>
      			<ul className="header">
            		<li><NavLink to="/">GameView</NavLink></li>
            		<li><NavLink to="/Inicio">Inicio</NavLink></li>
            		<li><NavLink to="/ButtonImage">ButtonImage</NavLink></li>
            		<li><NavLink to="/Loading">Loading</NavLink></li>
          		</ul>
          	<div className="content">
          		<Route exact path="/" component={GameView}/>
            	<Route path="/Inicio" component={Inicio}/>
            	<Route path="/ButtonImage" component={ButtonImage}/>
            	<Route path="/Loading" component={Loading}/>
          	</div>
      	</div>
      </HashRouter>
    );
  }
}
