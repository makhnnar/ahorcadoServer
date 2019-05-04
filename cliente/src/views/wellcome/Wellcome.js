import React, { Component } from 'react';
import SocketCliente from '../../socket/SocketCliente';

import { 
  Redirect,
  withRouter,
  Route
} from 'react-router-dom';

import './wellcome.css';

class Wellcome extends Component {
  constructor(props){
    super(props);

    this.state = {
        mensaje:"",
        id:"",
        numeroJugador:"",
        numCuarto:"",
        goInicio:false
    }
  }

  goInicio = () => {
    let goInicio = true;
    this.setState({goInicio});
  }


  componentDidMount(){   
    SocketCliente.conectarServer((mensaje) => {
            this.setState({mensaje});
      }
    );

    SocketCliente.iniciarJuego((myId,numeroJugador,numCuarto) => {
        this.setState({id:myId,numeroJugador:numeroJugador,numCuarto:numCuarto});
      }
    );

    SocketCliente.jugarAhora(() => {

        this.goInicio();

    });
  };

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
            ID: {this.state.id}
          </p>
        </div>
        <div className='numeroJugador'>
          <p>
            Numero de Jugador: {this.state.numeroJugador}
          </p>
        </div>
         {this.state.goInicio && <Redirect to="/Inicio"/>}
      </div>
    );
  }
}

export default Wellcome;