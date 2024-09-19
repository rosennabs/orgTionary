"use client"

import React, { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";

function ContactUs() {

  useEffect(() => {
    // On page load, reset the form fields by reloading the page if coming back from history
    window.history.replaceState({}, document.title);
  }, []);

  return (
    <div className='contact-container -mt-24'>
      <form action="https://api.web3forms.com/submit" method='POST' className="contact-left">
        <div className='contact-left-title'>
          <h1 className='text-blue-500 mb-0'>Get in touch</h1>
          <hr/>
        </div>
        <input type="hidden" name="access_key" value="dab878f7-aab6-4b05-ad47-18d466320add"></input>

        <input type="text" name="name" placeholder='Your Name' className='contact-inputs' required></input>
        <input type="email" name="email" placeholder='Your Email' className='contact-inputs' required></input>
        <textarea name='message' placeholder='Your Message' className='contact-inputs' required></textarea>
        <button type='submit'>Submit <FaArrowRight /></button>
      </form>

      <div className='contact-right'>
        <img src='/contact-us.png' alt='avatar image of the message sign' className='h-[600px]'></img>

      </div>
    </div>
  );
}

export default ContactUs;