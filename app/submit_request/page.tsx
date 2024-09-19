"use client";

import React, { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";

function WordRequest() {

  return (
    <div className='contact-container -mt-24'>
      <form action="https://api.web3forms.com/submit" method='POST' className="contact-left">
        <div className='contact-left-title'>
          <h1 className='text-blue-500 mb-0'>Tell Us More</h1>
          <hr />
        </div>
        <input type="hidden" name="access_key" value="dab878f7-aab6-4b05-ad47-18d466320add"></input>

        <input type="text" name="name" placeholder='Your Name' className='contact-inputs' required></input>
        <input type="email" name="email" placeholder='Your Email' className='contact-inputs' required></input>
        <input type="text" name="word" placeholder='New Word' className='contact-inputs' required></input>

        <textarea name='definition' placeholder='Word Definition' className='contact-inputs' required></textarea>

        <textarea name='comments' placeholder='Comments' className='contact-inputs' required></textarea>
        <button type='submit'>Submit <FaArrowRight /></button>
      </form>

      <div className='contact-right'>
        <img src='/about.png' alt='avatar book image' className='h-[600px]'></img>

      </div>
    </div>
  );
}

export default WordRequest;