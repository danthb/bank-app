import React from 'react';
/* import { UserContext } from '../context' */
import { Card } from '../../../src/context'

export default function Home() {
    return (
        <Card
            bgcolor="black"
            txtcolor='white'
            header='Badbank Landing Page'
            title='Welcome to the Bank'
            text='You can use this Bank'
            body={(<img src='bank.png' className='img-fluid'
            alt="Responsive" fill= 'red' />)}
        />
    )
}