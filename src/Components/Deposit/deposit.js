import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import BankForm from "../BankForm/BankForm";

export default function Deposit(){
    const auth = useContext(AuthContext);  
    const handleDeposit = (data) => {
      let user = auth.users.filter(user => user.isLogedU === true)
      let index = auth.users.indexOf(user[0])
      auth.users[index].balance += data.amount
      return true
    }
    return (
      <BankForm
      bgcolor="success"
      label="Deposit"
      handle={handleDeposit}
      hideAmount={false}
      successButton="Make another deposit"
    />
    )
  }