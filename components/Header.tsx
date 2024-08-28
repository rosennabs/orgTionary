"use client";

import Link from 'next/link';
import Search from '@/components/Search';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative flex flex-col text-lg mx-8 mt-4">
      <nav className='flex items-center justify-between text-white'>
        <div className="flex flex-col">
          <Link href='/'>
            <img className="logo" src="/logo.png" alt="a book diagram" />
            <img className="logo-text" src="/OrgTionary.svg" alt="orgtionary text" />
          </Link>

        </div>

        <div className="flex gap-10">
          <Link className='link' href='/about'>About</Link>
          <Link className='link' href='/glossary'>Glossary</Link>
          <Link className='link' href='/contact'>Contact Us</Link>
        </div>
      </nav>


      {/* Conditionally render the Search component only on the homepage */}
      {pathname === '/' && <Search />}

      <div className="flex flex-col items-center justify-center py-18 p-8">
        <div className="flex items-center w-full">
          <div className="flex-grow mt-8 border-t border-teal-400"></div> {/* Left line */}
          <p className="text-xl text-white px-12 mb-6">Can't find the word you're looking for?</p>
          <div className="flex-grow mt-8 border-t border-teal-400"></div> {/* Right line */}
        </div>

        <strong>
          <button className="border border-teal-600 bg-teal-600 rounded-sm text-white text-lg py-2 px-6">Submit a request</button>
        </strong>
      </div>
    </header>
  );
}