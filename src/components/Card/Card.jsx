import React, { useState } from 'react';
import '../Card/Card.scss'
import { deletePlan } from '../../services/SubscriptionService'
import { getCurrentUser, getUserDetail } from '../../services/UsersService';
import userEvent from '@testing-library/user-event';

function Card()  {
   
    const [name,setName] = useState('Luis Garcia')
    const [address, setAddress] = useState('Calle prueba 12')
    const [zipCode, setZipCode] = useState('280214')
    const [city, setCity] = useState('Madrid')

 
    return (
        <div className='Card'>
            <div className='upper-container'>
            <div className='image-container'>
            </div>
            </div>
            <div className='lower-container'>
                <h4>{ name }</h4>
                <h4>{ address }</h4>
                <h4>{ zipCode }</h4>
                <h4>{ city }</h4>
                <br />
                <button className='button'>Unsubscribe</button>
            </div>
        </div>
    );
};

export default Card;