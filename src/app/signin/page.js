import React from 'react';
import Prevent from '@/components/Prevent';
import Signin from './Signin';

const signinPage = () => {

    return (
        <Prevent >
            <Signin />
        </Prevent>
    )

}

export default signinPage;