import React from 'react';
import { RxCross2 } from "react-icons/rx";

function SuccessMessage({ toggleSuccessMessage }) {


  return (

    <div className='absolute left-1/2 transform -translate-x-1/2 bg-white rounded-lg border border-gray-300 w-2/5 h-[300px] shadow-lg py-8 px-14 z-50'>
      <div className='flex'>
        <button className="ml-auto text-2xl" onClick={() => toggleSuccessMessage()}>
          <RxCross2 />
        </button>
      </div>

      <h2 className='mb-2'>Thank you for your submission!</h2>
      <p className='mb-12'>The word has been successfully added to our review process. We appreciate your valuable contribution to enhancing our glossary. You will be notified if further clarification is needed.</p>

    </div>


  );
}

export default SuccessMessage;