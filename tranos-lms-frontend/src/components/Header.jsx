import React from 'react'
import searchIcon from '../images/searchIcon.png'
import bellIcon from '../images/bellIcon.png'
import userAvatar from '../images/userAvatar.png'
import Hamburger from './Hamburger'

const Header = (props) => {
  const {openBurger, setOpenBurger} = props
  return (
    <>
     <header className='header'>
            <div className='md:flex items-center justify-between' >
                <div>
                  <div className='flex justify-between items-center'>
                <h2 className='font-black mb-3'>Good day Emmanuel!</h2>
                <button className='burger' onClick={()=>setOpenBurger(!openBurger)}><Hamburger/></button>
                  </div>
                <p>Welcome to Tranos LMS! Study anytime and anywhere</p>
                </div>
                
                <div className='flex items-center justify-center md:justify-end mt-5 md:mt-0'>
                
                <div className='header_input_container'>
                <input className='header_input' type="text" /><span><img src={searchIcon} alt="" /></span>
                </div>

                <div className='bell_icon_container'><img src={bellIcon} alt="bell Icon" /></div>
                <div><img src={userAvatar} alt="user avatar" /></div>
                
                </div>
     
            </div>
        </header>
    </>
  )
}

export default Header