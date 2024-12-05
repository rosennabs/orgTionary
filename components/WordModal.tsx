// "use client";

// import React, { useEffect } from 'react';
// import Link from 'next/link';
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import axios from 'axios';
// import { FaArrowRight } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import FormField from '@/components/FormField';
// import { Tooltip } from '@/app/glossary/[word]/page';


// //Define types for form values
// interface FormValues {
//   word: string;
//   definition: string;
//   clarification: string;
//   examples: string;
//   relatedWords: string;
//   links: string;
//   comments: string;
//   email: string;
// };

// const validationSchema = Yup.object({
//   word: Yup.string().required("Required"),
//   definition: Yup.string().required("Required"),
//   clarification: Yup.string().required("Required"),
//   examples: Yup.string().required("Required"),
//   relatedWords: Yup.string().required("Required"),
//   links: Yup.string().required("Required"),
//   comments: Yup.string(),
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Email is required'),
  
// });

// const questions = [
//   {
//     label: "New Word",
//     id: "word",
//     name: "word",
//     placeholder: "Insert word",
//   },
//   {
//     label: "Definition",
//     id: "definition",
//     name: "definition",
//     as: "textarea",
//     placeholder: "Define the word",
//   },
//   {
//     label: "Clarify what the word does not mean for the organization",
//     id: "clarification",
//     name: "clarification",
//     placeholder: "What it does not mean",
//     as: "textarea"
//   },
//   {
//     label: "Provide examples of how the word is being used within the organization",
//     id: "examples",
//     name: "examples",
//     placeholder: "Usage examples",
//     as: "textarea"
//   },
//   {
//     label: "Provide similar/related words used interchangeably within the organization (if any)",
//     id: "relatedWords",
//     name: "relatedWords",
//     placeholder: "Other related words",
//     as: "textarea"
//   },
//   {
//     label: "Provide links to cited resources (if any)",
//     id: "links",
//     name: "links",
//     placeholder: "Add links",
//     as: "textarea"
//   },
//   {
//     label: "Comments",
//     id: "comments",
//     name: "comments",
//     as: "textarea",
//     placeholder: "Tell us more",
//   },
//   {
//     label: "Email Address",
//     id: "email",
//     name: "email",
//     placeholder: "Email",
//   },
// ];


// function WordModal(props) {

//   const initialValues: FormValues = {
//     word: '',
//     definition: '',
//     clarification: '',
//     examples:'',
//     relatedWords: '',
//     links: '',
//     comments: '',
//     email: ''
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={async (values) => {
//         try {
//           const response = await axios.post('https://api.web3forms.com/submit', {
//             access_key: 'dab878f7-aab6-4b05-ad47-18d466320add',
//             ...values
//           });

//           if (response.data.success) {
//             console.log("Form submitted successfully!", response.data);
//           } else {
//             console.error("Submission failed:", response.data);
//           }
//         } catch (error) {
//           console.error("Error submitting form:", error);
//         }
//       }}>

//       {({ }) => {
//         return (
//           <Form>
            
//             <div className="w-full max-h-[100vh] overflow-y-auto bg-white font-medium text-gray-600 py-8 px-20 rounded-xl">
//                 <Link className="flex justify-end text-3xl mb-8 z-50 text-gray-600" href="#" onClick={(e) => {
//                   e.preventDefault();
//                   props.setNewWordModal(false);
//                 }}>
//                   <button className='relative group'>
//                     <RxCross2 />
//                     <Tooltip>
//                       Back
//                     </Tooltip>
//                   </button>

//                 </Link>

//                 <div className="flex flex-col items-start justify-evenly">
//                   <div className='contact-left-title'>
//                     <h1 className=' mb-0'>Tell Us More</h1>
//                     <hr className='h-1 w-28 bg-cyan-600' />
//                   </div>

//                   <div className='flex flex-col mt-12 gap-8'>
//                     {questions.map((question, index) => (
//                       <FormField
//                         key={question.id}
//                         label={`${index + 1}. ${question.label}`}
//                         id={question.id}
//                         name={question.name}
//                         placeholder={question.placeholder}
//                         as={question.as}
//                       />
//                     ))}

//                   </div>

//                   <button type='submit'>Submit <FaArrowRight /></button>

//                 </div>


//               </div>
          

           
//           </Form>
//         );
//       }}
//     </Formik>

//   );
// }

// export default WordModal;