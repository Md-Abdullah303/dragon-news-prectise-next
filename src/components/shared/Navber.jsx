import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import MyLink from './MyLink';


const Navber = () => {
    return (
        <div className='flex items-center justify-between container mx-auto py-5'>
            <div className=""></div>
            <ul className='flex items-center gap-3'>
                <li><MyLink href={'/'}>Home</MyLink></li>
                <li><MyLink href={'/about-us'}>About</MyLink></li>
                <li><MyLink href={'/career'}>Career</MyLink></li>
            </ul>
            <div className='flex items-center gap-3'>
                <Image src={userAvatar} width={40} height={40} alt='user avatar img'></Image>
                <button className='btn  bg-purple-600 text-white'><Link href={'/login'}>Login</Link></button>
            </div>
        </div>
    );
};

export default Navber;