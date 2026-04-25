import Navber from '@/components/shared/Navber';
import React from 'react';

const AuthPageLayout = ({children}) => {
    return (
        <div>
            <Navber></Navber>
            {children}
        </div>
    );
};

export default AuthPageLayout;