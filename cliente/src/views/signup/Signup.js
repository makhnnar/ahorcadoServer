import React, { Component } from 'react';
//import Signupcss from './Signup.css';
import {BrowserRouter as Redirect, Router, Route, Link } from "react-router-dom";

const cpersona = 'http://localhost:3005/crearpersona';
const cusuario = 'http://localhost:3005/crearusuario';

class Signup extends Component {

  constructor(props){
		super(props);
		this.state={
			//	persona:[],
			//	id1:0,
			//	usuario:[],
			//	id2:0,
			//	render:false,
        nickname:'',
        fecha:0,
				email:'',
				pass:'',
				value:'',
				nombre:''
		  }
  	}

  /*onPress = ()=>{
		console.log('presiono');
		console.log('Nombre: '+this.state.nombre+', Usuario: '+this.state.nickname+', Fecha: '+this.state.fecha);
		//alert(JSON.stringify('Nombre: '+this.state.nombre+', Usuario: '+this.state.nickname+', Fecha: '+this.state.fecha));
 		fetch(
	      	cpersona,
	      	{
		    	method: 'POST',
		    	headers:{
		    	'Content-Type': 'application/json',
		    	'Access-Control-Allow-Origin': '*'
		    	},
	        	body:JSON.stringify({
								nombre:nombre,
								nickname:nickname,
								fecha:fecha
	        	})
		    }
		).then(
			(res) => res.json()
		).then(
		    (data) => {
		        let detalles = data.data;
		        console.log(JSON.stringify(data.data));
		        console.log(' ');
		        let render = true;
		        this.setState({cpersona,render});
		    }
		).catch(
        (error) => { 
            console.log('Error:'+error);
            console.log('error en mostrar detalles');
        }
      );
}*/

	/*handleNombre(text){
		this.setState({nombre: text.target.value})
		//alert(JSON.stringify(this.state.nombre));
		//console.log('se cambio el valor del nombre');
	}
	handleNickname(text){
		this.setState({nickname: text.target.value})
		//alert(JSON.stringify(this.state.nickname));
	}
	handleFecha(text){
		this.setState({fecha: text.target.value})
		//alert(JSON.stringify(this.state.fecha));
	}
	handleEmail(text){
		this.setState({email: text.target.value})
		//alert(JSON.stringify(this.state.email));
	}
	handlePass(text){
		this.setState({pass: text.target.value})
		//alert(JSON.stringify(this.state.pass));
		//alert(JSON.stringify('nombre: '+this.state.nombre+', nickname: '+this.state.nickname+', Fecha: '+this.state.fecha+', Email: '+this.state.pass+', Pass: '+this.state.pass));
		//console.log('nombre: '+this.state.nombre+', nickname: '+this.state.nickname+', Fecha: '+this.state.fecha+', Email: '+this.state.pass+', Pass: '+this.state.pass);
	}*/

	handleChange=this.handleChange.bind(this);
	handleChangeNombre=this.handleChangeNombre.bind(this);
	handleSubmit=this.handleSubmit.bind(this);

	handleChange(event){
		this.setState({value: event.target.value});
	}

	handleChangeNombre(event){
		this.setState({nombre: event.target.nombre});
	}

	handleSubmit(event){
		event.preventDefault();
		alert(JSON.stringify('primero: '+this.state.value+', nombre: '+this.state.nombre);
	}
    
  render() {
		//alert(JSON.stringify(this.state.value+' '+this.state.nombre));
		//alert(this.state.value+' '+this.state.nombre);
    return (
      <div className="containerr">
				<form onSubmit={this.handleSubmit} >
					<input type="text" value={this.state.value}
					onChange={this.handleChange}
					/><br/>
					
					<input 
						placeholder="Ingrese su Nombre"
						className="nombre"
						name="nombre"
						type="text"
						value={this.state.nombre}
						onChange={this.handleChangeNombre}
					/>
					<input 
						placeholder="Ingrese su Usuario" 
						className="nickname" 
						name="nickname" 
						type="text"
						value={this.state.nickname}
						onChange={this.handleChangeNickname}
					/><br/>
					<input 
						className="fecha" 
						name="fecha"
						type="date"
						value={this.state.fecha}
						onChange={this.handleChangeFecha}
					/>
					<input 
						placeholder="Ingrese su Email" 
						className="email" 
						name="email" 
						type="email"
						value={this.state.email}
						onChange={this.handleChangeEmail}
					/><br/>
					<input 
						placeholder="Ingrese una Contraseña"
						className="pass"
						name="pass"
						type="text"
						value={this.state.pass}
						onChange={this.handleChangePass}
					/>
					<input
						placeholder="Repita la Contraseña"
						className="pass2"
						name="pass2"
						type="text"
					/><br/>
					<input 
						type="submit"
						value="Suscribir"
					/>
				</form><hr/>
				<Link className="boton" to="/Login">Volver</Link><br/>
      </div>
    );
  }
}

export default Signup;

/*

<div className="containerr">
	<input placeholder="Ingrese su Nombre" className="nombre" name="nombre" type="text"/>
	<input placeholder="Ingrese su Usuario" className="nickname" name="nickname" type="text"/><br/>
	<input className="fecha" name="fecha" type="date"/>
	<input placeholder="Ingrese su Email" className="email" name="email" type="email"/><br/>
	<input placeholder="Ingrese una Contraseña" className="pass" name="pass" type="text"/>
	<input placeholder="Repita la Contraseña" className="pass2" name="pass2" type="text"/><br/>
	<button press={this.onPress} className="boton">Suscribir</button>
	<hr/>
	<Link className="boton" to="/Login">Volver</Link><br/>
</div>

*/