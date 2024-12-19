"use client";

import React, { useState } from 'react';
import Search from '@/components/Search';
import Link from 'next/link';



export default function Home() {
  const [findWord, setFindWord] = useState(false);

  const handleFindWord = () => {
    setFindWord(true);
  };


  return (

    <div className='flex flex-col lg:flex-row  lg:px-4 items-center justify-center lg:justify-around min-h-screen -mt-28 bg-customTeal'>

      <img className="book-image object-scale-down h-[20vh] lg:w-2/5 lg:h-1/2" src="/about.png" alt="a book diagram" />

      <div className='flex flex-col items-center lg:items-start w-[clamp(100px,100vw,80vw)] lg:w-1/2 text-center lg:text-left'>
        <Search />

        
          <h1 className='tracking-widest text-amber-400'>CORPORATE LEXICON</h1>
          <p className='text-base sm:text-2xl mb-8 tracking-widest text-white'>find the meaning of jargons used accross the organization in just seconds.</p>


        <div className='flex flex-wrap justify-center text-sm sm:text-xl gap-8'>
          <Link href='/glossary'>
            <button onClick={() => handleFindWord()} className='bg-gradient-to-b from-amber-300 to-amber-600 text-gray-800 font-semibold py-2 px-2 rounded-xl w-[100px] sm:w-[200px]'>Find Word</button>
          </Link>
          <Link href='/submit_request'>
            <button className='bg-gradient-to-b from-cyan-100 to-cyan-300 text-gray-800 font-semibold py-2 px-2 rounded-xl w-[100px] sm:w-[200px]' >New Word</button>
          </Link>

        </div>
      </div >

     
    </div>



  );
}