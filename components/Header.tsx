"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiCircleChevRight } from "react-icons/ci";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="relative flex items-start justify-between text-lg mx-8 mt-8">

        <Link href=''>
          <div className='flex items-center justify-between w-[250px] border border-customGray rounded-full px-4 py-1'>
            <CiCircleChevRight />
            <span className=''>Leave a Feedback</span>
          </div>
          
        </Link>
       
          <Link href='/'>
            <img className="logo" src="/logo.png" alt="orgtionary logo" />
          </Link>
   

        <div className="flex gap-10">
          <Link className='link' href='/about'>About</Link>
          <Link className='link' href='/glossary'>Glossary</Link>
          <Link className='link' href='/contact'>Contact Us</Link>
        </div>
      </nav>

    </header>
  );
}