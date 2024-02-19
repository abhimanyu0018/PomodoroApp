import { useState } from 'react'
import './App.css'
import Control from './Control'

function App() {

  return (
    <>
        <div className='bg-red-600 w-full h-screen text-white p-10 flex flex-col gap-1 text-center justify-center items-center' >
          <h1 className="font-semibold text-xl capitalize">Pomodoro Timer</h1>
              <div className='w-96 h-96 bg-red-300 block'>
                
                  <h2 className="bg-red-400 w-1/4">Session</h2>

                  <h1>25:00</h1>

                  <div>
                    <button> play </button>
                    <button>Restart</button>
                  </div>
                
              </div>

              <div className="flex">
              <Control title={"Break"} defaultTime={5}/>
              <Control title={"Session"} defaultTime={25}/>
              </div>
            
        </div>
    </>
  )
}

export default App
