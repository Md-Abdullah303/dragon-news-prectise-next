import Navber from '@/components/shared/Navber';
import React from 'react';
import { montserrat } from '../layout';

const AuthPageLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navber></Navber>
            {children}
        </div>
    );
};

export default AuthPageLayout;