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



<<<<<<< HEAD

/* const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(domain)
console.log(clientId) */

function Spa() {
/*   const auth = useAuth(); */
  return (
    
      <Router>
       <Switch>
          <Suspense fallback = {<div>loading...</div>}>
            <NavBar />
            <div>
              <UserContext.Provider value={null}>
                <div className="container" style={{ padding: "20px" }}>
                  <Route path='/' exact component={Home} /> 
                  <PublicRoute path='/createaccount' component={CreateAccount} />
                  <PublicRoute path='/login' component={Login}/>
            
                  <PrivateRoute exact path='/deposit' component={Deposit} />
                  <PrivateRoute exact path='/withdraw' component={Withdraw} />
                  <PrivateRoute exat path='/balance' component={Balance} />
                  <PrivateRoute path='/alldata' component={AllData} />
                  {/* <Route path='*' component={NotFound} /> */}
                </div>
              </UserContext.Provider>
            </div>
          </Suspense>
        </Switch>
      </Router>
  
    )
}
=======
>>>>>>> NewFeature
ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>
  ,
    document.getElementById('root')
  );

  /* reportWebVitals(); */


