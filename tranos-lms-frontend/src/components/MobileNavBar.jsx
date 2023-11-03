import React from 'react'
import TranosLogo from '../images/TranosLogo.png'
import dashboardIcon from '../images/dashboardIcon.png'
import trainigLibIcon from '../images/trainingLibIcon.png'
import myTrainingIcon from '../images/myTrainingIcon.png'
import webinarIcon from '../images/webinarIcon.png'
import favoriteIcon from '../images/favoriteIcon.png'
import calenderIcon from '../images/calenderIcon.png'
import achieveIcon from '../images/achieveIcon.png'
import chatIcon from '../images/chat.png'
import settingIcon from '../images/settingIcon.png'
import helpIcon from '../images/helpIcon.png'
import langIcon from '../images/LangIcon.png'
import logOutIcon from '../images/logOutIcon.png'
import { Link } from 'react-router-dom'

const MobileNavBar = (props) => {
const {closeBurger, setCloseBurger} = props

  return (
    <React.Fragment>
        {closeBurger ? null :   <section className='mobile_side_bar_container'>
        <div className='flex justify-between items-center'>
        <img src={TranosLogo} alt={TranosLogo} />
        <button className='text-xl' onClick={()=>setCloseBurger(!closeBurger)}>x</button>
        </div>

        <ul className='mobile_bar_links'>

            <div className='flex items-center mt-5 py-1 px-2 rounded-lg'>
            <span className='mr-2'><img src={dashboardIcon} alt={dashboardIcon} /></span><li><Link to='/userdashboard'>Dashboard</Link></li>
            </div>
            
            <div className='flex items-center mt-5 py-1 px-2 rounded-lg'>
            <span className='mr-2'><img src={trainigLibIcon} alt={trainigLibIcon} /></span><li><Link to='/training-library'>Training Libraries</Link></li>
            </div>

            <div className='flex items-center mt-5 py-1 px-2 rounded-lg'>
            <span className='mr-2'><img src={myTrainingIcon} alt={myTrainingIcon} /></span><li><Link to='/mytraining'>My Training</Link></li>
            </div>

            <div className='flex items-center mt-5 py-1 px-2 rounded-lg'>
            <span className='mr-2'><img src={webinarIcon} alt={webinarIcon} /></span><li><Link to="/webinar">Webinars</Link></li>
            </div>

            <div className='flex items-center mt-5 py-1 px-2 rounded-lg'>
            <span className='mr-2'><img src={favoriteIcon} alt={favoriteIcon} /></span><li>Favorites</li>
            </div>

            <div className='flex items-center mt-5 py-1 px-2 rounded-lg'>
            <span className='mr-2'><img src={calenderIcon} alt={calenderIcon} /></span><li>Calender</li>
            </div>

            <div className='flex items-center mt-5 py-1 px-2 rounded-lg'>
            <span className='mr-2'><img src={achieveIcon} alt={achieveIcon} /></span><li>Achievements</li>
            </div>

            <div className='flex items-center mt-5 py-1 px-2 rounded-lg'>
            <span className='mr-2'><img src={chatIcon} alt={chatIcon} /></span><li>Chat</li>
            </div>

            <div className='flex items-center mt-5 py-1 px-2 rounded-lg'>
            <span className='mr-2'><img src={settingIcon} alt={settingIcon} /></span><li><Link to="/setting">Settings</Link></li>
            </div>

        </ul>



        <ul className='mt-10'>
            <div className='flex items-center mt-5'>
            <span className='mr-2'><img src={helpIcon} alt={helpIcon} /></span><li>Help</li>
            </div>

            <div className='flex items-center mt-5'>
            <span className='mr-2'><img src={langIcon} alt={langIcon} /></span><li>Eng</li>
            </div>

            <div className='flex items-center mt-5'>
            <span className='mr-2'><img src={logOutIcon} alt={logOutIcon} /></span><li>Log out</li>
            </div>
        </ul>

        </section>}
      
    </React.Fragment>
  )
  
}

export default MobileNavBar




