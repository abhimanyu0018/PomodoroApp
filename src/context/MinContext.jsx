import React,{useState} from 'react'

export const displayContext = React.createContext([null])



const DisplayContextProvider = (props) => {
    const [displaySession,setDisplaySession] = useState(25)
    const [displayBreak,setDisplayBreak] = useState(5)
  return (
        <displayContext.Provider value={{displaySession,setDisplaySession,displayBreak,setDisplayBreak}}>
            {props.children}
        </displayContext.Provider>
  )
}

export default DisplayContextProvider