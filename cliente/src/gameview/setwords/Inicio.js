import React, { Component } from 'react';
import './Inicio.css';

export default class Inicio extends React.Component {
  render() {
    return (
      <div className='Inicio'>
        <div className='cajas'>
          <input 
            id='palabra'
            placeholder='Palabra a adivinar'
            type='text'
          />
          <input 
            id='pista' 
            type='text' 
            placeholder='Pista' 
          />
        </div>
        <div className='boton'>
          <p>
            Aceptar
          </p>
        </div>
      </div>
    );
  }
}
