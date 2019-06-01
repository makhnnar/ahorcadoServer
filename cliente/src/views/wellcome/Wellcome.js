import React, { 
  Component 
} from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SocketCliente from '../../socket/SocketCliente';
import * as reduxActions from '../../actions';


class Wellcome extends Component {
      
      constructor(props){
        super(props);

        this.state = {
          mensaje:""
        }
      }

      componentDidMount(){
      	console.log('hola');
      	SocketCliente.conectarServer((socket) => {
      		this.props.dispatch(reduxActions.socket(socket))
      	})
      
      	console.log(JSON.stringify(this.props));

      	/*SocketCliente.iniciarJuego(this.props.socket,(id,numJugador,numSala) => {
      		this.props.dispatch(reduxActions.idNumJugador(id,numJugador))
      		this.props.dispatch(reduxActions.numSala(numSala))
      	})*/
      }
      render() {
	      return ( 
	        <div className='Wellcome'>
	          <div>
	           	<p>                                     
	                ID:{this.props.id}    
	            </p>
	            <p>                                     
	                 Nª Sala:{this.props.numSala}    
	            </p>
	          </div>
	        </div>
	        )
	      } 
    }

Wellcome.propTypes = {
  socket:PropTypes.object.isRequired,
  id:PropTypes.string.isRequired,
  numSala:PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  socket:state.ahorcadoApp.socket,
  id:state.ahorcadoApp.id,
  numSala:state.ahorcadoApp.numCuarto
})

export default connect(mapStateToProps)(Wellcome);
//export default Wellcome;