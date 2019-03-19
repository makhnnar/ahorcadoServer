import React, { Component } from 'react';
import Logincss from './Login.css';
import {BrowserRouter as Redirect, Router, Route, Link } from "react-router-dom";

class Login extends Component {
  
  render() {
    
    return (
      <div className="container">
      	<div className="login">
          <input type="email" placeholder="Ingrese su correo"/><br/>
          <input type="text" placeholder="Ingrese su contraseña"/><br/>
          <button className="boton">ENVIAR</button><br/>
          <hr/>
          <Link className="boton" to="/Forgot">Recuperar contraseña</Link>
          <hr/>
          <button></button><br/>
          <button></button><br/>
          <hr/>
          <Link className="boton" to="/Signup">Registrar</Link><br/>
        </div>
      </div>
    );
  }
}

export default Login;
/*
<Route exact path="/Login" render={
  () => (
    this.state.condicion?
    <Forgot/>
    :
    <div>
      <input type="email" placeholder="Ingrese su correo"/><br/>
      <input type="text" placeholder="Ingrese su contraseña"/><br/>
      <button>ENVIAR</button><br/>
      <hr/>
      <button onClick={this.redirigir}>Recuperar contraseña</button>
      <hr/>
      <button><img src=""/></button><br/>
      <button><img src=""/></button><br/>
      <hr/>
      <button onClick={this.redirigir}>Registrar</button><br/>
    </div>
}/>
*/


/*

<Route exact path="/Login" render={
              () => (
                this.state.condicion?
                  <Signup/>
                  :
                  <div>
                    <input type="email" placeholder="Ingrese su correo"/><br/>
                    <input type="text" placeholder="Ingrese su contraseña"/><br/>
                    <button>ENVIAR</button><br/>
                    <hr/>
                    <button >Recuperar contraseña</button>
                    <hr/>
                    <button></button><br/>
                    <button></button><br/>
                    <hr/>
                    <button onClick={this.redirigir}>Registrar</button><br/>
                  </div>
              )
          }/>

*/