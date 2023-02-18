import React, { useState } from 'react';
import './UniqueHomestay.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiLocationMarker } from 'react-icons/hi';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const UniqueHomestay = () => {
const {data,loading,error} = useFetch("/hotels/getByFeature?feature=true&limit=4");

  return (
    <div className='uniquehomestay'>
      {loading?('loading'):(
        <>
        {
            data.map((prod,index)=>(
                <div className="card unique-card" key={index}  >
          <Link to={`/hotel/${prod._id}`}> <img src={prod.photos[0]}  className="card-img-top unique-card-img" alt="..." /></Link>
          <div className="card-body" style={{paddingLeft:"8px"}}>
            <h5 className="card-title unique-card-title">{prod.name}</h5>
            <p className="card-subtitle"><HiLocationMarker /> {prod.city}</p>
            {prod.rating && <div className='ratings topMargin'>
              <p> <button>{prod.rating}</button> </p>
              <p>{prod.reviews} reviews</p>
            </div>}
          </div>
        </div>
            ))
        }
      </>
      )}
    </div>
  )
}

export default UniqueHomestay;
