"use client";

import React, { useState } from 'react';
import Search from '@/components/Search';
import { usePathname } from 'next/navigation';
import Link from 'next/link';





export default function Home() {
  

  const pathname = usePathname();
  return (
    <div className='flex flex-col max-h-[100vh]' >
      <div className='flex items-center justify-around'>
        <div className='flex flex-col w-[500px]'>
          <h1 className='text-4xl tracking-widest text-amber-400'>CORPORATE LEXICON</h1>
          <p className='text-2xl mb-8 tracking-widest text-white'>find the meaning of jargons used accross the organization in just seconds.</p>

          <div className='flex text-xl gap-8'>
            <button className='bg-gradient-to-b from-amber-300 to-amber-600 text-gray-800 font-semibold py-2 px-4 rounded-xl'>Find Word</button>
            <button className='bg-gradient-to-b from-cyan-100 to-cyan-300 text-gray-800 font-semibold py-2 px-4 rounded-xl'>New Word</button>

          </div>
        </div >
        
        {/* Conditionally render the Search component only on the homepage */}
        {/* {pathname === '/' && <Search />} */}

        <img className="book-image w-[600px] h-[700px]" src="/about.png" alt="a book diagram" />
      </div>
      


      {/* <div className='flex flex-col items-center'>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-customGray bg-opacity-65 p-8 z-10">
        
          <p className="text-2xl px-12 mb-6  text-white">Can't find the word you're looking for?</p>
  
          <Link className='link' href='/submit_request'>
            <button className="border shadow-lg bg-white rounded-full text-lg py-2 px-8">Submit a Request</button>
          </Link>
          

        </div>

      </div> */}

      
      
      
    </div>
  );
}