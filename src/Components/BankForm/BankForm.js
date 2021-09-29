import React, { Fragment, useState, useContext, useEffect } from 'react';
import { AuthContext } from "../Auth/AuthProvider";
import {Card} from '../../context'
export default function BankForm({
  bgcolor,
  bgheader,
  label,
  handle,
  hideAmount,
  successButton
}){
  const auth = useContext(AuthContext); 
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [amount, setAmount]       = useState('');
  const [balance, setBalance] = useState('');
  const [userLoged, setUserLogged] = useState('');

  function getBalance(){
    let userLoged = auth.users.filter(user => user.isLogedU === true);
    console.log('hiiiii')
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
      console.log('hiiiii')
      getBalance()
    }
  }, [show])

  function validateData(field, label){
    if (!field) {
      console.log('hiiiii')
      setStatus('Error: missing ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }
  function handleBankForm(){
    
    if (hideAmount) {
      if (label !== 'Login') {
        if (!validateData(name,     'name')) return;
      }
      if (!validateData(email,    'email'))    return;
      if (!validateData(password, 'password')) return;
    } else {
      if (!validateData(amount, 'amount')) return;
    }
    let data = {
      name,
      email,
      password,
      amount
    }
    handle(data)
    setShow(false);
    console.log('user created')
    console.log(data)
    console.log(show)
    console.log(status)
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(amount)
    console.log(balance)
    console.log(userLoged)
    console.log(hideAmount)
    console.log(label)
    console.log(balance)
    console.log(userLoged)
  }  
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setAmount('');
    setShow(true);
    console.log('hiiiii')
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
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
            </Fragment>
            }
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
          </Fragment>
          :
          <Fragment>
            Balance: ${userLoged ? balance : "Login first"} <br/>
            <br />
            {label + ' Amount'}
            <br />
            <input type="input" className="form-control" id="amount" placeholder={label + ' Amount'} value={amount} onChange={e => setAmount(Number(e.currentTarget.value))}/><br/>
          </Fragment>
        }
        <button type="submit" className="btn btn-light" disabled={(!hideAmount && (label === 'Withdraw' && !balance || !userLoged)) ? true : (balance && balance <= 0) } onClick={handleBankForm}>{label}</button>
        </Fragment>
      ):(
        <Fragment>
        <h6>Message</h6>
        <button type="submit" className="btn btn-light" onClick={clearForm}>{successButton}</button>
        </Fragment>
      )}
    />
  )
}