import React, { useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

function Details() {

  const {peoples,seed,tableVisible, setTableVisible, filterPeople, setFilterPeople} = useGlobalContext()
  useEffect(()=>{
    setFilterPeople(filterPeople)
  },[])
  return (
    <div className='details-page-container'>
        <div className='searchform-container'>
            <SearchForm/>
        </div>
        <div className='person-details'>
        {tableVisible &&  <table className='person-detail-table'>
                  <tr className='table-header'>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Age</th>
                    <th>Details</th>
                  </tr>
          {filterPeople.map((people,index)=>{
              const { name, dob, location} = people
              const {title, first, last} = name
              const {age} = dob
              const {country} = location
              return (
                <>
                <tr>
                  <td>{title} {first} {last}</td>
                  <td>{country}</td>
                  <td className='table-age'>{age}</td>
                  <td className='table-btn-container'><Link to={`/person/${seed}/${index}`}><button className='btn table-btn'>See more</button></Link></td>
                </tr>
                </>
              )
            })}
            </table>}
        </div>
    </div>
  )
}

export default Details