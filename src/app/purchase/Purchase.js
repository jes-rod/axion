'use client'
import React, { useState } from 'react';
import Order from './Order';
import Checkout from './Checkout'

const Purchase = () => {

    const [purchase, setPurchase] = useState(false);
    const [orderNumber, setOrderNumber] = useState(0);
    

    const handlePurchaseChange = (number) => {
        setOrderNumber(number);
        setPurchase(!purchase);
    }

    return (
        <div className="purchase">
            {!purchase ? <Checkout handlePurchaseChange={handlePurchaseChange} /> : <Order orderNumber={orderNumber}/>}
        </div>
    )

}

export default Purchase;