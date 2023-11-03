import React from 'react'
import './Streak.css'

const Streak = () => {
    const reportData = [
        {
            id: 14,
            day: "S",
            value1: "60%",
            wrapperheight: "80%"
        },
        {
            id: 15,
            day: "M",
            value1: "80%",
            wrapperheight: "20%"
        },
        {
            id: 16,
            day: "T",
            value1: "45%",
            wrapperheight: "30%"
        },
        {
            id: 17,
            day: "W",
            value1: "20%",
            wrapperheight: "50%"
        },
        {
            id: 18,
            day: "T",
            value1: "50%",
            wrapperheight: "80%"
        },
        {
            id: 19,
            day: "F",
            value1: "50%",
            wrapperheight: "50%"
        },
        {
            id: 20,
            day: "S",
            value1: "80%",
            wrapperheight: "20%"
        }
    ];
  return (
    <>
    
    <div className='streak_container'>
        {/* {reportData.map((report)=>{
            return(
                <>
        <div className="prog" style={{height: `${report.value1}`}}></div>
                </>
            )
        })} */}
          
                <div className="flex justify-between items-center mb-4">
                <h3>streaks</h3>
                <p>6h 57mins</p>
                </div>
            <div className="grid-chart">
                <div className="chart-vert-value">
                    <span>08</span>
                    <span>06</span>
                    <span>04</span>
                    <span>02</span>
                    <span>00</span>
                </div>
                    {reportData.map((report)=>{
                        return(
                            <>
                             <div className="grid-chart-bar" key={report.id}>
                            <div className="bar-wrapper" style={{ height: `${report.value1}`}}>
                                <div className="bar-item1" style={{ height: `${report.value1}` }}></div>
                            </div>
                            <span className="grid-hortz-value">{report.day}</span>
                        </div>
                    </>
                        )

                    })}
                       
                       </div>
                
            </div>  
          
    </>
  )
}

export default Streak