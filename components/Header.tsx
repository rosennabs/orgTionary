import Link from 'next/link';

export default function Header() {

  return (
    <header className="flex items-center justify-between text-white text-lg">
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

    </header>
  );
}