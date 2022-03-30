import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Peoples() {

  const [peoples, setPeoples] = useState([])
  const [seed,setSeed] = useState()

  const url = 'https://randomuser.me/api/?results=18'

  const fetchData = async ()=>{
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);
    setPeoples(data.results)
    setSeed(data.info.seed)
    // console.log(data.info.seed);
  }

  // fetchData()

  useEffect(()=>{
    fetchData()
  },[])

  // const peopleInfo = (seed,index)=>{
  //   const seed_url = `https://randomuser.me/api/?results=18&seed=${seed}`
  //   console.log(seed);
  //   const getPeople = async ()=>{
  //     const response = await fetch(seed_url)
  //     const data = await response.json()
  //     console.log(data.results[index]); 
  //   }
  //   getPeople()
  // }
  return (
    <div className='peoples-page-container'>
        <div className='peoples-header'>
            <h2>Peoples</h2>
            <br/>
            <p> Here are some smaple peoples for your needs. These are picked randomly from our data</p>
            <h3>Seed : {seed}</h3>
        </div>
        <div className='people-container'>
          {/* <button className='btn' onClick={handleClick}>Get Some Peoples</button> */}
          {peoples.map((people,index)=>{
            const {gender, name, picture, dob, location} = people
            const {title, first, last} = name
            const {thumbnail} = picture
            const {age} = dob
            const {country} = location
            return (
              <div className='people-card'>
                <div className='people-img-container'>
                  <img className='img people-img' src={thumbnail}/>
                </div>
                <div className='people people-name'>{title} {first} {last}</div>
                <div className='people people-gender'>{gender}</div>
                <div className='people people-location'>{country}</div>
                <div className='people people-age'>{age}</div>
                <Link to={`/person/${seed}/${index}`}><button className='btn people-btn'>See more</button></Link>
                {/* onClick={()=>{peopleInfo(seed,index)}} */}
              </div>
            )
          })}
        </div>

    </div>
  )
}

export default Peoples