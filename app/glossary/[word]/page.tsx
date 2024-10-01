"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RxCross2 } from "react-icons/rx";
import { RiShareBoxFill, RiInformationLine } from "react-icons/ri";
import {IoArrowBackCircleOutline } from "react-icons/io5";
import { data } from '@/helpers/data';
import InfoModal from '@/components/InfoModal';




function WordDetailsPage({ params }) {
  //console.log(params); //This outputs {word : "Patient"} depending on which word is clicked on. With the params feature from next.js, we can fetch data related to params.word i.e patient from the database to display information related to the word on this page.
  const { word } = params;
  const router = useRouter();

  // Decode the `word` parameter to handle spaces and other encoded characters
  const decodedWord = decodeURIComponent(word as string);

  //Fetch applicable data from the word array
  const wordData = data.find(item => item.word === decodedWord);

  useEffect(() => {
    // Scroll the parent page to the top
    window.scrollTo(0, 0);

    // Prevent scrolling on the underlying page when component mounts
    document.body.style.overflow = 'hidden';

    // Clean up to re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  //State for handling the info modal
  const [infoClicked, setInfoClicked] = useState(false);

  const toggleModal = () => {
    setInfoClicked(!infoClicked);
  };

  //Handle share link
  const [copySuccess, setCopySuccess] = useState(false);

  const link = {
    url: `http://localhost:3000/glossary/${decodedWord}`
  };

  const shareLink = () => { 
    if (navigator.share) { //Checks if the Web Share API is available in the user's browser
      navigator.share(link) //share link via web api and resolve promise
        .then(() => {
          console.log('Link successfully shared.');

        })
        .catch((error) => {
          console.error('Error sharing link: ', error);
        })
      
      
    } else {
      navigator.clipboard.writeText(link.url) //// Fallback to copying the link to the clipboard
        .then(() => {
          setCopySuccess(true);
          console.log("Link copied to clipboard");
          
          setTimeout(() => setCopySuccess(false), 3000);
        })
        .catch((error) => {
          console.error('Error copying link to clipboard: ', error);
        })
    }
  }



  return (
    <div className='absolute w-full max-h-[100vh] inset-0 top-28 overflow-y-auto bg-white font-medium text-gray-600 p-20'>
      <Link className="text-3xl fixed top-32 right-4 z-50 text-gray-600" href="#" onClick={(e) => {
        e.preventDefault();
        router.back();
      }}>
        <button className='relative group'>
          <RxCross2 />
          <Tooltip>
            Back
          </Tooltip>
        </button>
        
      </Link>

      <div className="">

        <div className='flex items-center justify-between border-b'>
          <h1 className=''>{decodedWord}</h1>

          <div className='flex gap-8'>
            <div className='flex flex-col'>
              <button className=' relative group border border-gray-500 p-2 rounded-full' onClick={() => shareLink()}>
                <RiShareBoxFill />
                <Tooltip>
                  Share
                </Tooltip>
              </button>

              {copySuccess && (
                <div>
                  <span className='text-white text-s bg-black px-2 py-1 absolute right-4 top-28 rounded'> Link copied to clipboard!</span>

                </div>
              )}
            </div>
            

            <Link onClick={() => toggleModal()} className='relative group border border-gray-500 p-2 rounded-full' href="#">
              <RiInformationLine />
              <Tooltip>
                Details
              </Tooltip>
            </Link>
          </div>
        </div>

        {infoClicked && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40">

            </div >
            <InfoModal toggleModal={toggleModal} />
          </>

        )}

        <div className='word-details mt-12'>
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
      </div >
    </div >
  );
}

export default WordDetailsPage;

export function Tooltip({ children }) {
  return (
    <div className='absolute bg-black text-white text-xs left-1/2 mt-2 top-full rounded transform -translate-x-1/2 py-1 px-2 hidden group-hover:block'>{children}</div>
  );

}