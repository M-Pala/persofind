import React, { useState } from 'react'
import { useGlobalContext } from '../context';
import FilterButton from './FilterButton';


function SearchForm() {

  const {seed, setSeed,numProfile,setNumProfile,fetchSearchData,setTableVisible,tableVisible,countries} = useGlobalContext()

  const handleSearch = (e)=>{
    e.preventDefault()
    fetchSearchData()
    setTableVisible(true)
    console.log('clicked');
  }

  return (

    <form>
        <div className='searchbar-container'>
          <label>Enter seed</label><br/>
            <input className='searchbar-form' type='text' value = {seed} onChange={(e)=>{setSeed(e.target.value)}}/><br/>
          <label>Enter number of profile</label><br/>           
            <input className='searchbar-form search-num' type='number' value = {numProfile} onChange={(e)=>{setNumProfile(e.target.value)}}/><br/>
            <button className='btn search-btn' onClick={handleSearch}>Search</button>

          {tableVisible && 
          <div className='search-filter'>
            <label>Filter country</label><br/>
              {countries.map((country)=>{
                return <FilterButton country={country}/>
              })}
          </div>}
        </div>
    </form>
  )
}

export default SearchForm