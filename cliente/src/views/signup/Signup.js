import React, { Component } from 'react';
import Login from '../login/Login';

class Signup extends Component {
  render() {
    return (
      <div className="">
      	<input placeholder="Nombre" type="text"/>
      	<input placeholder="Usuario" type="text"/>
      	<input placeholder="" type="date"/>
      	<input placeholder="Contraseña" type="text"/>
      	<input placeholder="Email" type="email"/>
      	<button>Submit</button>
      </div>
    );
  }
}

export default Signup;