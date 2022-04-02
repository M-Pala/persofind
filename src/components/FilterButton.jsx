import React, { useState } from 'react'
import { useGlobalContext } from '../context';

function FilterButton({country}) {
    const {peoples, filterPeople, setFilterPeople,filterCountry, setFilterCountry, countries} = useGlobalContext()

    const [active, setActive] = useState(false)
  return (
    <button className={`btn  ${active?"country-filter-btn-active":"country-filter-btn"}`} onClick={()=>{

        let updated_countries = []
        
        if(!active){
            filterCountry.push(country)
            updated_countries  = [... new Set(filterCountry)]
            // console.log(updated_countries)
            setFilterCountry(updated_countries)
            console.log(filterCountry)
        }
        else{
            // filterCountry.pop(country)
            updated_countries = filterCountry.filter(item => item !== country)
            updated_countries = [... new Set(updated_countries)]
            console.log('before')
            console.log(updated_countries)
            setFilterCountry(updated_countries)
            console.log('after')
            console.log(filterCountry)
        }

        // if(filterCountry.length === 0){
        //     setFilterCountry(countries)
        // }

        let updated_person = peoples.filter((people)=>{
            const {location} = people
            if(updated_countries.includes(location.country)){
                return people
            }
        })
        
        setFilterPeople(updated_person)
        setActive(!active)
        }}>
        {country}
    </button>
  )
}

export default FilterButton