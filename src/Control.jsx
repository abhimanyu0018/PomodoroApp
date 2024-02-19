import React,{useState} from 'react'

const Control = ({title,defaultTime,changeBreak,changeSession}) => {


    const [timer,setTimer] =useState(defaultTime)

    const timeReducer = ()=> {
        if(title === "Break" && timer>5)
        {
            setTimer(prev=> prev-5)
        }

        if(title === "Session" && timer>25 )
        {
            setTimer(prev => prev-5)
            changeSession(timer-5)
            
        }

    }


    const timeIncreser = () => {
        setTimer(prev => prev+5)
        changeSession(timer+5)
        
    }
  return (
    <div className="flex flex-col items-center">
        <h3 className="text-xl">{title}</h3>
        <div className="flex gap-6">
            <button className="px-1" onClick={timeReducer}>-</button>
            <h2>{timer}</h2>
            <button className="px-1" onClick={timeIncreser}>+</button>
        </div>
    </div>
  )
}

export default Control