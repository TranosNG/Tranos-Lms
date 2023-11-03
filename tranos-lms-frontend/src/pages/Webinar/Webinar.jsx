import React from 'react'
import SideBar from '../../components/SideBar'
// import TrainingLibraryComp from '../../components/TrainingLibaryComp'
import TrainingLibraryComp from '../../components/TrainingLibaryComp'

const Webinar = () => {
  return (
    <React.Fragment>
    <section className='userdashboard_section flex'>
    
<aside className='md:w-2/12'>
          <SideBar/>
      </aside>

      <main className='md:w-10/12'>
          <TrainingLibraryComp/>
      </main>
      </section>
    
  </React.Fragment>
  )
}

export default Webinar