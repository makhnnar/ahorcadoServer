import React, { Component } from 'react';
import './GameView.css';

export default class VistaMain extends React.Component {
  render() {
    return (
      <div className='VistaMain'>
        <div className='informacion'>
          <p>                                     
            Pista / N° Oponente / Coincidencias     
          </p>
        </div>
        <div className='letra'>
          <input
            type='text'  
            id='letra'
            placeholder='Letra'
          />
          <p id ='button'>
            Ingresar
          </p>
        </div>
        <div className='palabraOculta'>
          <p>
            Palabra Oculta ******
          </p>
        </div>
        <div className='state'>
          <p>
            Estado Oponente
          </p>
        </div>
      </div>
    );
  }
}
