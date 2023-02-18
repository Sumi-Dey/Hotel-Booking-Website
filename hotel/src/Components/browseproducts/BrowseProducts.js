import React, { useState } from 'react';
import './BrowseProducts.css';
import type1 from '../../assets/type1.png';
import type2 from '../../assets/type2.png';
import type3 from '../../assets/type3.png';
import type4 from '../../assets/type4.png';
import type5 from '../../assets/type5.png';
import useFetch from '../../hooks/useFetch.js'
import { Link } from 'react-router-dom';

const BrowseProducts = () => {
  const {data} = useFetch("/hotels/getAllCategoryCity");
  
  return (
    <div className='browseProducts'>
    {data?.map((item)=>(
        <div key={item._id}><Link to={`/hotels/getByCategory?category=${item.category}`}><img src={item?.Photos[0]} className='browseImg' alt='...' /></Link>
          <div className='cat'>{item?.category}</div>
        </div>  
    ))}
    </div>
  )
}

export default BrowseProducts;
