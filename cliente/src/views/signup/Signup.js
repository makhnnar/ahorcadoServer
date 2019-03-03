import React, { Component } from 'react';

import { 
  Route, 
  Redirect,
  withRouter
} from "react-router-dom";

class Signup extends Component {

  constructor(props){
    super(props);
    this.state={
        toLogin:false
    }
  }

  goBack = () =>{
    let toLogin=true;
    this.setState({toLogin});
  }

  render() {
    return (
      <div className="">
        <Route exact path="/signup" render={
              () => (
                this.state.toLogin?
                  <Redirect to="/login"/>
                  :
                  <div>
                    <input placeholder="Nombre" type="text"/>
                    <input placeholder="Usuario" type="text"/>
                    <input placeholder="" type="date"/>
                    <input placeholder="Contraseña" type="text"/>
                    <input placeholder="Email" type="email"/>
                    <button>Submit</button>
                    <button onClick={this.goBack}>Go Back</button>
                  </div>
              )
          }/>
      </div>
    );
  }
}

export default Signup;