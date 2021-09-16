import React, { Fragment, useState, useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import BankForm from "../BankForm/BankForm";

export default function Withdraw() {
    const [withDrawError, setWithDrawError] = useState(false)
    const auth = useContext(AuthContext);  
    const handleWithdraw = (data) => {
      let user = auth.users.filter(user => user.isLogedU === true)
      let index = auth.users.indexOf(user[0])
      let balance = auth.users[index].balance
      console.log(balance);
      console.log(data.amount);
      if (balance > 0 && balance >= data.amount) {
        auth.users[index].balance -= data.amount
      } else {
        setWithDrawError(true)
        setTimeout(() => {
          setWithDrawError(true)
        }, 2000);
      }
      return true
    }
    return (
      <Fragment>
        <BankForm
        bgcolor="info"
        label="Withdraw"
        handle={handleWithdraw}
        hideAmount={false}
        successButton="Make another withdraw"
      />
      {
        withDrawError &&
        <p>You can't withdraw that amount</p>
      }
    </Fragment>
    )
       
}