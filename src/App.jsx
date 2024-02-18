import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
        <div className='bg-red-400 w-full h-screen text-white p-10 flex flex-col gap-1 text-center' >
          <h1>Pomodoro Timer</h1>
              <div className='w-96 h-96 bg-red-300 block'></div>
        </div>
    </>
  )
}

export default App
