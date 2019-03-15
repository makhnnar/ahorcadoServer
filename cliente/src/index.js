import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './views/login/Login';
import Forgot from './views/forgot/Forgot';

ReactDOM.render(
		<App />, 
		document.getElementById('container')
);

serviceWorker.unregister();
