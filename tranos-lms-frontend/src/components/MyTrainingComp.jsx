import React from 'react'
import Header from './Header'
import trainerImg from '../images/trainerImg.png'
import myTrainingIcon from '../images/myTrainingIcon.png'
import fileIcon from '../images/fileIcon.png'
import materialIcon from '../images/materialIcon.png'
import {AiOutlineEllipsis} from 'react-icons/ai'
import {BsChevronLeft} from 'react-icons/bs'
import ProgressBar from './ProgressBar'
 
const MyTrainingComp = () => {
  return (
    <React.Fragment>
      <section className="my_training_main_bar_container">
        <Header/>

        <div className='return_to_training_library_btn_div'>
        <span><BsChevronLeft/></span>
        <button>Return to Training Library</button>
        </div>

        <article className='my_training_grid_col'>
        <div className="col_1"> 
        <MyTrainingCard/>
        <LectureCard/>
        <LectureCard/>
        <LectureCard/>
        <LectureCard/>
        <LectureCard/>
        <LectureCard/>
        </div>

        <div className="col_2">
        <MyTrainingCompCol2/>
        </div>
        </article>
        
      </section>
    </React.Fragment>
  )
}

export default MyTrainingComp


const MyTrainingCard = () => {
    return(
    <>
        <article className='my_training_comp_card_1'>
        <div className='flex justify-between items-center font-bold'>
        <h2>Web Design Beginning (Trial Version)</h2>
        <AiOutlineEllipsis/>
        </div>

        <small>Lecturer:</small>
        <div className='flex items-center my-1'>
            <img className='mr-2' src={trainerImg} alt="" />
            <small>Henry Fowler</small>
        </div>

        <small className='block my-1'>Course Description:</small>
        <div className='my_training_comp_card_1_btns'>
            <div className='flex items-center mr-2 py-1 px-5' style={{backgroundColor: "#D2D5E1"}}>
                <img className='mr-3' src={myTrainingIcon} alt="icon" />
                <button className='text-sm'>6 lectures</button>
            </div>

            <div className='flex items-center mr-2 py-1 px-5' style={{backgroundColor: "#D2D5E1"}}>
            <img className='mr-3' src={fileIcon} alt="icon" />
            <button className='text-sm'>3 homework</button>
            </div>

            <div className='flex items-center mr-2 py-1 px-5' style={{backgroundColor: "#D2D5E1"}}>
            <img className='mr-3' src={materialIcon} alt="icon" />
            <button className='text-sm'>6 materials</button>
            </div>
        </div>
        </article>
        </>
    )
}
const LectureCard = () =>{
    return(
        <>
        <article className='my_training_lecture_card'>
            <small className='block my-3'>Lecture 1: Introduction</small>
             <div className='my_training_comp_card_1_btns'>
            <div className='flex items-center mr-2 py-1 px-5' style={{backgroundColor: "#D2D5E1"}}>
                <img className='mr-3' src={myTrainingIcon} alt="icon" />
                <button className='text-sm'>6 lectures</button>
            </div>

            <div className='flex items-center mr-2 py-1 px-5' style={{backgroundColor: "#D2D5E1"}}>
            <img className='mr-3' src={fileIcon} alt="icon" />
            <button className='text-sm'>3 homework</button>
            </div>

            <div className='flex items-center mr-2 py-1 px-5' style={{backgroundColor: "#D2D5E1"}}>
            <img className='mr-3' src={materialIcon} alt="icon" />
            <button className='text-sm'>6 materials</button>
            </div>
        </div>

        <p className='text-sm my-3'>This lecture contains an introductory theoretical material about web design with the involvement of a large volume of tasks and video</p>
        
        <div className="flex justify-between items-center">
        <button className='p-2 rounded-lg text-sm' style={{border: "1.5px solid #3C4989"}}>Watch lesson</button>
        <h4 className='text-sm'>Completed tasks 1/1</h4>
        </div>
        </article>
        </>
    )
}
const MyTrainingCompCol2 = () => {
    return(
        <article className='my_training_comp_card_2'>

        <div className='mb-2'>
        <div className="flex justify-between items-center text-sm">
        <h3>Course passed</h3>
        <h3>50%</h3>
        </div>
        <ProgressBar/>
        </div>

        <div className='mb-2'>
        <div className="flex justify-between items-center text-sm">
        <h3>Completed lessons</h3>
        <h3>3/6</h3>
        </div>
        <ProgressBar/>
        </div>

        <div className='mb-2'>
        <div className="flex justify-between items-center text-sm">
        <h3>Completed tasks</h3>
        <h3>2/5</h3>
        </div>
        <ProgressBar/>
        </div>
               
        </article>
    )
}