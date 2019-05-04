import React, { Component } from 'react';
import './Inicio.css';
import SocketCliente from '../../socket/SocketCliente';

import { 
  Route,
  Redirect, 
  withRouter
} from 'react-router-dom'; 

class Inicio extends Component {
      
      constructor(props){
        super(props);

        this.state = {
          palabraEnviar:"",
          pistaEnviar:""
        }
      }

      goGameView = () => {
        this.state.palabraEnviar = document.getElementById('palabra').value;
        this.state.pistaEnviar = document.getElementById('pista').value;

        SocketCliente.procesarDatos(this.state.palabraEnviar,this.state.pistaEnviar);

        document.getElementById('palabra').value= '';
        document.getElementById('pista').value = '';
      };

      render() {

      return ( 
        <div className='Inicio'>
          <div className='cajas-text'>
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
          <div className='button-init'>       
            <p
              onClick={ this.goGameView }
            >
              Aceptar y Enviar
            </p>
          </div>
        </div>
        )
      } 
    }
export default Inicio;
