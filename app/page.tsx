"use client";


import Search from '@/components/Search';
import { usePathname } from 'next/navigation';





export default function Home() {
  const pathname = usePathname();
  return (
    <div className='relative flex flex-col min-h-screen ' >
      
      {/* Conditionally render the Search component only on the homepage */}
      {pathname === '/' && <Search />}

      <div className='relative flex flex-col items-center'>
        <img className="book-image w-full" src="/books.png" alt="a book diagram" />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-customGray bg-opacity-65 p-8 z-10">
        
          <p className="text-2xl px-12 mb-6  text-white">Can't find the word you're looking for?</p>
  
          <button className="border shadow-lg bg-white rounded-full text-lg py-2 px-8">Submit a Request</button>

        </div>

      </div>

      
      
      
    </div>
  );
}