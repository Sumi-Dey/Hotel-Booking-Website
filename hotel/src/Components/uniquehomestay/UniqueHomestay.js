import React from 'react';
import './UniqueHomestay.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {uniqueHomestayData} from '../../Data/uniqueHomestayData';
import { HiLocationMarker } from 'react-icons/hi';
import useFetch from '../../hooks/useFetch';

const UniqueHomestay = () => {
const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
const {data,loading,error} = useFetch("/hotels/getByCity?feature=true&limit=4");
  return (
    <div className='uniquehomestay'>
      {loading?('loading'):(
        <>
        {
            data.map((prod,index)=>(
                <div className="card unique-card" key={index}>
          <img src={prod.photos[0]} className="card-img-top unique-card-img" alt="..." />
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
