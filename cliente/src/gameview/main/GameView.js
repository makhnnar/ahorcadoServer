import React, { Component } from 'react';
import './GameView.css';

export default class VistaMain extends React.Component {
  render() {
    return (
      <div className='GameView'>
        <div className='inf-oponent'>
          <p>                                     
            Pista  /  N° Oponente  /  Coincidencias / Tiempo    
          </p>
        </div>
        <div className='ingresar-letra'>
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
            Palabra Oculta = ********
          </p>
        </div>
        <div className='state'>
          <p>
            Oponent State = Inactivo
          </p>
        </div>
      </div>
    );
  }
}
