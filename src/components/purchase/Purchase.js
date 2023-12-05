
import React, { useState } from 'react';
import Navbar from '../global/Navbar';
import Footer from '../global/Footer';
import Order from './Order';
import Checkout from './Checkout'

const Purchase = (props) => {

    const [purchase, setPurchase] = useState(false);
    const [orderNumber, setOrderNumber] = useState(0);
    

    const handlePurchaseChange = (number) => {
        setOrderNumber(number);
        setPurchase(!purchase);
    }

    return (
        <div className="purchase">
            <Navbar />
            {!purchase ? <Checkout handlePurchaseChange={handlePurchaseChange} /> : <Order orderNumber={orderNumber}/>}
            <Footer />
        </div>
    )

}

export default Purchase;