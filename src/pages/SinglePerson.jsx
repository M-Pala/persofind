import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SinglePerson() {

    const {seed, index} = useParams()

    const [person, setPerson] = useState({})

    const url =  `https://randomuser.me/api/?results=${index+1}&seed=${seed}`

    const fetchPerson = async ()=>{
      const response = await fetch(url)
      const data = await response.json()
      const single_data = (data.results[index]); 
      const {gender, email, phone, nat} = single_data
      const {title, first, last} = single_data.name
      const {street, city, state, country, postcode} = single_data.location
      const {number, name} = street
      const {username, password} = single_data.login
      const {date, age} = single_data.dob
      const b_day = date.slice(0,10)
      const {large} = single_data.picture

      setPerson({large, gender, email, phone, username, password, nat, title, first, last, b_day, age, number, name, city, state, country, postcode})
    }


    useEffect(()=>{
      fetchPerson()
      
    },[])
  return (
    <>
      <div className='person-page-container'>
        <div className='person-header-container'>
          
          <div className='perosn-header-info'>
            <h1 className='person-name'>{person.title} {person.first} {person.last}</h1><br/>
            <h2>{person.age}</h2><br/>
            <h2>{person.country}</h2><br/>
            <h2>ID : {seed}{index}</h2>
          </div>
          
          <div className='person-img-container'>
            <img  className='person-img' src={person.large}/><br/>
          </div>
        </div>
        <div className='person-info-container'>
        
          <div className='person-info-left'>
            <h2>Birthdate</h2> {person.b_day}<br/><br/>
            <h2>Gender</h2> {person.gender}<br/><br/>
            <h2>nationality</h2> {person.nat}<br/><br/>
            <h2>username</h2> {person.username}<br/><br/>
            <h2>password</h2> {person.password}<br/><br/>
          </div>

          <div className='person-info-right'>
            <h2>email</h2> {person.email}<br/><br/>
            <h2>phone</h2> {person.phone}<br/><br/>
            
            <h2>Address</h2> {person.number}, {person.name}<br/>
                      {person.city}<br/>
                      {person.state}<br/>
                      {person.postcode}<br/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePerson