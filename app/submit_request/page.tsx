"use client";

import React, { useEffect } from 'react';
import { Formik, Form } from "formik";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RxCross2 } from "react-icons/rx";
import * as Yup from "yup";
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";
import FormField from '@/components/FormField';
import { Tooltip } from '@/app/glossary/[word]/page';


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

  const handleSubmit = async (values, actions) => {
    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        access_key: 'dab878f7-aab6-4b05-ad47-18d466320add',
        ...values
      });

      if (response.data.success) {
        // actions.setStatus({ success: "Form submitted successfully!" }); // Set success message
        actions.resetForm();  // Reset form fields
      } else {
        console.error("Submission failed:", response.data);
        // actions.setStatus({ error: "Failed to submit form. Please try again." }); // Set error message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // actions.setStatus({ error: "An error occurred. Please try again." }); // Set error message
    }
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialStatus={{}}>

      {({ }) => {
        console.log('Formik Status:', status);   // Check if status updates
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

                <div className='flex flex-col mt-16 gap-8'>
                  {questions.map((question, index) => (
                    <div className='flex gap-8'>
                      <span className='w-2'>{index + 1}.</span>
                      <FormField
                      
                        key={question.id}
                        label={question.label}
                        id={question.id}
                        name={question.name}
                        placeholder={question.placeholder}
                        as={question.as}

                      />
                    </div>

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