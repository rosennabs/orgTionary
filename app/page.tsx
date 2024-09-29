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
        {/* Conditionally render the Search component only on the homepage */}
        {pathname === '/' && <Search />}

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