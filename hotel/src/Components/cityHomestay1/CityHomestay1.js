import React from 'react';
import './CityHomestay1.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiLocationMarker } from 'react-icons/hi';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const CityHomestay1 = () => {
const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
const {data,loading,error} = useFetch("/hotels?city=Darjeeling&limit=5");
  return (
    <div>
      {loading?("Loading"):(<>
    <div className='cityhomestay1'>
      <Slider {...settings} >
        {data.map((prod)=>(
            <div className="card city-card" key={prod._id}>
          <Link to={`/hotel/${prod._id}`}><img src={prod.photos} className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title city-card-title">{prod.name}</h5>
            <p className="card-subtitle"><HiLocationMarker /> Darjeeling</p>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='ratings'>
              <p> <button>{prod.rating}</button> </p>
              <p>{prod.reviews} reviews</p>
            </div>
            <Link to={`/hotel/${prod._id}`}><button className="card-button">Reserve this homestay</button></Link>
          </div>
        </div>
        ))}       
      </Slider>
    </div>
    </>)}
    </div>
  )
}

export default CityHomestay1 ;
