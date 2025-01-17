import React from 'react';
import {useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { GlossaryDataContext, GlossaryDataContextType } from '@/context/GlossaryDataContext';



function Search() {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredWords, setFilteredWords] = useState<string[]>([]);
  const { glossaryData } = useContext<GlossaryDataContextType>(GlossaryDataContext);

  const router = useRouter();

  const handleSearch = (event:React.FormEvent) => {
    event.preventDefault(); // Prevent page reload

    //Find the word in the data
    const foundWord = glossaryData.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());

    foundWord ? router.push(`/glossary/${foundWord.word}`) : alert('Word not found');
  };


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchTerm(input);

    // Update the list only if there's input
    if (input) {
      // Filter words that start with the search term and return them in an array
      const filtered = glossaryData
        .filter(item => item.word.toLowerCase().startsWith(input.toLowerCase()))
        .map(item => item.word);

      setFilteredWords(filtered);
    } else {
      setFilteredWords([]); // Clear the list when input is empty
    }

  };

  const clearSearch = () => {
    setSearchTerm(""); // Clear the input field
    setFilteredWords([]); // Clear the filtered words
  };



  return (

    <div className='relative flex flex-col w-full'>
        <form onSubmit={handleSearch} className='relative flex items-center justify-center'>
          <input
          className='search bg-white border border-gray-300 rounded-xl px-4 py-3 w-full'
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={handleInputChange}
          />

          <div className='flex absolute right-4 gap-4'>
            <button type="submit" >
              <FaSearch size={12}/>
            </button>

            {searchTerm && (
              <button className='text-base' onClick={() => clearSearch()}>
              <RxCross2 />
              </button>
            )}

          </div>


        </form>

        {filteredWords.length > 0 && (
          <div className=' absolute top-full mt-2 w-full text-left bg-white border p-4 z-20'>
            <ul>
              {filteredWords.map((word, index) => (
                <li className='cursor-pointer hover:text-blue-800 hover:underline'
                  onClick={() => router.push(`/glossary/${word}`)}
                  key={index}
                >
                  {word}
                </li>
              ))}

            </ul>

          </div>
        )}
      </div>



    





  );
}

export default Search;