import 
	React, 
	{ Component } 
from 'react';

//import Signupcss from './Signup.css';

import {
	BrowserRouter as Redirect,
	Router,
	Route,
	Link 
} from "react-router-dom";

const cpersona = 'http://localhost:3005/crear_nuevo_usuario';

class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nombre:'',
      nickname:'',
      fecha:0,
			email:'',
		  pass:''
		};
		//bindeo de los eventos
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleNicknameChange = this.handleNicknameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  createNewUser = () => {
		fetch(
			cpersona,
			{
				method: 'POST',
				headers:{
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				},
				body:JSON.stringify({
					nombre:this.state.nombre,
					nickname:this.state.nickname,
            		fecha:this.state.fecha,
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

	handleNameChange(event) {
		this.setState({nombre: event.target.value});
	}

	handleNicknameChange(event) {
		this.setState({nickname: event.target.value});
  }
  
  handlePasswordChange(event) {
		this.setState({pass: event.target.value});
	}

	handleDateChange(event) {
		this.setState({fecha: event.target.value});
	}

	handleEmailChange(event) {
		this.setState({email: event.target.value});
	}

	handleSubmit(event) {
		/*
			asi como esta consume los valores de forma eficiente. Sigue este mismo esquema
			debes terminar los demas detalles. Borre el resto del codigo ya que no hacian falta
			Completa lo demas, valida tipos de datos, y acomoda estilos. Si vas a utilizar hints
			hazlo usando un esquema vertical, sino, deja los labels. tu problema era que no hacias el this.state.nombrevalor
			para acceder al valor en el fetch, y que obviamente no estabas bindeando los eventos
		*/
		alert('Nuestros valores de los campos de texto: ' + JSON.stringify(this.state));
		this.createNewUser();
		event.preventDefault();
	}

	render() {
		return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input 
              type="text" value={this.state.nombre}
              onChange={this.handleNameChange}
            />
          </label><br/>
          <label>
            Nombre de usuario:
            <input 
              type="text" value={this.state.nickname}
              onChange={this.handleNicknameChange}
            />
          </label><br/>
          <label>
            Fecha de nacimiento:
            <input 
              type="date" value={this.state.fecha}
              onChange={this.handleDateChange}
            />
          </label><br/>
          <label>
            Email:
            <input 
              type="email" value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label><br/>
          <label>
            Clave:
            <input 
              type="text" value={this.state.pass}
              onChange={this.handlePasswordChange}
            />
          </label><br/>
          <input type="submit" value="Submit" />
        </form><hr/>
        <Link className="boton" to="/Login">Volver</Link><br/>
      </div>
		);
	}
}

export default Signup;