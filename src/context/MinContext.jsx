import React,{useState} from 'react'

export const DisplayContext = React.createContext(null)



const DisplayContextProvider = (props) => {
    const [mainDispaly,setMainDisplay] = useState(55)
  return (
        <DisplayContext.Provider value={{mainDispaly,setMainDisplay}}>
            {props.children}
        </DisplayContext.Provider>
  )
}

export default DisplayContextProvider