import React, { Component } from 'react';
import Logincss from './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="container">
      	<div className="login">
      		<input type="email" value="Ingrese su correo"/><br/>
      		<input type="text" value="Ingrese su contraseña"/><br/>
      		<button>Login</button><br/>
      		<hr/>
      		<link toRoute="Profile" params={{ name: "jamie" }}>
            recuperar
          </link>
      		<hr/>
      		<button><img src=""/></button><br/>
      		<button><img src=""/></button><br/>
      		<hr/>
      		<a href="">Registrar</a><br/>
      	</div>
      </div>
    );
  }
}

export default Login;