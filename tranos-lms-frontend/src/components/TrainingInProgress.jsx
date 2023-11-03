import React from 'react'
import trainingImg1 from '../images/trainingImg1.png'
import trainingImg2 from '../images/trainingImg2.png'
import ProgressBar from './ProgressBar'
// import Piechart from './Piechart/Piechart'
// import Donutchart from './Donutchart/Donutchart'
import Streak from './Streak/Streak'
import { VictoryPie } from "victory";

const TrainingInProgress = () => {
    const trainingInProgress =[
        {id: 1,
        title: "UX Design",
        desc: "Introduction by microsoft",
        img: trainingImg1,
        progress: 40
        },
        {id: 2,
            title: "UX Design",
            desc: "Introduction by microsoft",
            img: trainingImg2,
            progress: 80
        }
    ]
    
    const webinarData = [
        {
            id: 1,
            title: "Webinar",
            desc: "Useful things to consider when designing",
            img: trainingImg1,
            hr_staring: '04:34:17'
        },
        {
            id: 2,
            title: "Webinar",
            desc: "Useful things to consider when designing",
            img: trainingImg1,
            hr_staring: '04:34:17'
        },
    ];
  return (
    <React.Fragment>
        <section >
            {/* Top row begins */}
            <div className="mainbar_top_row">
            <div className='pie_chart'>
                <div className='flex-1'>
                    <h4 className='text-center'>Training completed</h4>
                <VictoryPie
                  colorScale={["#172673", "#1169BD"]}
                //   cornerRadius={({ datum }) => datum.y * 2}
              data={[
                { x: "completed", y: 80, label: "completed"},
                { x: "uncompleted", y: 20, label: "completed" }
              ]}
                />
                {/* <Piechart/> */}
                </div>
                <div className='flex-1'>
                <h5 className='text-center'>Tasks completed</h5>
               <VictoryPie
               colorScale={["#172673", "#1169BD"]}  
               innerRadius={100}/>
                {/* <Donutchart/> */}
                </div>
            </div>

            <Streak/>
            </div>
            {/* Top row stops */}


            {/* second row begins */}
            <div className='mainbar_second_row'>
            <div className='grid grid-cols-2'>
                <h3>Training in progress</h3>
                <button>see all</button>
            </div>
        <div className='training_in_progress_container'>
            {trainingInProgress.map((training)=>{
                const{id, title, desc, img, progress} = training
                return(
                    <section className='training_in_progress_card' key={id}>
                    
                    <div className="flex">

                    <img src={img} alt={title} />

                    <div className='mt-2'>
                    <h3 className='font-extrabold'>{title}</h3>
                    <small>{desc}</small>
                    </div>

                    </div>

                    <div className='mt-5'>
                    <h3>Training passed</h3>
                    {/* <div className='flex items-center'> */}
                    <ProgressBar progress={progress}/>
                    {/* <h3>50%</h3> */}
                    {/* </div> */}
                    </div>

                    </section>
                )
            })}
        </div>

         {/* third row begins */}
            <div className='mainbar_third_row'>
            <div className='grid grid-cols-2'>
                <h3>Upcoming Events</h3>
                <button>see all</button>
            </div>
        <div className='training_in_progress_container'>
            {webinarData.map((webinar)=>{
                const{id, title, desc, img, hr_staring} = webinar
                return(
                    <section className='training_in_progress_card' key={id}>
                    
                    <div className="md:flex">

                    <img src={img} alt={title} />

                    <div className='mt-2'>
                    <h3 className='font-extrabold'>{title}</h3>
                    <small>{desc}</small>
                    </div>

                    </div>

                    <div className='mt-5 flex justify-between items-center'>
                    <h3>start in</h3> <span className='text-sm rounded-xl p-1' style={{backgroundColor: "#ABB1CD"}}>{hr_staring}</span>
                    </div>

                    </section>
                )
            })}
        </div>
        </div>
        </div>
      </section>
    </React.Fragment>
    
  )
}

export default TrainingInProgress