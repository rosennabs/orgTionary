"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { data } from '@/helpers/data';
import { RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/navigation';

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Glossary() {
  const router = useRouter();

  useEffect(() => {
    // Add the class to disable scroll on the body element
    document.body.classList.add('overflow-hidden');

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (

    <div className='absolute w-full max-h-[100vh] inset-0 mt-28 overflow-y-auto bg-white'>
      <Link className="text-white text-3xl fixed top-20 right-4" href="#" onClick={(e) => {
        e.preventDefault();
        router.back();
      }}> <RxCross2 /></Link>

      <div className='sticky top-0 bg-indigo-200 p-4 pl-8 '>
        <h2 className='mb-4'>Words A-Z</h2>
        {alphabets.split("").map((letter) => (
          <span className='mr-5 text-lg'>{letter}</span>
        ))}
      </div>

      {alphabets.split("").map((letter) => {
        const filteredWords = data.filter(item => item.word.startsWith(letter));
        return (
          <div key={letter} className='m-14'>
            <h1>{letter}</h1>
            {filteredWords.length > 0 ? (
              filteredWords.map((item, index) => (
                <ul>
                  <li key={index} className=' hover:text-blue-800 hover:underline'>
                    <Link href={`/glossary/${item.word}`}> {item.word} </Link>
                  </li>
                </ul>
              ))
            ) : (
              <p>No words found</p>
            )}

          </div>
        );
      })}

    </div>

  );
}

export default Glossary;