/* eslint-disable */

import signinStyles from './signinpage.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createTodoFormValidationSchema } from './validator'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { dogFoodApi } from '../../../api/DogFoodApi'
import { AppContext } from '../../../contexts/AppContextProvider';
import React, { useContext } from 'react';
import { withQuery } from '../../HOCs/withQuery';

const initialValues = {
    email: '',
    password: '',
}

export function SigninPage() {

  const navigate = useNavigate()

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data) => fetch('https://api.react-learning.ru/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
  })

  const submitHandler = async (values) => {
    console.log({ values})

    await mutateAsync(values)

    navigate(`/goods`)
  }
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createTodoFormValidationSchema}
      onSubmit={submitHandler}
    >
      <Form className={signinStyles.form}>
        <Field className={signinStyles.input} name="email" placeholder="Email here" type="text" />
        <ErrorMessage component="p" className="error" name="email" />

        <Field className={signinStyles.input} name="password" placeholder="password here" type="text" />
        <ErrorMessage component="p" className="error" name="password" />
  
        <button className={signinStyles.btn} type="submit">Sign in</button>
      </Form>
    </Formik>
  )
}
