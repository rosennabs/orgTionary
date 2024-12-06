"use client";

import React, { useState } from 'react';
import Search from '@/components/Search';
import Link from 'next/link';



export default function Home() {
  const [findWord, setFindWord] = useState(false);

  const handleFindWord = () => {
    setFindWord(true);
  }
  

  return (
   
    <div className='flex items-center justify-around h-screen -mt-28'>
        
        <div className='flex flex-col w-[500px] '>
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

        <img className="book-image w-[600px] max-h-[80vh] object-contain" src="/about.png" alt="a book diagram" />
      </div>
 
      
  
  );
}