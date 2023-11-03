import React from 'react'
import tranosLogo from '../images/TranosLogo.png'
import signUpInImg from '../images/signUpInImg.png'
import Form from '../components/Form'

export const FormPage = () => {
  return (
    <React.Fragment>
        <section className='form_page'>
        <main>
            <header className='logo_container'>
            <img src={tranosLogo} alt={tranosLogo} />
            </header>

            <div className='signUpIn_Img_container'>
                <img src={signUpInImg} alt="" />
            </div>
        </main>

        <aside>
        <Form/>
        </aside>
        </section>
    </React.Fragment>
  )
}
