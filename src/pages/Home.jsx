import React, { useEffect, useRef, useState } from 'react'
import hero from '../hero.png'
import reviews from '../review'
import {Link} from 'react-router-dom'

function Home() {

  const [client,setClient] = useState(0)

  const anim = useRef(null)
  let new_client = 0
  useEffect(()=>{
    if(client>review.length-1){
      setClient(0)
    }
  },[client])
  
  
  useEffect(() => {
    let slider = setInterval(() => {
      if(client>(reviews.length-2)){
        new_client = 0
      }
      else{
        new_client = client+1
        
      }
      setClient(new_client);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [client])

  const {id,designation,name, review, url} = reviews[client]
  return (
    <div className='home-container'>
      <div className='prod-intro'>
        <div className='prod-left'>
          <h2>We Deilver People's data</h2>
          <h4>Get all the info of people at your screen.<br/> We have everything</h4>
        </div>
        <div className='prod-right'>
          <img className='prod-img' src={hero}/>
        </div>
      </div>
      
      <div className='prod-services-bg'>
        <div className='prod-services'>
          <div className='prod-left'>
            <h2>Check out our services</h2>
            <h4>We provide various services.<br/> All you need is some clicks away</h4>
          </div>
          <div className='prod-right'>
          <Link to='/peoples'><button className='btn btn-service'>See People</button><br/></Link>
          <Link to='/details'><button className='btn btn-service'>See Details</button></Link>
          </div>
        </div>
      </div>

      <div className='prod-client' ref={anim}>
      
        <div key={id} className='client-container'>
          <img className='client-img' src={url}/><br/>
          <h3 className='client-name'>{name}</h3>
          <h4 className='client-designation'>{designation}</h4>
          <p className='client-review'>{review}</p>
         </div>
      </div>

      <div className='prod-contact-bg'>
        <div className='prod-contact'>
          <div className='prod-left'>
            <h4>Social</h4>
            <br/>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Reddit</p>
          </div>
          <div className='prod-right'>
            <h4>Address</h4>
            <br/>
            <p>1007 Mountain Drive, Gotham</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home