import React, { Fragment, useEffect, useState } from 'react';
/* import { useHistory, useLocation } from "react-router-dom"; */
import BankForm from '../BankForm/BankForm';
import useAuth from "../Auth/useAuth"

export default function Login() {
    
/*     const [show, setShow]= useState(true);
    const history = useHistory();
    const location = useLocation(); */
   /*  const previusURL = location.state?.from; */

    const auth = useAuth();
    const [currenUser, setCurrentUser] = useState('')
    const [userNotFound, setUserNotFound] = useState(false)
    const { login, users } = useAuth();
    function findlogedUser(){
        let userLoged = auth.users.filter(user => user.isLogedU === true)
        if (userLoged.length > 0) {
          setCurrentUser(userLoged[0])
        } else {
          setCurrentUser(false)
        }
      }

    useEffect(() => {
        findlogedUser()
      }, [users])
  
    function handle(data) {
    
        /* auth.login(); */
        /* history.push(previusURL || '/balance') */
        let user = auth.users.filter(user => user.email === data.email)
        if ( user.length > 0){
        let index = auth.users.indexOf(user[0])
        auth.users[index].isLogedU = true
        login(user[0])
        setCurrentUser(user)
        return true
        } else {
        setUserNotFound(true)
        setTimeout(() =>{
            setUserNotFound(false)
        }, 2000)
        }
        console.log(currenUser)
    }
    return (
      
            <Fragment>
            {
              !currenUser ?
              <Fragment>
                <BankForm
                  bgcolor="secondary"
                  label="Login"
                  handle={handle}
                  hideAmount={true}
                  successButton="Try Again"
                />
              {
                userNotFound &&
                <p>Please register</p>
              }
              </Fragment>
              : <Fragment></Fragment>
            }
            </Fragment>
        
    )
    
}
