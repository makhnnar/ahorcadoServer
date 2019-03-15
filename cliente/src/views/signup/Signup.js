import React, { Component } from 'react';
//import Signupcss from './Signup.css';
import {BrowserRouter as Redirect, Router, Route, Link } from "react-router-dom";

class Signup extends Component {

  render() {
    return (
      <div className="containerr">
        <input placeholder="Ingrese su Nombre" type="text"/>
        <input placeholder="Ingrese su Usuario" type="text"/><br/>
        <input placeholder="Fecha de Nacimiento" type="date"/>
        <input placeholder="Ingrese su Email" type="email"/><br/>
        <input placeholder="Ingrese una Contraseña" type="text"/>
        <input placeholder="Repita la Contraseña" type="text"/><br/>
        <button>Suscribir</button>
        <hr/>
        <Link to="/Login">Volver</Link><br/>
      </div>
    );
  }
}

export default Signup;