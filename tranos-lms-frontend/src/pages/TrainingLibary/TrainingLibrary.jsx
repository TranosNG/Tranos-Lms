import React from 'react'
import SideBar from '../../components/SideBar'
import TrainingLibaryComp from '../../components/TrainingLibaryComp'
import './TrainingLibrary.css'

const TrainingLibrary = () => {
  return (
    <React.Fragment>
      <section className='userdashboard_section flex'>
      
  <aside className='md:w-2/12'>
            <SideBar/>
        </aside>

        <main className='md:w-10/12'>
            <TrainingLibaryComp/>
        </main>
        </section>
      
    </React.Fragment>
         
  
  )
}

export default TrainingLibrary