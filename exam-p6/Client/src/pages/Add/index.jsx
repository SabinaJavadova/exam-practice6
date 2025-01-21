import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  img: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  price: Yup.number()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Add = () => {


  return (

    <>

      <div>
        <h1>Signup</h1>
        <Formik
          initialValues={{
            img: '',
            name: '',
            description: '',
            price: 0,
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
           
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="img" />
              {errors.img && touched.img ? (
                <div>{errors.img}</div>
              ) : null}
              <Field name="name" />
              {errors.name && touched.name ? (
                <div>{errors.name}</div>
              ) : null}
              <Field name="description" />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
              <Field name="price" />
              {errors.price && touched.price ? (
                <div>{errors.price}</div>
              ) : null}
             
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    
    </>


  )
}

export default Add