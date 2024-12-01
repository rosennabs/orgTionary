"use client";

import React, { useState } from 'react';
import Search from '@/components/Search';
import { usePathname } from 'next/navigation';
import Link from 'next/link';





export default function Home() {
  const [findWord, setFindWord] = useState(false);

  const handleFindWord = () => {
    setFindWord(true);
  }
  

  const pathname = usePathname();
  return (
    <div className='flex flex-col min-h-screen' >
      
      <div className='flex items-center justify-around flex-grow -mt-8'>
        
        <div className='flex flex-col w-[500px]'>
          <Search />
          
          <h1 className='text-4xl tracking-widest text-amber-400'>CORPORATE LEXICON</h1>
          <p className='text-2xl mb-8 tracking-widest text-white'>find the meaning of jargons used accross the organization in just seconds.</p>

          <div className='flex text-xl gap-8'>
            <Link href='/glossary'>
              <button onClick={() => handleFindWord()} className='bg-gradient-to-b from-amber-300 to-amber-600 text-gray-800 font-semibold py-2 px-4 rounded-xl'>Find Word</button>
            </Link>
            <Link href='/submit_request'>
              <button className='bg-gradient-to-b from-cyan-100 to-cyan-300 text-gray-800 font-semibold py-2 px-4 rounded-xl'>New Word</button>
            </Link>

          </div>
        </div >


        <img className="book-image w-[600px] h-[700px]" src="/about.png" alt="a book diagram" />
      </div>
 
      
    </div>
  );
}