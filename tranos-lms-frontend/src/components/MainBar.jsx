import React, {useState} from 'react'
import Calendar from 'react-calendar'
import '../pages/userdashboard/Userdashboard.css'
import 'react-calendar/dist/Calendar.css'
import TrainingInProgress from './TrainingInProgress'
import Header from './Header'



const MainBar = (props) => {
  const {openBurger, setOpenBurger} = props
    const [date, setDate] = useState(new Date())
  return (
    <React.Fragment>
        <section className="main_bar_container">
       
        <Header openBurger={openBurger} setOpenBurger={setOpenBurger}/>
        
        <article>

        <main>
        <TrainingInProgress/>
        </main>

        <aside className='main_bar_container_right'>
        <Calendar onChange={setDate} value={date}/>
        </aside>

        </article>
        </section>
    </React.Fragment>
  )
}

export default MainBar