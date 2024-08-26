"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiShareBoxFill, RiInformationLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
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

  const [infoClicked, setInfoClicked] = useState(false);

  const toggleModal = () => {
    setInfoClicked(!infoClicked);
  };

  return (
    <div className='relative flex flex-col'>
      <Link className="text-white text-3xl fixed top-20 right-4 z-50" href="#" onClick={(e) => {
        e.preventDefault();
        router.back();
      }}> <RxCross2 /></Link>

      <div className="fixed top-28 right-0 bottom-0 bg-white z-50 overflow-y-auto">

        <div className='flex items-center justify-between sticky top-0 bg-indigo-200 py-4 px-20 border-b'>
          <h1>{decodedWord}</h1>

          <div className='flex gap-8'>
            <Link className=' relative group border border-gray-500 p-2 rounded-full' href="#">
              <RiShareBoxFill />
              <Tooltip>
                Share
              </Tooltip>
            </Link>

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
      </div >
    </div >
  );
}

export default WordDetailsPage;

function Tooltip({ children }) {
  return (
    <div className='absolute bg-black text-white text-xs left-1/2 mt-2 top-full rounded transform -translate-x-1/2 py-1 px-2 hidden group-hover:block'>{children}</div>
  );

}