import { Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <>
    <div className='flex flex-row justify-around items-center'>
      <div>
        <Image src={'/logo.avif'} alt='logo' width={300} height={300}  />
      </div>
      <div className='flex flex-col p-6 items-center justify-center ml-40' >
        <h1 className='text-2xl font-bold'>Connect with us</h1>
        <div className='flex flex-row gap-4 p-4 items-center justify-center' >
        <span className='bg-gray-400 p-4 rounded-full'>
          <Facebook />
        </span>
        <span className='bg-gray-400 p-4 rounded-full'>
          <Twitter/>
        </span>
        <span className='bg-gray-400 p-4 rounded-full'>
          <Youtube/>
        </span>
         </div>
      </div>
      <div className='flex flex-col justify-center gap-4 p-6'>
        <h1 className='text-2xl font-semibold'>Download App</h1>
        <div className='flex flex-row gap-3'>
          <Image src={"/playstore.png"} alt='playstore' width={200} height={200} />
          <Image src={"/apple.png"} alt='playstore' width={200} height={200} />
        </div>
      </div>
    </div>
      <h1 className='text-center text-2xl my-4'>&copy; 2025 Prince Kumar Sinha</h1>
     </>
  );
}

export default Footer;
