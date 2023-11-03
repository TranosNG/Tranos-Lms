import React from 'react'
import SideBar from '../../components/SideBar'
import MyTrainingComp from '../../components/MyTrainingComp'
import './MyTraining.css'

const MyTraining = () => {
  return (
    <React.Fragment>
         <section className='userdashboard_section flex'>
      
      <aside className='md:w-2/12'>
                <SideBar/>
            </aside>
    
            <main className='md:w-10/12'>
                <MyTrainingComp/>
            </main>
            </section>
    </React.Fragment>
  )
}

export default MyTraining