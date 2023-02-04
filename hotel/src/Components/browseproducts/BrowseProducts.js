import React from 'react';
import './BrowseProducts.css';
import type1 from '../../assets/type1.png';
import type2 from '../../assets/type2.png';
import type3 from '../../assets/type3.png';
import type4 from '../../assets/type4.png';
import type5 from '../../assets/type5.png';

const BrowseProducts = () => {
  return (
    <div className='browseProducts'>
      <div className='upper'>
        <div><img src={type1} alt='...' />
          <div>Mountain View Homestay</div>
        </div>
        <div><img src={type2} alt='...' />
          <div>Homestay with Pool</div>
        </div>
      </div>
      <div className='lower'>
        <div><img src={type3} alt='...' />
          <div>Garden With Homestay</div>
        </div>
        <div><img src={type4} alt='...' />
          <div>Nature Friendly Homestay</div>
        </div>
        <div><img src={type5} alt='...' />
          <div>Near Airport Homestay</div>
        </div>
      </div>
    </div>
  )
}

export default BrowseProducts;
