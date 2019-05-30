import React, { Component } from 'react';
import './Inicio.css';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import SocketCliente from '../socket/SocketCliente';
import * as reduxActions from '../actions';
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

        SocketCliente.procesarDatos
        (
          this.props.socket,
          (palabraEnviar,pistaEnviar) => {
            this.props.dispatch(reduxActions.palabraEnviar(palabraEnviar,pistaEnviar))
          },
          this.state.palabraEnviar,
          this.state.pistaEnviar
        );

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

Inicio.propTypes = {
  socket:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  socket:state.ahorcadoApp.socket
})

export default connect(mapStateToProps)(Inicio);
