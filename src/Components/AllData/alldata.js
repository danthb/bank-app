import React, { useContext, Fragment } from "react";
import { AuthContext } from "../Auth/AuthProvider";



export default function AllData() {
    const auth = useContext(AuthContext);  
    return (
        <Fragment>
            <h5>All Data</h5>
                <table className="table">
                    <thead>
                    <tr >
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Balance</th>
                    </tr>
                    </thead>
                    <tbody >
                    {
                        auth.users.map((item, key) => (
                        <tr key={key}>
                            <th scope="row">{key + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.balance}</td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>  
        </Fragment>
       
    )
}