import React from 'react'
import SideBar from '../../components/SideBar'
import MainBar from '../../components/MainBar'
import './Userdashboard.css'
import MobileNavBar from '../../components/MobileNavBar'


const Userdashboard = (props) => {
  const {openBurger, setOpenBurger, closeBurger, setCloseBurger} = props
  return (
    <React.Fragment>
      <section className='userdashboard_section md:flex'>
        <aside className='md:w-2/12'>
            <SideBar/>
          {openBurger ? <MobileNavBar closeBurger={closeBurger} setCloseBurger={setCloseBurger}/> : null}     
        </aside>

        <main className='md:w-10/12'>
            <MainBar openBurger={openBurger} setOpenBurger={setOpenBurger}/>
        </main>
        </section>
    </React.Fragment>
  )
}

export default Userdashboard