/* eslint-disable */

import signinStyles from './signinpage.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createTodoFormValidationSchema } from './validator'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContextProvider';
import React, { useContext } from 'react';
import { Loader } from '../../Loader/Loader'
import { withQuery } from '../../HOCs/withQuery';

const initialValues = {
    email: '',
    password: '',
}

export const SigninPage = () => {
  const navigate = useNavigate()

  const { setToken } = useContext(AppContext)

  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationFn: (data) => {
      return fetch("https://api.react-learning.ru/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.status === 401) {
            throw new Error(
              `Неправильные логин или пароль`
            )
          }
          if (res.status === 404) {
            throw new Error(
              `Ошибка ${res.status}: пользователя с таким email не существует`
            )
          }

          return res
        })
        .then((res) => res.json())
        .then((data) => {
          setToken(data.token)
        })
    },
  })

  const submitHandler = async (values) => {
    await mutateAsync(values)
    setTimeout(() => {
      navigate(`/goods`)
    }, 0)
  }

  if (isError) return <p>{error.message}</p>
  if (isLoading) return <Loader />
  
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
