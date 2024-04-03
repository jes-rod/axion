import React from 'react';
import Protected from '@/components/Protected';
import Purchase from './Purchase';
import './Purchase.css'

const signinPage = () => {

    return (
        <Protected >
            <Purchase />
        </Protected>
    )

}

export default signinPage;