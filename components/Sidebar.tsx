"use client";

import { SidebarItems } from '@/constants';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { Newspaper, Search, User, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { SetStateAction } from 'react';

interface SidebarProps {
   open: boolean;
   setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ open, setOpen}: SidebarProps) => {

   const { theme } = useTheme();
   const { isSignedIn} = useUser();

  return (
    <div className={`fixed shadow-2xl p-6 py-6 space-y-4 shadow-black w-[400px] inset-0 z-50 
      ${theme === 'dark' ? "bg-black" : "bg-white"} h-full  overflow-y-auto scrollbar-thin  transition-all duration-600 ease-in-out
      ${open ? "translate-x-0" : "-translate-x-full"}`}>
      <div className='flex justify-between items-center '>
         <Link href={"/"} onClick={() => setOpen(false)}>
            <Image src={"/logo.avif"} alt='logo' height={100} width={100} />
         </Link>
      <div className='flex flex-row gap-6'>
         <Link href={"/e-paper"} className='cursor-pointer text-sm flex text-red-700 gap-1  items-center' onClick={() => setOpen(false)}> 
            <Newspaper color='#c10007' className='size-5'/>
            <p>E-paper</p>
         </Link>
        {isSignedIn ? <UserButton/> : 
         <SignInButton mode='modal'>
         <div className='flex text-red-700 gap-1 text-sm items-center cursor-pointer'>
            <User color='#c10007' className='size-5'/>
            <p>Sign in</p>
         </div>
         </SignInButton>}
         <X className='size-6 cursor-pointer' onClick={() => setOpen(!open)}/>
      </div>
      </div>
      <div className='w-full border rounded-2xl py-2 px-4 flex justify-between bg-gray-' >
         <input type="text" placeholder='Search here...' className='outline-none ' />
         <Search className='size-5' color='#99a1af'/>
      </div>
      <div className='w-full flex flex-col gap-4'>
         {SidebarItems.map((item) => (
            <Link href={item.href} key={item.href} className={`p-4 border rounded-xl `} onClick={() => setOpen(false)}>
               {item.name}
            </Link>
         ))}
      </div>
    </div>
  );
}

export default Sidebar;
