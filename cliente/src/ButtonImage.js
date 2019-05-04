import React, { Component } from 'react';

export default class ButtonImage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text:""
    }
  }

  prueba = () => {
    alert(this.state.text);
  }


  render() {
    return (
      <div>
        <div className="text">
          <input
            value={this.state.text}
            type='text'  
            id='letra'
            placeholder='Letra'
          />

          <button
              onClick = { this.prueba }
            >
              Imprimir
            </button>
        </div>
      </div>
    );
  }
}

