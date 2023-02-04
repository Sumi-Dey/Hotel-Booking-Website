import React, { useState } from 'react';
import './List.css';
import Navbar from '../../Components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchItem from '../../Components/searchitem/SearchItem';
import useFetch from '../../hooks/useFetch';
import Blank from '../../Components/Blank/Blank';
import dayjs from 'dayjs';

const List = () => {
  const location = useLocation();
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [destination, setDestination] = useState(location.state.destination);
  const [opendates, setOpendates] = useState(false);
  const [min,setMin] = useState(undefined);
  const [max,setMax] = useState(undefined);
  const {data,loading,error,reFetchData} = useFetch(`/hotels?city=${destination}&min=${min}&max=${max}`);
  const handleClick = ()=>{
    reFetchData()
  }
  return (
    <div>
      <div className='list'>
        <div className='left-list'>
          <h3>Search</h3>
          <div className='list-form'>
            <div>
              <label>Destination/property name</label>
              <input type='text' placeholder={destination} />
            </div>
            <div>
              <label>Check-in date</label><br/>
              <input type='text' onClick={() => setOpendates(!opendates)} placeholder={`${dayjs(dates[0].startDate).format('DD/MM/YYYY')} to ${dayjs(dates[0].endDate).format('DD/MM/YYYY')}`} />
              {opendates && (<DateRange
                onChange={(item)=>setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
              />)}
            </div>
            <div>
              <label>Options</label>
              <div className='options'>
              <div className='optionItem'>
                  <span>Max Price Per Night</span>
                  <input type='number' className='inputOption' onChange={(e)=>setMin(e.target.value)} />
                </div>
                <div className='optionItem'>
                  <span>Min Price Per Night</span>
                  <input type='number' className='inputOption' onChange={(e)=>setMax(e.target.value)} />
                </div>
                <div className='optionItem'>
                  <span>Adult</span>
                  <input type='number' className='inputOption' />
                </div>
                <div className='optionItem'>
                <span>Children</span>
                  <input type='number' className='inputOption' min={0} placeholder={options.Children}/>
                </div>
                <div className='optionItem'>
                <span>Room</span>
                  <input type='number' className='inputOption' min={1} placeholder={options.Room}/>
                </div>
              </div>
            </div>
            <div className='btn-box'>
              <button className='search-btn' onClick={handleClick}>Search</button>
            </div>
          </div>
        </div>
        {loading?(<div className='list-blank'><Blank /></div>):(<>
        <div className='right-list'>
          {data.map((item)=>(
          <SearchItem item={item} key={item._id}  />
          ))}
        </div>
        </>)}
      </div>
    </div>
  )
}

export default List
