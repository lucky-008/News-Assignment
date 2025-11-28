'use client';

import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { Button } from './ui/button';
import { ImageIcon, MapPin, Menu, Moon, Newspaper, Search, Sun, User, VideoIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CITIES } from '@/constants';
import Sidebar from './Sidebar';


const Navbar = () => {

   const {theme, setTheme} = useTheme();
   const [mounted, setMounted] = useState<boolean>(false);
   const { isSignedIn } = useUser();
   const [open, setOpen] = useState<boolean>(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
   <>
  {open && <Sidebar open={open} setOpen={setOpen}/>}
    <nav className='flex justify-between p-4 border-b'>
      <div className='flex gap-2 items-center cursor-pointer'>
         <Button variant={'ghost'} onClick={() => setOpen(!open)}>
            <Menu className='size-6 cursor-pointer'/>
         </Button>
         <Link href={"/"}>
            <Image src={'/logo.avif'} alt='Live Hindustan' width={200} height={200} className='ml-4 cursor-pointer'/>
         </Link>
      </div>
      <div className='lg:flex flex-row gap-8 p-2 justify-around hidden'>
         <Link href={"/photos"} className='border-r border-gray-500 px-4 flex text-red-700 gap-2  items-center'>
            <ImageIcon color='#c10007'/>
            <p>Image</p>
         </Link>
         <Link href={'/videos'} className='border-r border-gray-500 px-4 flex text-red-700 gap-2  items-center'>
            <VideoIcon color='#c10007'/>
            <p>Video</p>
         </Link>
         <div className='border-r border-gray-500 px-4 flex  text-red-700 gap-4  items-center'>
            <div className='flex gap-1 items-center'>
               <MapPin color='#c10007'/>
               <p>Select City</p>
            </div>
            <Select>
               <SelectTrigger className="">
                  <SelectValue placeholder="Select City" />
               </SelectTrigger>
               <SelectContent>
                  {CITIES.map((city, idx) => (
                     <SelectItem key={idx} value={city}>{city}</SelectItem>
                  ))}
               </SelectContent>
            </Select>
         </div>
         <div className='border-r border-gray-500 px-4 cursor-pointer flex text-red-700 gap-2  items-center'> 
            <Newspaper color='#c10007'/>
            <p>E-paper</p>
         </div>
        {isSignedIn ? <UserButton/> : 
         <SignInButton mode='modal'>
         <div className='border-r border-gray-500 px-4 flex text-red-700 gap-2  items-center cursor-pointer'>
            <User color='#c10007'/>
            <p>Sign in</p>
         </div>
         </SignInButton>}
         <div className='flex px-5 py-1 rounded-full border h-full  border-gray-700 justify-center items-center'>
            <input type="text" placeholder='Write here' className=' outline-none placholder:text-gray-500'/>
            <Search color='#6a7282' />
         </div>
      </div>
      <div className='cursor-pointer p-2 '>
        { theme === 'dark' ?   
         <Button variant={'ghost'} onClick={() => setTheme("light")}>
            <Sun color='#c10007' className='size-6'/>
         </Button> :
        <Button variant={'ghost'} onClick={() => setTheme("dark")}>
            <Moon color='#c10007' className='size-6'/>
         </Button>}
      </div> 
   </nav>
   </>
  );
}

export default Navbar;
