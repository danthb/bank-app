import React, {useState, useEffect, Fragment } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../Auth/useAuth';
import './navbar.css'
/* import { Dropdown } from 'react-bootstrap'; */


export default function Nav() {

    const auth = useAuth();
    const history = useHistory();
    const { logout, users } = useAuth();
    const [currentUser, setCurrentUser] = useState(null)


    useEffect(()=>{
        let user = auth.users.filter(user => user.isLogedU === true)
   
        if (user.length > 0) {
          
          setCurrentUser(user[0])
        }
      },[users])
      const Sign = () => {
        let user = auth.users.filter(user => user.isLogedU === true)
        if (user[0]) {
          logout(user[0])
          setCurrentUser(null)
          history.push('/')
          
        } else {
          history.push('/')
        }
      }

    return (
       
            
        <nav  className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >

            <div className="container-fluid"  >
                <NavLink className="nav-link active" aria-current="page" to="/">BadBank</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" exact to="/">Home</NavLink>
                        </li>
                    </ul>
                {currentUser ?  
                    <Fragment>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/balance">Balance</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/deposit">Deposit</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/withdraw">Withdraw</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/alldata">All Data</NavLink>
                        </li>
                    </ul> 
              
                    </Fragment>
                            : <Fragment> </Fragment>}
                    {!currentUser ? <Fragment>
                        <ul className="navbar-nav me-end mb-2 mb-lg-0">
                            <li type="button" className="btn btn-outline-primary nav-item  custom">
                            <NavLink className="nav-link" to="/createaccount">Create Account</NavLink>
                            </li>
                            </ul>
                        </Fragment>
                    : <Fragment></Fragment>}
                    <ul className="navbar-nav me-end mb-2 mb-lg-0">   
                        <dl/>
                        <li type="button"   className="btn btn-outline-primary nav-item  custom">
                            <NavLink className="nav-link" to="/login" onClick={Sign}>{currentUser ? 'Logout' : 'Login'}</NavLink>   
                        </li>
                    </ul>
                </div>

            </div>


        </nav>
        
    );
}