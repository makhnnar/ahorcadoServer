import React, { Component } from 'react';
import './Inicio.css';
import { Route, Redirect, withRouter} from 'react-router-dom'; 

const Inicio = (props) => {
    
      const { history } = props;

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
            <p
              onClick={()=> history.push('./Gameview')}
            >
              Aceptar y Enviar
            </p>
          </div>
        </div>
      );
    }
  
export default withRouter(Inicio);
