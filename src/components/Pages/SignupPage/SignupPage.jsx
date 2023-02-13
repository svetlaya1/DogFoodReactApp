/* eslint-disable */

import signupStyles from './signuppage.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createTodoFormValidationSchema } from './validator'
import { useMutation } from '@tanstack/react-query'
import { Route, useNavigate } from 'react-router-dom'
import { SignupPageErr } from './SignupPageErr'


const initialValues = {
<<<<<<< HEAD
    email: '',
    group: 'sm9',
    password: '',
=======
  email: '',
  group: 'sm9',
  password: '',
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
}

export function SignupPage() {
  const navigate = useNavigate()

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data) => fetch('https://api.react-learning.ru/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status > 299) {
        navigate(`/signup/error`)
      } else navigate(`/signin`)
    })
  })

  const submitHandler = async (values) => {
<<<<<<< HEAD
    console.log({ values})

    await mutateAsync(values)

  }
  
=======
    await mutateAsync(values)
  }

>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createTodoFormValidationSchema}
      onSubmit={submitHandler}
    >
      <Form className={signupStyles.form}>
        <Field className={signupStyles.input} name="email" placeholder="Email here" type="text" />
        <ErrorMessage component="p" className="error" name="email" />
<<<<<<< HEAD
    
=======

>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
        <Field className={signupStyles.input} name="group" placeholder="group here" type="text" />
        <ErrorMessage component="p" className="error" name="group" />

        <Field className={signupStyles.input} name="password" placeholder="password here" type="text" />
        <ErrorMessage component="p" className="error" name="password" />
<<<<<<< HEAD
    
=======

>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
        <button disabled={isLoading} className={signupStyles.btn} type="submit">Sign up</button>
      </Form>
    </Formik>
  )
}
<<<<<<< HEAD
  
=======
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
