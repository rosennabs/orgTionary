"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="relative flex items-start justify-between text-white text-lg px-20 py-8 bg-customTeal">
        <div className='flex items-center gap-2 w-[200px]'>
          <img className="logo" src="/logo.png" alt="orgtionary logo" />
          <Link href='/'>
            <span className='text-2xl font-semibold tracking-widest text-teal-500'>ORG</span>
            <span className='text-2xl tracking-widest font-sans'>TIONARY</span>
            
          </Link>
        </div>
        
   

        <div className="flex gap-10 font-medium tracking-widest">
          <Link className='link' href='/'>Home</Link>
          <Link className='link' href='/about'>About</Link>
          <Link className='link' href='/glossary'>Glossary</Link>
          <Link className='link' href='/contact'>Contact Us</Link>
        </div>
      </nav>

    </header>
  );
}