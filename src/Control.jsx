import React,{useState,useContext} from 'react'
import {displayContext} from './context/MinContext'

const Control = ({title,defaultTime}) => {


    const display = useContext(displayContext)

    const timeReducer = ()=> {
        if(title === "Break" && display.displayBreak>5)
        {
            display.setDisplayBreak(prev => prev-5)
        }

        if(title === "Session" && display.displaySession>25 )
        {
            display.setDisplaySession(prev => prev-5)    
        }

    }


    const timeIncreser = () => {

        if(title === "Break")
        {
            display.setDisplayBreak(prev => prev+5)
        }

        if(title === "Session")
        {
            display.setDisplaySession(prev => prev+5)    
        }

        
        
    }
  return (
    <div className="flex flex-col items-center">
        <h3 className="text-xl">{title}</h3>
        <div className="flex gap-6">
            <button className="px-1" onClick={timeReducer}>-</button>
            <h2>{title === "Session"? display.displaySession : display.displayBreak}</h2>
            <button className="px-1" onClick={timeIncreser}>+</button>
        </div>
    </div>
  )
}

export default Control