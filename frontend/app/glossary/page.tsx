"use client";

import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import { GlossaryDataContext, GlossaryDataContextType } from '@/context/GlossaryDataContext';
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import Search from '@/components/Search';



const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Glossary() {

  const [scrollVisible, setScrollVisible] = useState<boolean>(false);
  const { glossaryData, loading, error } = useContext<GlossaryDataContextType>(GlossaryDataContext);

  //Handle scrolling visibility
  useEffect(() => {
    const handleScroll = (): void => {

      if (window.scrollY > 50) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  //Scroll to a specific letter
  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`word-${letter}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
    
  };

  //Scroll to top
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (


    <div className='bg-white font-medium text-gray-600 m-12 lg:m-16'>

      <h1>Glossary</h1>
      <hr className='border-gray-200 h-[40px]' />

      <div className='flex max-custom-470:flex-col gap-8 items-center justify-between'>

        <Link href='/submit_request' className='flex items-center justify-center gap-4  py-2 px-6  rounded-xl text-white text-sm bg-cyan-600 '>
          <CiCirclePlus className='text-3xl font-bold' />
          <button> Add New Word </button>
        </Link>

        <span className='text-sm max-custom-470:w-full'> <Search /> </span>
      </div>

      <div className='flex flex-wrap sm:justify-between mt-12 '>

        {alphabets.split("").map((letter) => (
          <p
            key={letter}
            onClick={() => scrollToLetter(letter)}
            className='mr-2 underline text-blue-600 hover:text-gray-800 cursor-pointer'
          >
            {letter}       
          </p>
        ))}
      </div>
      <hr className='border-gray-200 h-[40px] mt-2' />

      {alphabets.split("").map((letter) => {
        const filteredWords = glossaryData.filter(item => item.word.startsWith(letter));
        return (
          <div id={`word-${letter}`} key={letter} className='my-8'>
            <h1>{letter}</h1>
            {filteredWords.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredWords.map((item, index) => (

                  <Link href={`/glossary/${item.word}`} key={index} className='open-word border shadow-md hover:shadow-xl rounded-lg h-[200px] p-8 mb-8 transition-shadow duration-300'>
                    <h5 className='text-cyan-600 hover:underline hover:underline-offset-4'>{item.word}</h5>
                    <p className='truncate'>{item.definition}</p>
                  </Link>

                ))}
              </div>

            ) : (
              <p>No words found</p>
            )}

          </div>
        );
      })}

      {scrollVisible && (
        <button onClick={scrollToTop} className='fixed animate-bounce bottom-24 right-12 bg-cyan-600 text-white p-3 rounded-full shadow-lg'>
          <FaArrowUp size={30} />
        </button>
      )}

    </div>




  );

}

export default Glossary;