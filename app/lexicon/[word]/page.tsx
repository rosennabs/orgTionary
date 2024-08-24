"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiShareBoxFill, RiInformationLine } from "react-icons/ri";
import { data } from '@/helpers/data';


function WordDetailsPage({ params }) {
  //console.log(params); //This outputs {word : "Patient"} depending on which word is clicked on. With the params feature from next.js, we can fetch data related to params.word i.e patient from the database to display information related to the word on this page.
  const { word } = params;
  const router = useRouter();

  //Fetch applicable data from the word array
  const wordData = data.find(item => item.word === word);

  useEffect(() => {
    
    // Prevent scrolling on the underlying page when component mounts
    document.body.style.overflow = 'hidden';

    // Clean up to re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='flex flex-col'>
      <Link className="text-white text-xl fixed top-24 right-4 z-50" href="#" onClick={(e) => {
        e.preventDefault();
        router.back();
      }}> X </Link>

      <div className="fixed top-32 left-32 right-0 bottom-0 rounded-tl-xl bg-white z-50 overflow-y-auto">

        <div className='flex items-center justify-between sticky top-0 text-white bg-teal-600 py-4 px-20 border-b'>
          <h1>{word}</h1>

          <div className='flex gap-6'>
            <Link className=' border border-gray-300 p-3 rounded-full' href="#"><RiShareBoxFill /></Link>
            <Link className='border border-gray-300 p-3 rounded-full' href="#"><RiInformationLine /></Link>
          </div>
        </div>

        <div className='word-details px-20 py-8'>
          <h2>Definition</h2>
          <p>
            {wordData ? wordData.definition : "Definition not available. Please check back later."}
          </p>

          {wordData.does_not_mean && 
            (
            <>
          <h2>What it does not mean for the organization</h2>
          <p>
            {wordData.does_not_mean}
              </p>
              </>
            )}

          {wordData.example &&
            (
              <>
          <h2>Usage examples</h2>
                <p>
                  {wordData?.example}
                </p>
              </>
            )}

          {wordData.related_words &&
            (
              <>
              <h2>Other related words</h2>
              {wordData.related_words.map((item) => (
                <ul>
                  <li>{item}</li>
                </ul>
              ))}
                
              </>
            )}
        </div>
      </div>
    </div>
  );
}

export default WordDetailsPage;