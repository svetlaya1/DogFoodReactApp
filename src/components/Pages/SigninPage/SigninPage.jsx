/* eslint-disable */

import signinStyles from './signinpage.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createTodoFormValidationSchema } from './validator'
import { useMutation } from '@tanstack/react-query'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContextProvider';
import React, { useContext } from 'react';
import { Loader } from '../../Loader/Loader'
import { withQuery } from '../../HOCs/withQuery';

const initialValues = {
    email: '',
    password: '',
=======
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Loader } from '../../Loader/Loader'
import authSlice from '../../../store/auth'

const initialValues = {
  email: '',
  password: '',
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
}

export const SigninPage = () => {
  const navigate = useNavigate()
<<<<<<< HEAD

  const { setToken } = useContext(AppContext)
=======
  const dispatch = useDispatch();
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)

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
<<<<<<< HEAD
          setToken(data.token)
=======
          // setToken(data.token)
          dispatch(authSlice.actions.setToken(data.token));
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
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
<<<<<<< HEAD
  
=======

>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
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
<<<<<<< HEAD
  
=======

>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
        <button className={signinStyles.btn} type="submit">Sign in</button>
      </Form>
    </Formik>
  )
}
