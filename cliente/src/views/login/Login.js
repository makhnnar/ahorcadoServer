import React, { Component } from 'react';
import Logincss from './Login.css';
import Signup from '../signup/Signup';
import { BrowserRouter as Redirect, Router, Route, Link } from "react-router-dom";

class Login extends Component {
  
  constructor(props){
    super(props);
    this.state={
        condicion:false
      }
  }
    
  redirigir = () => {
      let condicion=true;
      this.setState({condicion});
  }
  
  render() {
    //alert(this.state.condicion);
    return (
      <div className="container">
      	<div className="login">
          <Route exact path="/Login" render={
              () => (
                this.state.condicion?
                  <Signup/>
                  :
                  <div>
                    <input type="email" placeholder="Ingrese su correo"/><br/>
                    <input type="text" placeholder="Ingrese su contraseña"/><br/>
                    <button>Login</button><br/>
                    <hr/>
                    <hr/>
                    <button><img src=""/></button><br/>
                    <button><img src=""/></button><br/>
                    <hr/>
                    <button onClick={this.redirigir}>Registrar</button><br/>
                  </div>
              )
          }/>
          

      	</div>
      </div>
    );
  }
}

export default Login;