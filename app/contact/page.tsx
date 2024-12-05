"use client"

import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";

function ContactUs() {
  const formRef = useRef(null);

  useEffect(() => {
    // Reset the form when navigating back
    if (formRef.current) {
      formRef.current.reset();
    }
  }, []); // Runs only on component mount

  return (
    <div className="flex justify-around bg-white font-medium text-gray-600 p-20 h-screen">
      <form ref={formRef}
        action="https://api.web3forms.com/submit"
        method='POST'
        className="flex flex-col items-start justify-evenly w-2/3"
      >
        <div className='contact-left-title'>
          <h1 className=' mb-0'>Get in touch</h1>
          <hr className='h-1 w-28 bg-cyan-600'/>
        </div>
        <input type="hidden" name="access_key" value="dab878f7-aab6-4b05-ad47-18d466320add"></input>

        <div className='flex flex-col w-2/3 gap-8'>
          <input type="text" name="name" placeholder='Your Name' className='contact-inputs' required></input>
          <input type="email" name="email" placeholder='Your Email' className='contact-inputs' required></input>
          <textarea name='message' placeholder='Your Message' className='contact-inputs textarea' required></textarea>
        </div>
        
        <button type='submit'className='submit-button'>Submit <FaArrowRight /></button>
      </form>

      <div className='flex items-center w-[800px]'>
        <img src='/contact-us.png' alt='avatar image of the message sign'></img>

      </div>
    </div>
  );
}

export default ContactUs;