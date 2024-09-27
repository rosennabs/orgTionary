"use client";

import React, { useEffect } from 'react';
import { Formik, Form} from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";
import FormField from '@/components/FormField';

//Define types for form values
interface FormValues {
  name: string;
  email: string;
  word: string;
  definition: string;
  comments: string;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  word: Yup.string().required("Required"),
  definition: Yup.string().required("Required"),
  comment: Yup.string()
});

function WordRequest() {
  const initialValues: FormValues = {
    name: '',
    email: '',
    word: '',
    definition: '',
    comments: '',
  }

  return (
    <Formik
    initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          const response = await axios.post('https://api.web3forms.com/submit', {
            access_key: 'dab878f7-aab6-4b05-ad47-18d466320add', 
            ...values
          });

          if (response.data.success) {
            console.log("Form submitted successfully!", response.data);
          } else {
            console.error("Submission failed:", response.data);
          }
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      }}>
      
      {({}) => {
        return (
          <Form>
            <div className='contact-container -mt-24'>
    
              <div className='contact-left'>
                <div className='contact-left-title'>
                  <h1 className='text-blue-500 mb-0'>Tell Us More</h1>
                  <hr />
                </div>
                
                
                <FormField
                  label="Name"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
                <FormField
                  label="Email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />
                <FormField
                  label="New Word"
                  id="word"
                  name="word"
                  placeholder="Enter word"
                />
                <FormField
                  label="Word Definition"
                  id="definition"
                  name="definition"
                  as="textarea"
                  placeholder="Provide the meaning of the concept"
                />
                <FormField
                  label="Comments"
                  id="comments"
                  name="comments"
                  as="textarea"
                  placeholder="Type here"
                />

                
                <button type='submit'>Submit <FaArrowRight /></button>
            
              </div>
              
              <div className='contact-right'>
                <img src='/about.png' alt='avatar book image' className='h-[600px]'></img>

              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
    
  );
}

export default WordRequest;