import React, { Suspense, lazy }  from 'react';
import {BrowserRouter as Switch} from 'react-router-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import { UserContext } from './context';
import './index.css';


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


export default function App() {

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