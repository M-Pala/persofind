import React, { useState } from 'react'
import { useGlobalContext } from '../context';


function SearchForm() {

  const {seed, setSeed,numProfile,setNumProfile,fetchSearchData,setTableVisible} = useGlobalContext()
  // const [seed,setSeed] = useState()
  // const [numProfile,setNumProfile] = useState()

  // const [peoples, setPeoples] = useState([])

  // const fetchSearchData = async ()=>{
  //   const response = await fetch(`https://randomuser.me/api/?seed=${seed}&results=${numProfile}`)
  //   const data = await response.json()
  //   console.log(data);
  //   setPeoples(data.results)
  // }

  const handleSearch = (e)=>{
    e.preventDefault()
    fetchSearchData()
    setTableVisible(true)
    console.log('clicked');
  }

  return (

    <form>
        <div className='searchbar-container'>
                <input className='searchbar-form' type='text' placeholder='Enter your seed' value = {seed} onChange={(e)=>{setSeed(e.target.value)}}/>
                <input className='searchbar-form search-num' type='number' placeholder='Enter how many profiles' value = {numProfile} onChange={(e)=>{setNumProfile(e.target.value)}}/>
                <button className='btn search-btn' onClick={handleSearch}>Search</button>
        </div>
    </form>
  )
}

export default SearchForm