import React, { Fragment, useState, useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { AuthContext } from "../Auth/AuthProvider";
import {Card} from '../../context'
export default function BankForm({bgcolor,bgheader,label,handle,hideAmount,successButton}){

  const auth = useContext(AuthContext);
  
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [amount, setAmount]       = useState('');
  const [balance, setBalance] = useState('');
  const [userLoged, setUserLogged] = useState('');

// UserData
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');


  function getBalance(){
    let userLoged = auth.users.filter(user => user.isLogedU === true);
    console.log(userLoged)
    if (userLoged.length > 0) {
      setBalance(userLoged[0].balance)
      setUserLogged(true)
    } else {
      setBalance(false)
      setUserLogged(false)
    }
  }
  useEffect(() => {
    if (!hideAmount) {
      getBalance()
    }
  }, [show])

  function validateDataUser(field, label){
    if (!field) {
      setStatus('Please enter ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (label === 'password' && field.length < 8) {
      setStatus('Please enter at least 8 characters');
      setTimeout(() => setStatus(''),3000);
      return false
    }
    return true;
  }
  function handleBankForm(){
    
    if (hideAmount) {
      if (label !== 'Login') {
        if (!validateDataUser(name,     'name')) return;
      }
      if (!validateDataUser(email,    'email'))    return;
      if (!validateDataUser(password, 'password')) return;
    } else {
      if (!validateDataUser(amount, 'amount')) return;
    }
    let dataUser = {name,email,password,amount}
    handle(dataUser)
    setShow(false);
  }
  

  function clean(){
    setName('');
    setEmail('');
    setPassword('');
    setAmount('');
    setShow(true);
  }
  


  
  return(

    
      <Card
            
            bgcolor={bgcolor}
            bgheader={bgheader}
            header={label}
            status={status}
            body={show ? (
           
            
                <Fragment>
                {
                  hideAmount
                  ? <Fragment>
                    {label !== 'Login' &&
                    <Fragment>
                      Name
                        <br />
                        <TextField
                          name='name'
                          id="name"
                          placeholder="Enter name"
                          value={name}
                          onChange={e => setName(e.currentTarget.value)} />
                        <br />
                    </Fragment>
                      }
                      <br />
                      Email <br/>
                      <TextField
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}/>
                      <br />
                      <br />
                      Password<br />
                      <TextField
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)} />
                      <br />
                  </Fragment>
                  :
                  <Fragment>
                    Balance: ${userLoged ? balance : null} <br/>
                    <br />
                    {label + ' Amount'}
                    <br />
                      <input
                        type="input"
                        id="amount"
                        placeholder={label + ' Amount'}
                        value={amount}
                        onChange={e => setAmount(Number(e.currentTarget.value))} /><br />
                  </Fragment>
                }
                <br />
                <Button
                  type="submit"
                  title='btn'
                  id='submit'
                  variant="contained"
                  color="primary"
                  disabled={(!hideAmount && (label === 'Withdraw' && (!balance || !userLoged))) ? true : (balance && balance <= 0) } onClick={handleBankForm}>{label}</Button>
                </Fragment>
              ):(
                <Fragment>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={clean}>
                    {successButton}
                  </Button>
                </Fragment>
            
            )}
            />
       

  )
}