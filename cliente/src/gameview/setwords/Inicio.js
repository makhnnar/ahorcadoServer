import React, { Component } from 'react';
import './Inicio.css';

import {
  useNavigation,
  useNavigationKey,
  useFocusState
} from 'react-navigation-hooks';

const { navigate } = useNavigation();

export default class Inicio extends React.Component {

  static navigationOptions = {
    title: "Inicio",
    linkName: "Inicio"
  };

  render() {
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
        <div className='button-init' onPress={() => {
          navigate('GameView');
        }}>
          <p>
            Aceptar y Enviar
          </p>
        </div>
      </div>
    );
  }
}
