"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); //Specify that the ref will point to a < div > element.

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  //Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    // If the menu is open, add the event listener
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener on unmount or when menu closes
    return () => {
      if (menuOpen) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [menuOpen]);


  return (
    <header>
      <nav className="relative flex items-start justify-between text-white max-custom-930:text-sm custom-930:text-base px-12 py-4 bg-customTeal w-full">
        {/* Logo and Brand Name */}
        <Link href='/' className='flex items-center gap-1 w-[100px]'>
          <img className="logo" src="/logo.png" alt="orgtionary logo" />

          <div className='text-base sm:text-lg tracking-widest'>
            <span className='font-semibold text-teal-500'>ORG</span>
            <span className='font-sans'>TIONARY</span>       
          </div>
        </Link>
 
        {/* Desktop Navigation Links */}
        <div className="max-sm:hidden flex gap-6 tracking-widest">
          <Link className='link' href='/'>Home</Link>
          <Link className='link' href='/about'>About</Link>
          <Link className='link' href='/glossary'>Glossary</Link>
          <Link className='link' href='/contact'>Contact Us</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button onClick={handleMenuToggle} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div ref={dropdownRef} className="absolute top-full right-4 bg-gradient-to-b from-cyan-100 to-cyan-300 gap-2 p-4 rounded-lg text-black flex flex-col items-start sm:hidden z-10">
            <Link className='link' href='/' onClick={handleLinkClick}>Home</Link>
            <Link className='link' href='/about' onClick={handleLinkClick}>About</Link>
            <Link className='link' href='/glossary' onClick={handleLinkClick}>Glossary</Link>
            <Link className='link' href='/contact' onClick={handleLinkClick}>Contact Us</Link>
          </div>
        )}
      </nav>

    </header>
  );
}