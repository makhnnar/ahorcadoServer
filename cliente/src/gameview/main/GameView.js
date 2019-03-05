import React, { 
  Component 
} from 'react';

import './GameView.css';

import { 
  Redirect,
  withRouter,
  Route
} from 'react-router-dom'; 

class GameView extends React.Component {
    
    constructor(props){
      super(props);
      this.state={
        Abandonar:false
      }
    }

    Abandonar = () =>{
      let Abandonar = true;
      this.setState({Abandonar});
    }

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