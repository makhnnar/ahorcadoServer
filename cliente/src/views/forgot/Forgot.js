import React, { Component } from 'react';
//import Forgotcss from './Forgot.css';
import {BrowserRouter as Redirect, Router, Route, Link } from "react-router-dom";

class Forgot extends Component {

  render() {
    return (
      <div className="containerrr">
        <input type="text" value="Usuario"/>
      	<input type="text" value="Nueva clave"/>
      	<button>Submit</button>
        <hr/>
        <Link to="/Login">Volver al login</Link><br/>
      </div>
    );
  }
}

export default Forgot;
