import React, { Component } from 'react';
import './ButtonImage.css';
import imagenTest from './nature-115611.jpg'

class ButtonImage extends Component {
  render() {
    return (
      <div className="boton">
        <div className="imagen">
            <img src={imagenTest} alt="Img" height="35" width="35"/>
        </div>
        <div className="texto">
          <p>
            JUGAR
          </p>
        </div>
      </div>
    );
  }
}

export default ButtonImage;
