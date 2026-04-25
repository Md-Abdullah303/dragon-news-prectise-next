import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='flex text-center flex-col items-center py-8 px-4 gap-3'>
            <Image src={logo} width={300} height={200} alt='logo img'></Image>
            <p className='text-lg font-bold text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-lg text-gray-400 font-semibold'>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;