import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const SignUp = () => {
    const validationSchema = Yup.object().shape({
        EMPLOYEE_ID_NO: Yup.string().required('Employee no is required'),
        FIRST_NAME: Yup.string().required('First Name is required'),
        LAST_NAME: Yup.string().required('Last Name is required'),
        EMAIL: Yup.string().required('Email is required'),
        PHONE_NUMBER: Yup.string().required('Phone number is required'),
        DEPARTMENT: Yup.string().required('Department is required'),
        UNIT: Yup.string().required('Unit is required'),
        JOB_ROLE: Yup.string().required('Job role is required'),
        DATE_OF_EMPLOYMENT: Yup.string().required('Date of employment is required'),
        PASSWORD: Yup.string().required('Password is required'),
        CONFIRM_PASSWORD: Yup.string().required('confirm password is required').oneOf([Yup.ref("PASSWORD")], "Password does not match"),
      })
      const formik = useFormik({
        initialValues: {
            EMPLOYEE_ID_NO: '',
            FIRST_NAME: '',
            LAST_NAME: '',
            EMAIL: '',
            PHONE_NUMBER: '',
            DEPARTMENT: '',
            UNIT: '',
            JOB_ROLE: '',
            DATE_OF_EMPLOYMENT: '',
            PASSWORD: '',
            CONFIRM_PASSWORD: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log(values)
        },
      });
  return (
    <React.Fragment>
    <section className='signup_container'>

    <form onSubmit={formik.handleSubmit}>
    {/* <h2 className='text-center text-xl font-extrabold'>Sign up</h2> */}
        <div className='form_group'>
          <label htmlFor="EMPLOYEE_ID_NO">Employee id no</label>
          <input
            type="text"
            id="EMPLOYEE_ID_NO"
            name="EMPLOYEE_ID_NO"
            placeholder='employee id no'
            value={formik.values.EMPLOYEE_ID_NO}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.EMPLOYEE_ID_NO && formik.errors.EMPLOYEE_ID_NO && <div style={{color: "red"}}>{formik.errors.EMPLOYEE_ID_NO}</div>}
        </div>

        <div className="md:flex">
        <div className='form_group flex-1 mr-3'>
          <label htmlFor="FIRST_NAME">First name</label>
          <input
            type="text"
            id="FIRST_NAME"
            name="FIRST_NAME"
            placeholder='First name'
            value={formik.values.FIRST_NAME}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.FIRST_NAME && formik.errors.FIRST_NAME && <div style={{color: "red"}}>{formik.errors.FIRST_NAME}</div>}
        </div>

        <div className='form_group flex-1'>
          <label htmlFor="LAST_NAME">Last name</label>
          <input
            type="text"
            id="LAST_NAME"
            name="LAST_NAME"
            placeholder='Last name'
            value={formik.values.LAST_NAME}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.LAST_NAME && formik.errors.LAST_NAME && <div style={{color: "red"}}>{formik.errors.LAST_NAME}</div>}
        </div>
        </div>

        <div className='md:flex'>
        <div className='form_group flex-1 mr-3'>
          <label htmlFor="EMAIL">Email</label>
          <input
            type="text"
            id="EMAIL"
            name="EMAIL"
            placeholder='Email'
            value={formik.values.EMAIL}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.EMAIL && formik.errors.EMAIL && <div style={{color: "red"}}>{formik.errors.EMAIL}</div>}
        </div>

        <div className='form_group flex-1'>
          <label htmlFor="PHONE_NUMBER">Phone number</label>
          <input
            type="text"
            id="PHONE_NUMBER"
            name="PHONE_NUMBER"
            placeholder='Phone number'
            value={formik.values.PHONE_NUMBER}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.PHONE_NUMBER && formik.errors.PHONE_NUMBER && <div style={{color: "red"}}>{formik.errors.PHONE_NUMBER}</div>}
        </div>
        </div>

        <div className="md:flex">
        <div className='form_group flex-1 mr-3'>
          <label htmlFor="DEPARTMENT">Department</label>
          <input
            type="text"
            id="DEPARTMENT"
            name="DEPARTMENT"
            placeholder='Department'
            value={formik.values.DEPARTMENT}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.DEPARTMENT && formik.errors.DEPARTMENT && <div style={{color: "red"}}>{formik.errors.DEPARTMENT}</div>}
        </div>

        <div className='form_group flex-1'>
          <label htmlFor="UNIT">Unit</label>
          <input
            type="text"
            id="UNIT"
            name="UNIT"
            placeholder='Unit'
            value={formik.values.UNIT}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.UNIT && formik.errors.UNIT && <div style={{color: "red"}}>{formik.errors.UNIT}</div>}
        </div>
        </div>

        <div className="md:flex">
        <div className='form_group flex-1 mr-3'>
          <label htmlFor="JOB_ROLE">Job role</label>
          <input
            type="text"
            id="JOB_ROLE"
            name="JOB_ROLE"
            placeholder='Job role'
            value={formik.values.JOB_ROLE}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.JOB_ROLE && formik.errors.JOB_ROLE && <div style={{color: "red"}}>{formik.errors.JOB_ROLE}</div>}
        </div>

        <div className='form_group flex-1'>
          <label htmlFor="DATE_OF_EMPLOYMENT">Date of employment</label>
          <input
            type="date"
            id="DATE_OF_EMPLOYMENT"
            name="DATE_OF_EMPLOYMENT"
            placeholder='Date of employment'
            value={formik.values.DATE_OF_EMPLOYMENT}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.DATE_OF_EMPLOYMENT && formik.errors.DATE_OF_EMPLOYMENT && <div style={{color: "red"}}>{formik.errors.DATE_OF_EMPLOYMENT}</div>}
        </div>
        </div>

        <div className="md:flex">
        <div className='form_group flex-1 mr-3'>
          <label htmlFor="PASSWORD">Password</label>
          <input
            type="password"
            id="PASSWORD"
            name="PASSWORD"
            placeholder='Password'
            value={formik.values.PASSWORD}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.PASSWORD && formik.errors.PASSWORD && <div style={{color: "red"}}>{formik.errors.PASSWORD}</div>}
        </div>

        <div className='form_group flex-1'>
          <label htmlFor="CONFIRM_PASSWORD">Confirm Password</label>
          <input
            type="password"
            id="CONFIRM_PASSWORD"
            name="CONFIRM_PASSWORD"
            placeholder='Confirm password'
            value={formik.values.CONFIRM_PASSWORD}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.CONFIRM_PASSWORD && formik.errors.CONFIRM_PASSWORD && <div style={{color: "red"}}>{formik.errors.CONFIRM_PASSWORD}</div>}
        </div>

        </div>
    <button className='sign_up_in_btn'>Sign up</button>
    <p>By signing up, you agree to the Privacy Policy and Terms and Services</p>
    </form>
    </section>
    </React.Fragment>
  )
}





