import ReactDOM from 'react-dom';
import React, { Suspense, lazy }  from 'react';
import {BrowserRouter as Switch} from 'react-router-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import { UserContext } from './context';
import AuthProvider from './Components/Auth/AuthProvider';
import './index.css';
/* import useAuth from './Components/Auth/useAuth';
 */
/* import { Auth0Provider } from "@auth0/auth0-react"; */
/* import reportWebVitals from './reportWebVitals'; */


const NavBar        = lazy(() => import('./Components/NavBar/navbar')); 
const Home          = lazy(() => import('./Components/Home/home'));
const CreateAccount = lazy(() => import('./Components/CreateAccount/createaccount'));
const Login         = lazy(() => import('./Components/Login/login'));
const Deposit       = lazy(() => import('./Components/Deposit/deposit'));
const Withdraw      = lazy(() => import('./Components/WithDraw/withdraw'));
const Balance       = lazy(() => import('./Components/Balance/balance'));
const AllData       = lazy(() => import('./Components/AllData/alldata'));
const PrivateRoute = lazy(() => import('./Components/Routers/PrivateRoute'))
const PublicRoute  = lazy(() => import('./Components/Routers/PublicRoute'))
/* const NotFound      = lazy(() => import('./Components/NotFound/notfound')); */


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
              <UserContext.Provider>
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
ReactDOM.render(
  <AuthProvider>
    <Spa />
  </AuthProvider>
  ,
    document.getElementById('root')
  );

  /* reportWebVitals(); */


