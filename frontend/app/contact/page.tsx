"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
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

  const router = useRouter();

  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  // Determine the API URL based on the environment
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080/api/formvalues" // Development URL
      : process.env.NEXT_PUBLIC_BACKEND_URL + "/api/formvalues"; // Production URL

  const handleSubmit = async (values, actions) => {
    try {
      const response = await axios.post(apiUrl, values);

      if (response.status === 200) {
        router.push('/success');// Redirect to the success page
        actions.resetForm();
      } else {
        console.error("Unexpected response status:", response.status);
      }

    } catch (error) {
      console.error("Error submitting form to server:", error);
      alert("Failed to submit the form. Please try again later."); // Simple feedback to user

    }

  };


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}>

      {() => (
        <Form className="relative flex justify-center font-medium text-gray-600 min-h-screen">

          <div className="flex flex-col mt-12" style={{ width: 'clamp(200px, 70vw, 70vw)' }}>
            
            <div className='contact-left-title'>
              <h1 className=' mb-0'>Get in touch</h1>
              <hr className='h-1 w-20 sm:w-28 bg-customTeal' />
            </div>

            <div className='flex flex-col w-full gap-8 mt-12' >
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

            <button type='submit' className='submit-button mt-12 mx-auto'>Submit <FaArrowRight /></button>
          </div>

          
          <img className='absolute inset-0 h-full w-full object-scale-down -z-10 sm:flex items-center opacity-10' src='/contact-us.png' alt='avatar image of a team'></img>
        

        </Form>
      )}

    </Formik>

  );
}

export default ContactUs;