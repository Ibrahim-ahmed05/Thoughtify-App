import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Register() {
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/users', data).then((response) => {
      setSuccess(true);
    });
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <>
      <div className="container2">
        <div className="form_area">
          <p className="title">SIGN UP</p>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form_group">
                  <label className="sub_title" htmlFor="name">
                    Name
                  </label>
                  <Field
                    placeholder="Enter your full name"
                    name="name"
                    className="form_style"
                    type="text"
                  />
                  <ErrorMessage name="name" component="div" className="error-message" />
                </div>

                <div className="form_group">
                  <label className="sub_title" htmlFor="email">
                    Email
                  </label>
                  <Field
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    className="form_style"
                    type="email"
                  />
                  <ErrorMessage name="email" component="div" className="error-message" />
                </div>

                <div className="form_group">
                  <label className="sub_title" htmlFor="password">
                    Password
                  </label>
                  <Field
                    placeholder="Enter your password"
                    name="password"
                    id="password"
                    className="form_style"
                    type="password"
                  />
                  <ErrorMessage name="password" component="div" className="error-message" />
                </div>

                <div>
                  <button className="btn2" type="submit">
                    SIGN UP
                  </button>
                  <p>
                    Have an Account? <Link to="/Login">Login Here!</Link>
                  </p>
                  {success && alert("Registration successfull")}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
