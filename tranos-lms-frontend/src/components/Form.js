import React, { useState } from 'react'
import { SignUp } from './signUp/SignUp'
import { SignIn } from './SignIn/SignIn'

const Form = () => {
const [login, setLogin] = useState(false)
const [signup, setSignup] = useState(true)

const openSignup = ()=>{
    setLogin(false)
    setSignup(true)
}

const openLogin = ()=>{
    setLogin(true)
    setSignup(false)
}
  return (
    <section className='form_container'>
        <header>
            <ul>
                <li className='signup_li' onClick={()=>openSignup()}>Signup</li>
                <li className='login_li' onClick={()=>openLogin()}>Login</li>
            </ul>
        </header>
        
        <div>
        {signup && <SignUp/>}
        {login && <SignIn/>}
        
        </div>
    </section>
  )
}

export default Form
