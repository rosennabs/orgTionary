"use client";

import React from 'react';
import { Formik, Form } from "formik";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RxCross2 } from "react-icons/rx";
import * as Yup from "yup";
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";
import FormField from '@/components/FormField';
import Tooltip from '@/components/Tooltip';




//Define types for form values
interface FormValues {
  word: string;
  definition: string;
  clarification: string;
  examples: string;
  relatedWords: string;
  links: string;
  comments: string;
  email: string;
};

const validationSchema = Yup.object({
  word: Yup.string(),
  definition: Yup.string(),
  clarification: Yup.string(),
  examples: Yup.string(),
  relatedWords: Yup.string(),
  links: Yup.string(),
  comments: Yup.string(),
  email: Yup.string()
    .email('Invalid email address'),

});

const questions = [
  {
    label: "Lexicon",
    id: "word",
    name: "word",
    placeholder: "Insert word",
  },
  {
    label: "Definition",
    id: "definition",
    name: "definition",
    as: "textarea",
    placeholder: "Provide a brief definition",
  },
  {
    label: "Clarify what the word does not mean for the organization",
    id: "clarification",
    name: "clarification",
    placeholder: "What it does not mean",
    as: "textarea"
  },
  {
    label: "Provide examples of how the word is being used within the organization",
    id: "examples",
    name: "examples",
    placeholder: "Usage examples",
    as: "textarea"
  },
  {
    label: "Provide similar/related words used interchangeably within the organization (if any)",
    id: "relatedWords",
    name: "relatedWords",
    placeholder: "Other related words",
    as: "textarea"
  },
  {
    label: "Provide links to cited resources",
    id: "links",
    name: "links",
    placeholder: "Add links",
    as: "textarea"
  },
  {
    label: "Comments",
    id: "comments",
    name: "comments",
    as: "textarea",
    placeholder: "Tell us more",
  },
  {
    label: "Email Address",
    id: "email",
    name: "email",
    placeholder: "Email",
  },
];


function WordRequest() {

  const router = useRouter();

  const initialValues: FormValues = {
    word: '',
    definition: '',
    clarification: '',
    examples: '',
    relatedWords: '',
    links: '',
    comments: '',
    email: ''
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
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>

      {({ }) => {

        return (
          <Form>
            <div className="flex justify-center bg-white font-medium text-gray-600 p-20">

              <Link className="text-3xl absolute top-40 right-16 z-50 text-gray-600" href="#" onClick={(e) => {
                e.preventDefault();
                router.back();
              }}>
                <button className='relative group'>
                  <RxCross2 />
                  <Tooltip>
                    Back
                  </Tooltip>
                </button>

              </Link>

              <div className='flex flex-col items-center justify-center w-3/4 border p-20 rounded-xl shadow-lg bg-white'>

                <div className='contact-left-title'>
                  <h1 className=' mb-0'>Tell Us More</h1>
                  <hr className='h-1 w-28 bg-cyan-600' />
                </div>

                <div className='flex flex-col mt-16 w-[700px] gap-8'>
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

                <button type='submit' className='submit-button w-[150px] mt-16'>Submit <FaArrowRight /></button>


              </div>

            </div>
          </Form>
        );
      }}
    </Formik>

  );
}

export default WordRequest;