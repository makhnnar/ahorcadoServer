import React, { Component } from 'react';
import './Css/ButtonImage.css';


export default class ButtonImage extends React.Component {
  render() {
    return (
      <div className="boton">
        <div className="img">
            <img src={imagenTest} alt="Img" height="35" width="35"/>
        </div>
        <div className="textoBoton">
          <p>
            JUGAR
          </p>
        </div>
      </div>
    );
  }
}

