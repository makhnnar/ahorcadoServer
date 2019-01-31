import React, { Component } from 'react';
import './App.css';
import { createNavigator,
  SwitchRouter,
  SceneView } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import Login from './views/login/Login.js'
import Alone from './views/alone/Alone.js'
import Forgot from './views/forgot/Forgot.js'
import Signup from './views/signup/Signup.js'
import Vs from './views/vs/Vs.js'
import Wellcome from './views/wellcome/Wellcome.js'

const MyNavigator = createSwitchNavigator(routes);

const App = createBrowserApp(MyNavigator);

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Login/>
      </div>
    );
  }
}

const AppNavigator = createNavigator(
  SidebarView,
  SwitchRouter({
    Login,
    Alone,
    Forgot,
    Signup,
    Vs,
    Wellcome
  }),
  {}
);

const App = createBrowserApp(AppNavigator);
export default App;
