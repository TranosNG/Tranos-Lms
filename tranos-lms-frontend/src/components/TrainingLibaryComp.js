import React, { useState } from 'react'
import Header from './Header'
import trainigImg_1 from '../images/trainingImg_1.png'
import trainigImg_2 from '../images/trainingImg_2.png'
import trainigImg_3 from '../images/trainingImg_3.png'
import trainerImg from '../images/trainerImg.png'
import materialIcon from '../images/materialIcon.png'
import myTrainingIcon from '../images/myTrainingIcon.png'
import fileIcon from '../images/fileIcon.png'
import clockIcon from '../images/clockIcon.png'
import '../pages/TrainingLibary/TrainingLibrary.css'


const trainingInfo = [
  {
    id: 1,
    trainingImg: trainigImg_1,
    trainingTitle: "Web Design Begining (Trial Version)",
    desc: "This course contains basic theoretical material with the involvement of a large volume of different tasks",
    trainerImg: trainerImg,
    trainerName: 'Henry Fowler'
  },
  {
    id: 2,
    trainingImg: trainigImg_2,
    trainingTitle: "Web Design Begining (Trial Version)",
    desc: "This course contains basic theoretical material with the involvement of a large volume of different tasks",
    trainerImg: trainerImg,
    trainerName: 'Henry Fowler'
  },
  {
    id: 3,
    trainingImg: trainigImg_3,
    trainingTitle: "Web Design Begining (Trial Version)",
    desc: "This course contains basic theoretical material with the involvement of a large volume of different tasks",
    trainerImg: trainerImg,
    trainerName: 'Henry Fowler'
  },
]

const TrainingLibraryComp = () => {
  return (
    <React.Fragment>
      <section className="training_main_bar_container">
        <Header/>
        <h3 className='mt-10 font-semibold text-lg'>showing 3 courses</h3>
        <TrainingCard/>  
      </section>
    </React.Fragment>
  )
}
const TrainingCard = () =>{
  const [showModal, setShowModal] = useState(false)
  return(
    <>
    {trainingInfo.map((item)=>{
      const {id, trainingImg, trainingTitle, desc, trainerImg, trainerName} = item
      return(
        <article onMouseEnter={()=>{setShowModal(true)}} onMouseLeave={()=>{setShowModal(false)}} key={id} className='training_card_container md:flex items-center'>

        <div className='trainingImg w-full my-4 md:flex-1'>
          <img src={trainingImg} alt={trainingTitle} />
          </div>
        
        <div className='md:flex-2'>
          <h2 className='font-bold'>{trainingTitle}</h2>
          <small className='block mt-2'>Course Description:</small>
          <p className='mt-2 text-sm'>{desc}</p>
          
          <div className="flex items-center justify-between mt-3">
          <div className='flex items-center'>
            <img className='mr-2' src={trainerImg} alt={trainerName} />
            <small> {trainerName} </small>
          </div>
        <button className='open_course_btn'>open course</button>
          </div>
        </div>

        </article>
      )
    })}
    {showModal && <TrainingLibaryHoverComp/>}
    </>
  )
}
export default TrainingLibraryComp



const TrainingLibaryHoverComp = () => {
  return (
    <React.Fragment>
        <article className='training_hover_comp p-5'>
      <h3 className='font-extrabold'>Web Design begining</h3>
      <div className="flex">
      <img className='mr-2' src={trainerImg} alt={trainingInfo.trainerName} />
      <small>Henry Fowler </small>
      </div>
      <ul>
        <span className='flex items-center'><img className='mr-2' src={clockIcon} alt="icon" /><li>25 minutes per lecture</li></span>
        <span className='flex items-center'><img className='mr-2' src={clockIcon} alt="icon" /><li>3 months</li></span>
        <span className='flex items-center'><img className='mr-2' src={myTrainingIcon} alt="icon" /><li>15 lectures</li></span>
        <span className='flex items-center'><img className='mr-2' src={fileIcon} alt="icon" /><li>10 homeworks</li></span>
        <span className='flex items-center'><img className='mr-2' src={materialIcon} alt="icon" /><li>27 materials</li></span>
      </ul>
      </article>
    </React.Fragment>
  )
}

