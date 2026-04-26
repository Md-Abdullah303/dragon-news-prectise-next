import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import Navber from '@/components/shared/Navber';
import React from 'react';

const MainPageLayout = ({children}) => {
    return (
        <>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navber></Navber> 
        {children}
        </>
    );
};

export default MainPageLayout;