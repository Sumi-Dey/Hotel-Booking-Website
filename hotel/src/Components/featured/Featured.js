import React from 'react';
import './Featured.css';
import darjeelingfeatured from '../../assets/darjeelingfeatured.jpg';
import goafeatured from '../../assets/goafeatured.png';
import arakuImage from '../../assets/arakuImage.png';
import useFetch from '../../hooks/useFetch';
import Blank from '../Blank/Blank';

const Featured = () => {
  const {data,loading,error} = useFetch("/hotels/countByCity?cities=Kolkata,Goa,Darjeeling");
  return (
    <div className='featured'>
    { loading? (
      <div className='feature-blank'><Blank /> </div>
    ):
    (<>   
      <div className='featuredItem'>
        <div className='featuredImage'>
            <img src={darjeelingfeatured} alt='...' />
        </div>
        <div className='featuredTitle'>
            <span>Kolkata</span><br />
            <span>{data[0]} Properties</span>
        </div>
      </div>
      <div className='featuredItem'>
        <div className='featuredImage'>
            <img src={goafeatured} alt='...' />
        </div>
        <div className='featuredTitle'>
            <span>Goa</span><br />
            <span>{data[1]} Properties</span>
        </div>
      </div>
      <div className='featuredItem'>
        <div className='featuredImage'>
            <img src={arakuImage} alt='...' />
        </div>
        <div className='featuredTitle'>
            <span>Darjeeling</span><br />
            <span>{data[2]} Properties</span>
        </div>
      </div>
  </>)
  }
</div>
  )
}


export default Featured
