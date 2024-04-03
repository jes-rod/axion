import React from 'react';
import Protected from '@/components/Protected';
import Profile from './Profile';
import './Profile.css'

const signinPage = () => {

    return (
        <Protected >
            <Profile />
        </Protected>
    )

}

export default signinPage;