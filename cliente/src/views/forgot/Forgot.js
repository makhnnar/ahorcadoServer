import React, { Component } from 'react';
//import Forgotcss from './Forgot.css';
import {BrowserRouter as Redirect, Router, Route, Link } from "react-router-dom";

const cpassword = 'http://localhost:3005/cambiar_clave';

class Forgot extends Component {

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

  olvidoContraseña = () => {
		fetch(
			cpassword,
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
				console.log(' '+JSON.stringify(response.data));
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
		this.olvidoContraseña();
		event.preventDefault();
	}

  render() {
    return (
      <div className="containerrr">
        <form onSubmit={this.handleSubmit}>
				<label>
            Correo:
            <input 
              type="text" value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label><br/>
					<label>
            Nueva Contraseña:
            <input 
              type="text" value={this.state.pass}
              onChange={this.handlePasswordChange}
            />
          </label><br/>
          <input type="text" placeholder="Usuario"/><br/>
      	  <input type="text" placeholder="Nueva clave"/>
      	  <button className="boton">Submit</button>
        </form>
        <hr/>
        <Link className="boton" to="/Login">Volver al login</Link><br/>
      </div>
    );
  }
}

export default Forgot;
