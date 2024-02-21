import { useState,useContext } from 'react'
import { FaHeart,FaPause ,FaPlay,FaGithub,FaLinkedin,FaTwitter   } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import {displayContext} from './context/MinContext'
import Control from './Control'

function App() {

   const [btnState,setBtnState] = useState(true)

  //  const [displaySession,setdisplaySession] = useState(25)
  //  const [displayBreak,setdisplayBreak] = useState(5)

   const display = useContext(displayContext)
   console.log("display",display)

   const changeBtnState = () => {
    setBtnState(prev => !prev )
   }

  return (
    <>
        <div className='bg-red-600 w-full h-screen text-white p-10 flex flex-col gap-1 text-center justify-center items-center' >
          <h1 className="font-semibold text-[2rem] capitalize">Pomodoro Timer</h1>
              <div className='w-96 h-96 bg-red-300 block pt-6'>
                
                  <h2 className="bg-red-400 text-[2rem] mx-11">Session</h2>

                  <h1 className="text-7xl font-bold mt-10 mb-10">{display.mainDisplay}:00</h1>

                  <div className="flex gap-4 justify-center">
                    <button onClick={changeBtnState}> {btnState ? <FaPlay /> : <FaPause />} </button>
                    <button><HiOutlineRefresh className="text-xl" /></button>
                  </div>
                
              </div>

              <div className="flex gap-8">
              <Control title={"Break"} defaultTime={5}/>
              <Control title={"Session"} defaultTime={25}/>
              </div>

              <div className="mt-12">
                <p>Made with <FaHeart className="inline"/> by Abhimanyu Kanaujia</p>
                <p>Connect with me:</p>
                <div className="flex items-center gap-2 p-2 justify-center">
                <a href=""><FaGithub /></a>
                <a href=""><FaTwitter /></a>
                <a href=""><FaLinkedin /></a>
                </div>
              </div>
            
        </div>
    </>
  )
}

export default App
