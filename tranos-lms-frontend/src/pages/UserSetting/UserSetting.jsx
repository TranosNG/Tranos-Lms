import React from 'react'
import SideBar from '../../components/SideBar'
import UserSettingComp from '../../components/UserSettingComp'
import './UserSetting.css'

const UserSetting = () => {
  return (
    <React.Fragment>
    <section className='userdashboard_section flex'>
    
<aside className='md:w-2/12'>
          <SideBar/>
      </aside>

      <main className='md:w-10/12'>
          <UserSettingComp/>
      </main>
      </section>
    
  </React.Fragment>
  )
}

export default UserSetting