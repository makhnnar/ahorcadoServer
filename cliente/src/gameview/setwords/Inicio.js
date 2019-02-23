import React, { Component } from 'react';
import './Inicio.css';

export default class Inicio extends React.Component {
  render() {
    return (
      <div className='Inicio'>
        <div className='cajas-text'>
          <input 
            placeholder='Palabra a adivinar'
            type='text'
          />
          <input  
            type='text' 
            placeholder='Pista' 
          />
        </div>
        <div className='button-init'>       
          <p>
            Aceptar y Enviar
          </p>
        </div>
      </div>
    );
  }
}
