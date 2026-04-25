import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-screen flex items-center justify-center flex-col gap-3 '>
            <h1 className='text-3xl md:text-6xl text-purple-500 font-bold'>Not found Page</h1>
            <Link href={'/'}><button className='btn btn-primary text-white'>Go back Home</button></Link>
        </div>
    );
};

export default NotFoundPage;