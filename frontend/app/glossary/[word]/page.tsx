"use client";
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RxCross2 } from "react-icons/rx";
import { RiShareBoxFill, RiInformationLine } from "react-icons/ri";
import { GlossaryDataContext, GlossaryDataContextType} from '@/context/GlossaryDataContext';
import InfoModal from '@/components/InfoModal';
import Tooltip from '@/components/Tooltip';

// Props for this page component
interface WordDetailsPageProps {
  params: {
    word: string;
  };
}

function WordDetailsPage({ params }: WordDetailsPageProps) {
  //console.log(params); //This outputs {word : "Patient"} depending on which word is clicked on. With the params feature from next.js, we can fetch data related to params.word i.e patient from the database to display information related to the word on this page.
  const { word } = params;
  const router = useRouter();
  const { glossaryData, loading } = useContext<GlossaryDataContextType>(GlossaryDataContext);

  // Decode the `word` parameter to handle spaces and other encoded characters
  const decodedWord = decodeURIComponent(params.word);

  //Fetch applicable data from the word array
  const wordData = glossaryData.find(item => item.word === decodedWord);

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

  const toggleModal = (): void => {
    setInfoClicked(!infoClicked);
  };

  //Handle share link
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  // Set a dynamic frontend link based on environment
  const isDev = process.env.NODE_ENV === "development";
  const baseUrl = isDev
    ? "http://localhost:3000" // Development URL
    : process.env.NEXT_PUBLIC_FRONTEND_URL; // Production URL

  const link = {
    url: `${baseUrl}/glossary/${decodedWord}`,
  };


  const shareLink = (): void => {
    if (navigator.share) { //Checks if the Web Share API is available in the user's browser
      navigator.share(link) //share link via web api and resolve promise
        .then(() => {
          console.log('Link successfully shared.');

        })
        .catch((error) => {
          console.error('Error sharing link: ', error);
        });


    } else {
      navigator.clipboard.writeText(link.url) //// Fallback to copying the link to the clipboard
        .then(() => {
          setCopySuccess(true);
          console.log("Link copied to clipboard");

          setTimeout(() => setCopySuccess(false), 3000);
        })
        .catch((error) => {
          console.error('Error copying link to clipboard: ', error);
        });
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col p-8 min-h-screen">

          <div className='flex items-center justify-between border-b'>
            <h1 className='mb-2'>{decodedWord}</h1>

            <div className='flex gap-2 md:gap-8 mb-2'>
              <div className='flex flex-col'>
            <button className='relative group modal-icon custom-370:border border-gray-500 custom-370:p-1 sm:p-2 rounded-full' onClick={() => shareLink()}>
                  <RiShareBoxFill />
                  <Tooltip>
                    Share
                  </Tooltip>
                </button>

                {copySuccess && (
                  <div>
                <span className='modal-icon text-white text-s bg-black px-2 py-1 absolute right-4 top-28 rounded'> Link copied to clipboard!</span>

                  </div>
                )}
              </div>


          <Link onClick={() => toggleModal()} className='relative group modal-icon custom-370:border border-gray-500 custom-370:p-1 sm:p-2 rounded-full' href="#">
                <RiInformationLine />
                <Tooltip>
                  Details
                </Tooltip>
              </Link>

              <Link onClick={(e) => {
                e.preventDefault();
                router.back();
          }} className='relative group modal-icon custom-370:border border-gray-500 custom-370:p-1 sm:p-2 rounded-full' href="#">
                <RxCross2 />
                <Tooltip>
                  Close
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

            {wordData?.does_not_mean &&
              (
                <>
                  <h2>What it does not mean for the organization</h2>
                  <p>
                    {wordData.does_not_mean}
                  </p>
                </>
              )}

            {wordData?.example &&
              (
                <>
                  <h2>Usage examples</h2>
                  <p>
                    {wordData?.example}
                  </p>
                </>
              )}

            {wordData?.related_words &&
              (
                <>
                  <h2>Other related words</h2>
                  {wordData.related_words.map((item) => (
                    <ul key={item}>
                      <li>{item}</li>
                    </ul>
                  ))}

                </>
              )}
          </div>
     
      
    </div>


  );
}

export default WordDetailsPage;

