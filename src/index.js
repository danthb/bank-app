import ReactDOM from 'react-dom';
import React, { Suspense, lazy }  from 'react';
import {BrowserRouter as Switch} from 'react-router-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import { UserContext } from './context';
import App from './App'
import AuthProvider from './Components/Auth/AuthProvider';
import './index.css';
/* import useAuth from './Components/Auth/useAuth';
 */
/* import { Auth0Provider } from "@auth0/auth0-react"; */
/* import reportWebVitals from './reportWebVitals'; */



ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>
  ,
    document.getElementById('root')
  );

  /* reportWebVitals(); */


