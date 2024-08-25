"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import { data } from '@/helpers/data';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWords, setFilteredWords] = useState([]);

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload

    //Find the word in the data
    const foundWord = data.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());

    foundWord ? router.push(`/lexicon/${foundWord.word}`) : alert('Word not found');
  };


  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    // Update the list only if there's input
    if (input) {
      // Filter words that start with the search term and return them in an array
      const filtered = data
        .filter(item => item.word.toLowerCase().startsWith(input.toLowerCase()))
        .map(item => item.word);

      setFilteredWords(filtered);
    } else {
      setFilteredWords([]); // Clear the list when input is empty
    }

  };

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
        <form onSubmit={handleSearch} className='relative flex items-center justify-center'>
          <input
            className='bg-white border px-4 py-3 w-[800px]'
            type='text'
            placeholder='Search here'
            value={searchTerm}
            onChange={handleInputChange}
          />

          <button type="submit" className='absolute right-4 '>
            <FaSearch />
          </button>

        </form>

        {filteredWords.length > 0 && (
          <div className='search-result bg-white w-[800px] p-4'>
            <ul>
              {filteredWords.map((word, index) => (
                <li className='cursor-pointer hover:text-blue-800 hover:underline'
                  onClick={() => router.push(`/lexicon/${word}`)}
                  key={index}
                >
                  {word}
                </li>
              ))}

            </ul>

          </div>
        )}


      </div>

    </header>
  );
}