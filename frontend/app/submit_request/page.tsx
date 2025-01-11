"use client";

import React from 'react';
import { Formik, Form, FormikHelpers } from "formik";
import { useRouter } from 'next/navigation';
import * as Yup from "yup";
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";
import FormField from '@/components/FormField';
import { Question }from '@/app/contact/page';



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
  word: Yup.string().required("Required"),
  definition: Yup.string().required("Required"),
  clarification: Yup.string().required("Required"),
  examples: Yup.string().required("Required"),
  relatedWords: Yup.string(),
  links: Yup.string()
    .url("Invalid URL format") 
    .required("Required"),
  comments: Yup.string(),
  email: Yup.string()
    .email('Invalid email address')
    .required("Required"),

});


const questions: Question[] = [
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
    placeholder: "Type here",
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

  const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {

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
       
            <Form className="flex justify-center font-medium text-gray-600 min-h-screen">

              <div className="flex flex-col mt-12" style={{ width: 'clamp(200px, 70vw, 60vw)' }}>

                <div className='contact-left-title'>
                  <h1 className=' mb-0'>Tell Us More</h1>
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

                <button type='submit' className='submit-button my-12 mx-auto'>Submit <FaArrowRight /></button>
              </div>


            </Form>
         
        );
      }}
    </Formik>

  );
}

export default WordRequest;