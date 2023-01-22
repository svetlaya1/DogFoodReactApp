/* eslint-disable */

import * as Yup from 'yup'

export const createTodoFormValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
})
