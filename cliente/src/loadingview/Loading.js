import React, { Component } from 'react';
import './Loading.css';
import imagenTest from './1amw.gif'

export default class Loading extends React.Component {
  render() {
    return (
      <div className='Loading'>
        <div className='img'>
            <img src={imagenTest} className="logo" alt="Img" height="100" width="100"/>
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

