import React from 'react'
import SearchForm from '../components/SearchForm'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

function Details() {

  const {peoples,seed,tableVisible, setTableVisible} = useGlobalContext()
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
          {peoples.map((people,index)=>{
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

                
                {/* <div className='people-card'>
                  <div className='people-img-container'>
                    <img className='img people-img' src={thumbnail}/>
                  </div>
                  <div className='people people-name'>{title} {first} {last}</div>
                  <div className='people people-gender'>{gender}</div>
                  <div className='people people-location'>{country}</div>
                  <div className='people people-age'>{age}</div>
                  <Link to={`/person/${seed}/${index}`}><button className='btn people-btn'>See more</button></Link>
                  
                </div> */}
                </>
              )
            })}
            </table>}
        </div>
    </div>
  )
}

export default Details