import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const SignIn = () => {
    const validationSchema = Yup.object().shape({
        EMPLOYEE_ID_NO: Yup.string().required('Employee no is required'),
        PASSWORD: Yup.string().required('Password is required'),
      })
      const formik = useFormik({
        initialValues: {
            EMPLOYEE_ID_NO: '',
            PASSWORD: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log(values)
        },
      });
  return (
    <React.Fragment>
    <section className='sign_in_container'>   
        <h2 className='text-2xl font-black'>Welcome Back!</h2>
        <p>Sign in to your account</p>
    <form className='mt-5' onSubmit={formik.handleSubmit}>
        <div className='form_group'>
          <label htmlFor="EMPLOYEE_ID_NO">Employee id no</label>
          <input
          placeholder='Email'
            type="text"
            id="EMPLOYEE_ID_NO"
            name="EMPLOYEE_ID_NO"
            value={formik.values.EMPLOYEE_ID_NO}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.EMPLOYEE_ID_NO && formik.errors.EMPLOYEE_ID_NO && <div style={{color: "red"}}>{formik.errors.EMPLOYEE_ID_NO}</div>}
        </div>     

        <div className='form_group'>
          <label htmlFor="PASSWORD">Password</label>
          <input
          placeholder='Enter your password'
            type="password"
            id="PASSWORD"
            name="PASSWORD"
            value={formik.values.PASSWORD}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.PASSWORD && formik.errors.PASSWORD && <div style={{color: "red"}}>{formik.errors.PASSWORD}</div>}
        </div>
        <small>Forgot password?</small>

        <div className='flex items-center'>
            <input className='mr-2' type="checkbox" />
            <p>Keep me signed in until I sign out</p>
        </div>
        
        <button className='sign_up_in_btn'>Login</button>

       <p className='text-center'>Dont't have an account yet? Sign Up</p> 
    </form>
    </section>
    </React.Fragment>
  )
}





