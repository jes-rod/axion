import React from 'react';
import Prevent from '@/components/Prevent';
import Signup from './Signup';

const signinPage = () => {

    return (
        <Prevent >
            <Signup />
        </Prevent>
    )

}

export default signinPage;