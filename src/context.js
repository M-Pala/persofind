import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children})=>{

    const [seed,setSeed] = useState()
    const [numProfile,setNumProfile] = useState()
    const [tableVisible, setTableVisible] = useState(false)
    const [peoples, setPeoples] = useState([])
    const [countries,setCountries] = useState([])
    const [filterPeople, setFilterPeople] = useState(peoples)
    const [filterCountry, setFilterCountry] = useState([])


    const fetchSearchData = async ()=>{
        const response = await fetch(`https://randomuser.me/api/?seed=${seed}&results=${numProfile}`)
        const data = await response.json()
        console.log(data);
        setPeoples(data.results)
      }
    
    useEffect(()=>{
        let country_list = []
        peoples.forEach((people)=>{
            const {location} = people
            const {country} = location
            country_list.push(country)
        })

        country_list = [... new Set(country_list)]
        console.log(country_list);
        setCountries(country_list)
        setFilterPeople(peoples)
    },[peoples])
    return <AppContext.Provider value={
        {seed, setSeed,numProfile,setNumProfile,peoples, setPeoples,
        fetchSearchData,tableVisible, setTableVisible,countries,
        filterPeople, setFilterPeople,filterCountry, setFilterCountry}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider, AppContext, useGlobalContext}