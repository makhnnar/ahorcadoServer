import React, { 
  Component 
} from 'react';

import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import './GameView.css';
import SocketCliente from '../../socket/SocketCliente';
import * as reduxActions from '../../actions';

import{ 
  Redirect,
  withRouter,
  Route
} from 'react-router-dom';

class GameView extends Component {
    
    constructor(props){
      super(props);
      
      this.state ={
        Abandonar:false,
        text:""
      }
    }
    
    Abandonar = () =>{
      let Abandonar = true;
      this.setState({Abandonar});
    }

    componentDidMount(){
      SocketCliente.recibirPalabra(this.props.socket,(palabra,pista) => {
        this.props.dispatch(reduxActions.palabraOponent(palabra,pista));
      },(palabraOculta) =>  {
        this.props.dispatch(reduxActions.palabraOculta(palabraOculta));
      })
    }

    ingresar = () => {
      this.state.text = document.getElementById('letra').value;
      SocketCliente.ingresarLetra(this.props.socket,this.state.text,(mostrar) => {
        this.props.dispatch(reduxActions.palabraOculta(mostrar));
      });
      document.getElementById('letra').value = '';
    }

    render() {

      return (
        <div className='GameView'>
            <div className ='inf-oponent'>
                <p>                                     
                  Pista:{this.props.pistaRecibir}    
                </p>
            </div>

            <div className='ingresar-letra'>
                <input
                  type='text'  
                  id='letra'
                  placeholder='Letra'
                />
                <p id ='button' onClick={ this.ingresar }>
                  Ingresar
                </p>
            </div>

            <div className='palabraOculta'>
                <p>
                  Palabra Oculta:{this.props.palabraOculta}
                </p>
            </div>

            <div className='state'>
                <p>
                  Oponent State = Inactivo
                </p>
            </div>

            <button
              onClick={this.Abandonar}
            >
              Abandonar
            </button>

            {this.state.Abandonar && <Redirect to="/Loading"/>}
        </div>
      );
    }
  }

GameView.propTypes = {
  pistaRecibir: PropTypes.string.isRequired,
  palabraOculta: PropTypes.string.isRequired,
  socket:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  pistaRecibir:state.ahorcadoApp.pistaRecibir,
  palabraOculta:state.ahorcadoApp.palabraOculta,
  socket:state.ahorcadoApp.socket
})

export default connect(mapStateToProps)(GameView);