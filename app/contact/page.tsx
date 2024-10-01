"use client"

import React, { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";

function ContactUs() {

  useEffect(() => {
    // On page load, reset the form fields by reloading the page if coming back from history
    window.history.replaceState({}, document.title);
  }, []);

  return (
    <div className="flex justify-between absolute w-full max-h-[100vh] inset-0 top-28 overflow-y-auto bg-white font-medium text-gray-600 p-20">
      <form action="https://api.web3forms.com/submit" method='POST' className="flex flex-col items-start justify-evenly gap-4">
        <div className='contact-left-title'>
          <h1 className=' mb-0'>Get in touch</h1>
          <hr className='h-1 w-28 bg-cyan-600'/>
        </div>
        <input type="hidden" name="access_key" value="dab878f7-aab6-4b05-ad47-18d466320add"></input>

        <input type="text" name="name" placeholder='Your Name' className='contact-inputs' required></input>
        <input type="email" name="email" placeholder='Your Email' className='contact-inputs' required></input>
        <textarea name='message' placeholder='Your Message' className='contact-inputs textarea' required></textarea>
        <button type='submit'className='submit-button'>Submit <FaArrowRight /></button>
      </form>

      <div className='flex items-center w-[700px]'>
        <img src='/contact-us.png' alt='avatar image of the message sign'></img>

      </div>
    </div>
  );
}

export default ContactUs;