"use client";

import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Formik, Form } from "formik";
import FormField from '@/components/FormField';
import axios from 'axios';


const questions = [
  {
    label: "Name",
    id: "name",
    name: "name",
    placeholder: "Your name",
  },
  {
    label: "Email",
    id: "email",
    name: "email",
    placeholder: "Your Email",
  },
  {
    label: "Message",
    id: "message",
    name: "message",
    as: "textarea",
    placeholder: "Type your message here",
  },

];

function ContactUs() {
  const formRef = useRef(null);

  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  useEffect(() => {
    // Reset the form when navigating back
    if (formRef.current) {
      formRef.current.reset();
    }
  }, []); // Runs only on component mount

  const handleSubmit = async (values, actions) => {
    try {
      const response = await axios.post("http://localhost:8080/api/formvalues", values);
    } catch (error) {
      console.error("Error submitting form to server:", error);
    }
    
  };


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}>

      {() => (
        <Form ref={formRef} className="flex justify-around bg-white font-medium text-gray-600 p-20 h-screen">

          <div className="flex flex-col items-start justify-evenly w-2/3">
            <div className='contact-left-title'>
              <h1 className=' mb-0'>Get in touch</h1>
              <hr className='h-1 w-28 bg-cyan-600' />
            </div>

            <div className='flex flex-col w-[500px] gap-8'>
              {questions.map((question) => (
     
                  <FormField
                    key={question.id}
                    label={question.label}
                    id={question.id}
                    name={question.name}
                    placeholder={question.placeholder}
                    as={question.as}
                  />
              ))}
            </div>

            <button type='submit' className='submit-button'>Submit <FaArrowRight /></button>
          </div>

          <div className='flex items-center w-[800px]'>
            <img src='/contact-us.png' alt='avatar image of the message sign'></img>
          </div>

        </Form>
      )}

    </Formik>

  );
}

export default ContactUs;