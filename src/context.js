import React, { createContext, useContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children})=>{

    const [seed,setSeed] = useState()
    const [numProfile,setNumProfile] = useState()
    const [tableVisible, setTableVisible] = useState(false)
    const [peoples, setPeoples] = useState([])

    const fetchSearchData = async ()=>{
        const response = await fetch(`https://randomuser.me/api/?seed=${seed}&results=${numProfile}`)
        const data = await response.json()
        console.log(data);
        setPeoples(data.results)
      }
    return <AppContext.Provider value={{seed, setSeed,numProfile,setNumProfile,peoples, setPeoples,fetchSearchData,tableVisible, setTableVisible}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider, AppContext, useGlobalContext}