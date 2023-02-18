import React from 'react';
import './Featured.css';
import useFetch from '../../hooks/useFetch';
import Blank from '../Blank/Blank';
import { Link } from 'react-router-dom';
const Featured = () => {
  const { data, loading } = useFetch("/hotels/getAllCity");
  return (
    <>
      {loading ? (
        <div className='feature-blank'><Blank /> </div>
      ) :
        (<div className='featured'>
          {data?.map((item)=>(           
          <div className='featuredItem' key={item._id}>
            <div className='featuredImage' >
              <Link to={`/hotels/countByCity?city=${item.city}`}><img src={item.Photos[0]} alt='...'/></Link>
            </div>
            <div className='featuredTitle'>
              <span>{item.city}</span><br />
              <span>{item.hotelCount} Properties</span>
            </div>
          </div>
         ))}
        </div>)
      }
    </>
  )
}

export default Featured;
