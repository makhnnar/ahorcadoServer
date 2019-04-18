import React, { Component } from 'react';
import Logincss from './Login.css';
import {BrowserRouter as Redirect, Router, Route, Link } from "react-router-dom";

const buscarusuario = 'http://localhost:3005/loguear';

class Login extends Component {
  constructor(props) {
		super(props);
		this.state = {
			email:'',
		  pass:''
		};
		//bindeo de los eventos
		this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  loguin1 = () => {
		fetch(
      buscarusuario,
			{
				method: 'POST',
				headers:{
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				},
				body:JSON.stringify({
          email:this.state.email,
          pass:this.state.pass
				})
			}
		).then(
			(res) => res.json()
		).then(
			(response) => {
				console.log('entro '+JSON.stringify(response.data));
				//let detalles = DB.DB;
				//let render = true;
				//this.setState({detalles,render});
			}
		).catch(
			(error) => { 
					console.log('Error:'+error);
					console.log('error en mostrar detalles');
			}
		);
	}

  handlePasswordChange(event) {
		this.setState({pass: event.target.value});
	}
  
  handleEmailChange(event) {
		this.setState({email: event.target.value});
	}

	handleSubmit(event) {
		alert('Nuestros valores de los campos de texto: ' + JSON.stringify(this.state));
		this.loguin1();
		event.preventDefault();
	}
  
  render() {
    
    return (
      <div className="container">
      	<div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input 
              placeholder="Ingrese su correo"
              type="email" value={this.state.email}
              onChange={this.handleEmailChange}
            /><br/>
          </label><br/>
          <label>
            Clave:
            <input
              placeholder="Ingrese su contraseña" 
              type="text" value={this.state.pass}
              onChange={this.handlePasswordChange}
            /><br/>
          </label>
          <input type="submit" value="ENVIAR" /><br/>
        </form>
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