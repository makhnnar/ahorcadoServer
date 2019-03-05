import React, { Component } from 'react';
import './Loading.css';
import imagenTest from './1amw.gif'

import { 
  Route, 
  Redirect,
  withRouter
} from "react-router-dom";

class Loading extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
        toInicio:false
    }
  }

  goInicio = () =>{
    let toInicio = true;
    this.setState({toInicio});
  }
    render() {
      return (
        <div className='Loading'>
              <div className='img'
                onClick={this.goInicio}
                >
                  <img src={imagenTest} className="logo" alt="Img" height="150" width="150"/>
              </div>

                <div className='texto'>
                    <p>
                      Espere.Por Favor
                    </p>
                </div>

              {this.state.toInicio && <Redirect to="/Inicio"/>}
        </div>
      );
    }
  }

export default Loading;