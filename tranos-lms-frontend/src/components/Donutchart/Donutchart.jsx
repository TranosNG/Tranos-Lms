import React from 'react'
import './Donutchart.css'

const Donutchart = () => {

  return (
  <>
<div className="svg-item">
  <h3>Task Completed</h3>
  <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
    <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
    <circle className="donut-segment donut-segment-2" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="69 31" stroke-dashoffset="25"></circle>
    <g className="donut-text donut-text-1">

      <text y="50%" transform="translate(0, 2)">
        <tspan x="50%" text-anchor="middle" class="donut-percent">69%</tspan>   
      </text>
    </g>
  </svg>
</div>
</>

  )
}

export default Donutchart