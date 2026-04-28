'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href, children}) => {
    const parthName = usePathname()
    const isActive = parthName == href;
    return (
        <Link 
        className={`${isActive ? 'border-b border-gray-500' : ''}`}
        href={href}>
        {children}
        </Link>
    );
};

export default MyLink;