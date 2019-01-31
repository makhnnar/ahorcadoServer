import React, { Component } from 'react';
import './Loading.css';
import imagenTest from './1amw.gif'

export default class Loading extends React.Component {
  render() {
    return (
      <div className='Loading'>
        <div className='img'>
            <img src={imagenTest} alt="Img" height="400" width="400"/>
        </div>
        <div className='texto'>
          <p>
            Cargando
          </p>
        </div>
      </div>
    );
  }
}

