import Link from 'next/link';
import React from 'react';


const Navber = () => {
    return (
        <div>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about-us'}>About</Link></li>
                <li><Link href={'/career'}>Career</Link></li>
            </ul>
            <div className="">

            </div>
        </div>
    );
};

export default Navber;