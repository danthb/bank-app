import ReactDOM from 'react-dom';
import React from 'react';
import App from './App'
import AuthProvider from './Components/Auth/AuthProvider';
import './index.css';




/* const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(domain)
console.log(clientId) */


ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>
  ,
    document.getElementById('root')
  );

  /* reportWebVitals(); */


