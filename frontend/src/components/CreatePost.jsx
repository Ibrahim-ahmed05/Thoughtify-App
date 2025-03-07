import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
export default function CreatePost() {
  const onSubmit = (data) => {
    axios.post('http://localhost:3001/posts',data).then((Response)=>{
    });
    setsuccess(true);

  };
   const[success,setsuccess]= useState(false);

  const validationSchema = yup.object().shape({
    title: yup.string().max(32, "Title must be at most 32 characters").required("Title is required"),
    Description: yup.string().max(150, "Description must be at most 150 characters").required("Description is required"),
    username: yup.string().required("Username is required"),
  });

  return (
    // <div className="createpagecontainer">
      <div className="modal">
        <div className="modal__header">
          <span className="modal__title" onClick={{title: "", Description: "", username: ""}}>New Thought</span>
        </div>
        <Formik
          initialValues={{ title: "", Description: "", username: "" }}
          onSubmit={onSubmit}  // Use the correct "onSubmit" prop here
          validationSchema={validationSchema}  // Use the correct validation schema
        >
          {({ errors, touched }) => (
            <Form>
              <div className="modal__body">
                {/* Title input */}
                <div className="input">
                  <label htmlFor="posttitle" className="input__label">
                    Title
                  </label>
                  <Field
                    id="posttitle"
                    name="title"
                    placeholder="Enter the title..."
                    className="input__field"
                    type="text"
                  />
                  <ErrorMessage name="title" component="div" className="error-message"/>
                  <p className="input__description">
                    The title must contain a maximum of 32 characters
                  </p>
                </div>

                {/* Username input */}
                <div className="input">
                  <label htmlFor="username" className="input__label">
                    Username
                  </label>
                  <Field
                    id="username"
                    name="username"
                    placeholder="Enter the username..."
                    className="input__field"
                    type="text"
                  />
                  <ErrorMessage name="username" component="div" className="error-message" />
                </div>

                {/* Description input */}
                <div className="input">
                  <label htmlFor="description" className="input__label">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    name="Description"
                    placeholder="Enter your thoughts..."
                    className="input__field input__field--textarea"
                  />
                  <ErrorMessage name="Description" component="div" className="error-message" />
                  <p className="input__description">
                  </p>
                </div>
              </div>

              <div className="modal__footer">
                <button className="button button--primary" type="submit" onSubmit={onsubmit}>
                  SHARE THOUGHT
                </button>
                {
                  success && <p className='success'>Thought Shared successfully.</p>
                }
              </div>
            </Form>
          )}
        </Formik>
      </div>
  );
}
