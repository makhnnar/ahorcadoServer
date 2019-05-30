import React, { Component } from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import SocketCliente from '../SocketCliente';
import * as reduxActions from '../actions';
import { 
  Redirect,
  withRouter,
  Route
} from 'react-router-dom';

import './Wellcome.css';

class Wellcome extends Component {
  constructor(props){
    super(props);

    this.state = {
        mensaje:"",
        goInicio:false
    }
  }

  componentDidMount(){
    SocketCliente.conectarServer((socket,mensaje) => {
        this.props.dispatch(reduxActions.socket(socket));
        this.setState({mensaje})
    })

    SocketCliente.iniciarJuego(this.props.socket,(id,numero,numCuarto) => {
        this.props.dispatch(reduxActions.idNumJugador(id,numero));
        this.props.dispatch(reduxActions.numSala(numCuarto));
    })
  }


  goInicio = () => {
    let goInicio = true;
    this.setState({goInicio});
  }

  render() {
    return (      
      <div className="App">
      	<div className='Mensaje'>
      		<p>
             Mensaje: {this.state.mensaje} 
          </p>
      	</div>
        <div className='ID'>
          <p>
            ID: {this.props.id}
          </p>
        </div>
        <div className='numeroJugador'>
          <p>
            Numero de Jugador:{this.props.numeroJugador}
          </p>
        </div>
         {this.state.goInicio && <Redirect to="/Inicio"/>}
      </div>
    );
  }
}

Wellcome.propTypes = {
  id:PropTypes.string.isRequired,
  numCuarto:PropTypes.number.isRequired,
  numeroJugador:PropTypes.number.isRequired,
  socket:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  id:state.ahorcadoApp.id,
  numCuarto:state.ahorcadoApp.numCuarto,
  numeroJugador:state.ahorcadoApp.numeroJugador,
  socket:state.ahorcadoApp.socket
})

export default connect(mapStateToProps)(Wellcome)