import React from 'react'
import Header from './Header'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import userProfilePic from '../images/userProfilePic.png'

const UserSettingComp = () => {
  return (
    <React.Fragment>
        <section className='user_setting_container'>
        <Header/>

        <article className='my_training_grid_col'>
        <div className="col_1"> 
        <UserSettingCard/>
       
        </div>

        <div className="col_2">
        <div className="user_profile_pic_container">
            <img src={userProfilePic} alt="" />
            <button className='user_profile_pic_btn'>Browser photo</button>
        </div>
        </div>
        </article>
        
        <div className='user_setting_btn_container'> 
        <button style={{backgroundColor: "#3C4989", color: "white", marginRight: "5rem"}}>Save changes</button>
        <button style={{border: "1px solid #3C4989"}}> Discard changes</button>
        </div>
        </section>
    </React.Fragment>
  )
}

export default UserSettingComp

const UserSettingCard = () => {
    const validationSchema = Yup.object().shape({
        FIRST_NAME: Yup.string().required('First Name is required'),
        LAST_NAME: Yup.string().required('Last Name is required'),
        EMAIL: Yup.string().required('Email is required'),
        PHONE_NUMBER: Yup.string().required('Phone number is required'),
        DEPARTMENT: Yup.string().required('Department is required'),
        UNIT: Yup.string().required('Unit is required'),
        JOB_ROLE: Yup.string().required('Job role is required'),
        })
      const formik = useFormik({
        initialValues: {
            FIRST_NAME: '',
            LAST_NAME: '',
            EMAIL: '',
            PHONE_NUMBER: '',
            DEPARTMENT: '',
            UNIT: '',
            JOB_ROLE: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log(values)
        },
      });
    return(
        <>
        <h3>Account Settings</h3>
        <form className='user_setting_form' onSubmit={formik.handleSubmit}>
        <h4 className='text-sm'>Personal Information</h4>
        <p className='text-sm'>Here you can add a anew information about yourself or edit an existing personal information</p>
      
      <div className="user_setting_form_group mt-5">
        <div className='flex-1'>
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

        <div className=' flex-1'>
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

        <div className="user_setting_form_group">
        <div className='flex-1'>
          <label htmlFor="EMAIL">Email address</label>
          <input
            type="text"
            id="EMAIL"
            name="EMAIL"
            placeholder='email address'
            value={formik.values.EMAIL}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.EMAIL && formik.errors.EMAIL && <div style={{color: "red"}}>{formik.errors.EMAIL}</div>}
        </div>

        <div className='flex-1'>
          <label htmlFor="PHONE_NUMBER">Phone number</label>
          <input
            type="text"
            id="PHONE_NUMBER"
            name="PHONE_NUMBER"
            placeholder='phone number'
            value={formik.values.PHONE_NUMBER}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.PHONE_NUMBER && formik.errors.PHONE_NUMBER && <div style={{color: "red"}}>{formik.errors.PHONE_NUMBER}</div>}
        </div>
        </div>

        <div className="user_setting_form_group">
        <div className='flex-1'>
          <label htmlFor="DEPARTMENT">Department</label>
          <input
            type="text"
            id="DEPARTMENT"
            name="DEPARTMENT"
            placeholder='department'
            value={formik.values.DEPARTMENT}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.DEPARTMENT && formik.errors.DEPARTMENT && <div style={{color: "red"}}>{formik.errors.DEPARTMENT}</div>}
        </div>

        <div className='flex-1'>
          <label htmlFor="UNIT">Unit</label>
          <input
            type="text"
            id="UNIT"
            name="UNIT"
            placeholder='unit'
            value={formik.values.UNIT}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.UNIT && formik.errors.UNIT && <div style={{color: "red"}}>{formik.errors.UNIT}</div>}
        </div>
        </div>

        <div className='flex-1'>
          <label htmlFor="JOB_ROLE">Job role</label>
          <input
            type="text"
            id="JOB_ROLE"
            name="JOB_ROLE"
            placeholder='job role'
            value={formik.values.JOB_ROLE}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.JOB_ROLE && formik.errors.JOB_ROLE && <div style={{color: "red"}}>{formik.errors.JOB_ROLE}</div>}
        </div>
        </form>
        </>
    )
}









