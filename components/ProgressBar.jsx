import React from 'react'
import { useEffect } from 'react'

export const ProgressBar = props => {
  useEffect(() => {
    const { statsNumber, statsName } = props
    const colorStat = props.statsNumber > 50 ? "bg-green-500" : "bg-red-500"
    
  
  let progress = 0
  let invervalSpeed = 10
  let incrementSpeed = 1
  let bar = document.getElementById(statsName)
  
  let progressInterval = setInterval(function () {
      progress += incrementSpeed
      bar.style.width = progress + '%'
      

      bar.style.backgroundColor = props.statsNumber < 50 ? "#ff364e" : props.statsNumber  > 70  ?"#1cd80e" : "#FF9900"

      if (progress >= statsNumber) {
        clearInterval(progressInterval)
      }
    }, invervalSpeed)
  }, [])

  // let color = props.statsNumber > 50 ? 'bg-green-500' : 'bg-red-500'
  // let color = 'bg-red-500'


    
    // console.log(colorStat)

  return (
    <>
      <li className="flex items-center gap-6 mb-5">
        <span className=" w-16">{props.statsName}</span>
        <span className="font-semibold">{props.statsNumber}</span>

        <div className="h-3 flex-auto  relative  rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-600 absolute"></div>
          <div
            id={props.statsName}
            className="h-full rounded-full   relative w-0" 
            // style={{ backgroundColor: colorStat }}
            // style={{back: "red"}}
          ></div>
        </div>
      </li>
    </>
  )
}
