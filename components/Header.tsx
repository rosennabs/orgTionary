"use client";

import Link from 'next/link';
import Search from '@/components/Search';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative flex flex-col text-lg mx-8 mt-4 mb-6">
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
    </header>
  );
}