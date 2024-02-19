import React,{useState} from 'react'

const Control = ({title,defaultTime}) => {


    const [timer,setTimer] =useState(defaultTime)

    const timeReducer = ()=> {
        if(title === "Break" && timer>5)
        {
            setTimer(prev=> prev-5)
        }

        if(title === "Session" && timer>25 )
        {
            setTimer(prev => prev-5)
        }

    }


    const timeIncreser = () => {
        setTimer(prev => prev+5)
    }
  return (
    <div className="flex flex-col items-center">
        <h3>{title}</h3>
        <div className="flex">
            <button className="px-1" onClick={timeReducer}>-</button>
            <h2>{timer}</h2>
            <button className="px-1" onClick={timeIncreser}>+</button>
        </div>
    </div>
  )
}

export default Control