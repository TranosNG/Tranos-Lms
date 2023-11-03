import React from 'react'

const ProgressBar = () => {
    // const {progress}  = props
  return (
    <div>
    <div className='progress_bar_container'>
        <div className='progress_bar'>
            <div style={{width: `40%`}} className="progress_bar_fill"></div>
            {/* <div style={{width: `${progress}%`}} className="progress_bar_fill"></div> */}
            {/* <h3 style={{color: "black"}} className="progress_label">{progress}%</h3> */}
        </div>
    </div>
    
    </div>
  )
}

export default ProgressBar