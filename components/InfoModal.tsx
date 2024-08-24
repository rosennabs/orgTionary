import React from 'react';
import { useRouter } from 'next/navigation';
import { RxCross2 } from "react-icons/rx";

function InfoModal({toggleModal}) {

  const router = useRouter();

  return (
    
    <div className='absolute left-1/2 transform -translate-x-1/2 bg-white rounded-lg border border-gray-300 w-1/2 h-[500px] shadow-lg p-8 z-50'>
      <div className='flex'>
        <button className="ml-auto text-2xl" onClick={() => toggleModal()}>
          <RxCross2 />
        </button>
      </div>
      
        <h1>Analytics</h1>
        <p>Posted April 24, 2023</p>
      </div>
    
   
  );
}

export default InfoModal;