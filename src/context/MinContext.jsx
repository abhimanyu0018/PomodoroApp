import React,{useState} from 'react'

export const displayContext = React.createContext([null])



const DisplayContextProvider = (props) => {
    const [mainDisplay,setMainDisplay] = useState(55)
  return (
        <displayContext.Provider value={{mainDisplay,setMainDisplay}}>
            {props.children}
        </displayContext.Provider>
  )
}

export default DisplayContextProvider