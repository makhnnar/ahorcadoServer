import React, { 
  Component 
} from 'react';

import './GameView.css';
import SocketCliente from '../../socket/SocketCliente';

import { 
  Redirect,
  withRouter,
  Route
} from 'react-router-dom'; 

class GameView extends Component {
    
    constructor(props){
      super(props);
      
      this.state={
        Abandonar:false,
        palabraRecibir:"",
        pistaRecibir:"",
        palabraOculta:"",
        text:""
      }
    }

    Abandonar = () =>{
      let Abandonar = true;
      this.setState({Abandonar});
    }

    componentDidMount(){     
      SocketCliente.recibirPalabra(
        (palabraRecibir,pistaRecibir,palabraOculta) => {
          this.setState({palabraRecibir,pistaRecibir,palabraOculta});
        } 
      );
    }

    ingresar = () => {
      this.state.text = document.getElementById('letra').value;
      SocketCliente.ingresarLetra(this.state.text,(palabraOculta) => {
          this.setState({palabraOculta});
        }
      );
      document.getElementById('letra').value = '';
    }

    render() {

      return (
        <div className='GameView'>
            <div className ='inf-oponent'>
                <p>                                     
                  Pista:{this.state.pistaRecibir}    
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
                  Palabra Oculta:{this.state.palabraOculta}
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
export default GameView;