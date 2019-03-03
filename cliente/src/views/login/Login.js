import React, {
   Component 
} from 'react';

import Logincss from './Login.css';

import { 
  Route, 
  Redirect,
  withRouter
} from "react-router-dom";

class Login extends Component {
  
  constructor(props){
    super(props);
    this.state={
        condicion:false
      }
  }
    
  redirigir = () => {
      let condicion=true;
      this.setState({condicion});
  }
  
  render() {
    //alert(this.state.condicion);
    return (
      <div className="container">
      	<div className="login">
          <Route exact path="/login" render={
              () => (
                this.state.condicion?
                  <Redirect to="/signup"/>
                  :
                  <div>
                    <input type="email" placeholder="Ingrese su correo"/><br/>
                    <input type="text" placeholder="Ingrese su contraseña"/><br/>
                    <button>Login</button><br/>
                    <hr/>
                    <hr/>
                    <button><img src=""/></button><br/>
                    <button><img src=""/></button><br/>
                    <hr/>
                    <button onClick={this.redirigir}>Registrar</button><br/>
                  </div>
              )
          }/>
          

      	</div>
      </div>
    );
  }
}

export default Login;