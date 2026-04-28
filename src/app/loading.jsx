import React from 'react';

const MainLoadingPage = () => {
    return (
        <div className='h-[85vh] flex items-center justify-center'>
            <span className="loading loading-xl loading-spinner text-error"></span>
        </div>
    );
};

export default MainLoadingPage;