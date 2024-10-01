"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { data } from '@/helpers/data';
import { RxCross2 } from "react-icons/rx";
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowUp} from "react-icons/fa";
// import { useRouter } from 'next/navigation';
import Search from '@/components/Search';
import { Tooltip } from '@/app/glossary/[word]/page';


const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Glossary() {
  // const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null); // Create a ref for the scrollable div

  useEffect(() => {
    const handleScroll = () => {
      
      if (scrollRef.current.scrollTop > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollableDiv = scrollRef.current;

    if(scrollableDiv) {
      scrollableDiv.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener when component unmounts
    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  const scrollToLetter = (letter) => {
    const element = document.getElementById(`word-${letter}`);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }
  
  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (

    <div ref={scrollRef} className='absolute w-full max-h-[100vh] inset-0 top-28 overflow-y-auto bg-white font-medium text-gray-600 p-20'>
     
      <h1>Glossary</h1>
      <hr className='text-gray-600 h-[40px]' />
      
      <div className='flex items-center justify-between'>
        
        <Link href='/submit_request'>
          <button className='flex items-center gap-2 text-white bg-cyan-600 py-2 px-8 rounded-xl'> <CiCirclePlus className='text-3xl font-bold' />Add New </button>
        </Link>
        <span> <Search/> </span>
      </div>

      <div className='mt-16 '>
        
        {alphabets.split("").map((letter) => (
          <span onClick={() => scrollToLetter(letter)} className='mr-5 p-2 text-lg text-gray-400 hover:underline hover:text-blue-800 cursor-pointer'>{letter}</span>
        ))}
      </div>
      <hr className='text-gray-600 h-[40px] mt-2' />

      {alphabets.split("").map((letter) => {
        const filteredWords = data.filter(item => item.word.startsWith(letter));
        return (
          <div id={`word-${letter}`} key={letter} className='my-8'>
            <h1>{letter}</h1>
            {filteredWords.length > 0 ? (
              <div className='flex flex-wrap justify-start gap-6'>
              {filteredWords.map((item, index) => (
               
              
                <Link href={`/glossary/${item.word}`} key={index} className='open-word border shadow-md rounded-lg w-[calc(33.333%-1rem)] h-[200px] p-8 mb-8'>
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

      {isVisible && (
        <button onClick={scrollToTop} className='fixed bottom-24 right-12 bg-cyan-600 text-white p-3 rounded-full shadow-lg'>
          <FaArrowUp size={30} />
        </button>
      )}
      

    </div>

  );
}

export default Glossary;