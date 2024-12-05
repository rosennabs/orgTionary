import React from 'react';
import { RxCross2 } from "react-icons/rx";

function InfoModal({toggleModal}) {


  return (
    
    <div className='absolute left-1/2 transform -translate-x-1/2 bg-white rounded-lg border border-gray-300 w-2/5 h-[300px] shadow-lg py-8 px-14 z-50'>
      <div className='flex'>
        <button className="ml-auto text-2xl" onClick={() => toggleModal()}>
          <RxCross2 />
        </button>
      </div>
      
      <h2 className='mb-2'>Word Details</h2>
      <p className='mb-12'>Posted April 24, 2023</p>
      
      <div className='flex gap-16'>
        <div className='flex flex-col'>
          <span className='mb-2'>Views</span>
          <span className='text-2xl'>8400</span>
        </div>
        <div className='flex flex-col'>
          <span className='mb-2'>Saves</span>
          <span className='text-2xl'>72</span>
        </div>
        <div className='flex flex-col'>
          <span className='mb-2'>Likes</span>
          <span className='text-2xl'>122</span>
        </div>
        <div className='flex flex-col'>
          <span className='mb-2'>Comments</span>
          <span className='text-2xl'>50</span>
        </div>
      </div>
      </div>
    
   
  );
}

export default InfoModal;