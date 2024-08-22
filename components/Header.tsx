import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

export default function Header() {

  return (
    <header className="flex flex-col text-lg mx-8 mt-2">
      <nav className='flex items-center justify-between text-white'>
        <div className="flex flex-col">
          <Link href='/'>
            <img className="logo" src="/logo.png" alt="a book diagram" />
            <img className="logo-text" src="/OrgTionary.svg" alt="orgtionary text" />
          </Link>

        </div>

        <div className="flex gap-10">
          <Link className='link' href='about'>About</Link>
          <Link className='link' href='glossary'>Glossary</Link>
          <Link className='link' href='contact'>Contact Us</Link>
        </div>
      </nav>
      

      <div className='flex-grow flex flex-col items-center justify-center my-32'>
        <h1 className='mb-8 text-white'>What would you like to find?</h1>
        <div className='relative flex items-center justify-center'>
          <input className='bg-white px-4 py-3 rounded-3xl w-[800px]' type='text' placeholder='Search here' />
          <FaSearch className='absolute right-4 ' />
        </div>

      </div>

    </header>
  );
}