import React, { Component } from 'react';
//import Signupcss from './Signup.css';
import {BrowserRouter as Redirect, Router, Route, Link } from "react-router-dom";

const cpersona = 'http://localhost:3005/crearpersona';
const cusuario = 'http://localhost:3005/crearusuario';

class Signup extends Component {

  constructor(props){
		super(props);
		this.state={
				persona:[],
				id1:0,
				usuario:[],
				id2:0,
				render:false,
				nombre: '',
        nickname: '',
        fecha: 0,
				email: '',
				pass: ''
		  }
  	}

  onPressItem = (nombre,nickname,fecha)=>{
		console.log('presiono');
		console.log('Nombre: '+nombre+', Usuario: '+nickname+', Fecha: '+fecha);
 		/*fetch(
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
      );*/
	}

	handleNombre(text){
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
		console.log('nombre: '+this.state.nombre+', nickname: '+this.state.nickname+', Fecha: '+this.state.fecha+', Email: '+this.state.pass+', Pass: '+this.state.pass);
	}
    
  render() {
    return (
      <div className="containerr">
					<input placeholder="Ingrese su Nombre" type="text" onChange={(text) => {this.handleNombre(text) }}/>
					<input placeholder="Ingrese su Usuario" className="nickname" name="" type="text" onChange={(text) => {this.handleNickname(text) }}/><br/>
					<input type="date" className="fecha" name="fecha" onChange={(text) => {this.handleFecha(text) }}/>
					<input placeholder="Ingrese su Email" className="email" type="email" name="email" onChange={(text) => {this.handleEmail(text) }}/><br/>
					<input placeholder="Ingrese una Contraseña" className="pass" type="text" name="pass" onChange={(text) => {this.handlePass(text) }}/>
					<input placeholder="Repita la Contraseña" className="pass2" type="text" /><br/>
					<input onPress={this.onPressItem} type="submit" value="Suscribir" />
					<button onPress={this.onPressItem} type='submit' >Enviar</button>
					<button onPress={this.onPressItem} className="boton">Suscribir</button>
					<hr/>
        	<Link className="boton" to="/Login">Volver</Link><br/>
      </div>
    );
  }
}

export default Signup;