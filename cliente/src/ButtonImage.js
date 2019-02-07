import React, { Component } from 'react';
import './ButtonImage.css';
import imagenTest from './play.jpg';

export default class ButtonImage extends React.Component {
  render() {
    return (
      <div className="button">
        <div className="img">
            <img src={imagenTest} alt="Img" height="38" width="40"/>
        </div>
        <div className="text">
          <p>
            JUGAR
          </p>
        </div>
      </div>
    );
  }
}

