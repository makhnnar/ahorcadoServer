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

const cpersona = 'http://localhost:3005/crearpersona';
const cusuario = 'http://localhost:3005/crearusuario';

class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value:'',
			name:'',
			nickname:'',
			date:''
		};
		//bindeo de los eventos
		this.handleChange = this.handleChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleNicknameChange = this.handleNicknameChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
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
						nombre:this.state.name,
						nickname:+this.state.nickname,
						fecha:this.state.date
				})
			}
		).then(
			(res) => res.json()
		).then(
			(data) => {
					let detalles = data.data;
					let render = true;
					this.setState({cpersona,render});
			}
		).catch(
			(error) => { 
					console.log('Error:'+error);
					console.log('error en mostrar detalles');
			}
		);
	}

	handleNameChange(event) {
		this.setState({name: event.target.value});
	}

	handleNicknameChange(event) {
		this.setState({nickname: event.target.value});
	}

	handleDateChange(event) {
		this.setState({date: event.target.value});
	}

	handleChange(event) {
		this.setState({value: event.target.value});
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
			<form onSubmit={this.handleSubmit}>
				<label>
					Value:
					<input 
						type="text" value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Name:
					<input 
						type="text" value={this.state.name}
						onChange={this.handleNameChange}
					/>
				</label>
				<label>
					Nickname:
					<input 
						type="text" value={this.state.nickname}
						onChange={this.handleNicknameChange}
					/>
				</label>
				<label>
					Fecha:
					<input 
						type="text" value={this.state.date}
						onChange={this.handleDateChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Signup;