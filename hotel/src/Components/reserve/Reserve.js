import React, { useState } from 'react';
import './Reserve.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reserve = ({setOpen, hotelID}) => {
  const [selectedRooms,setSelectedRooms] = useState([])
  const {data,loading,error} = useFetch(`/hotels/room/${hotelID}`);
  const dates = useSelector((state)=>state.search.abc.dates)
  const handleSelect = (e)=>{
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(checked?[...selectedRooms,value]:selectedRooms.filter((item)=>item!==value))
  }
  const getDatesRange = (startDate,endDate)=>{
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());
    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate()+1)
    }
    return dates;
  }
  const allDates = getDatesRange(dates[0].startDate,dates[0].endDate);
  const isAvailable = (roomNumber)=>{
    const isFound = roomNumber.unavailableDates.some((date)=>
    allDates.includes(new Date(date).getTime()))

    return isFound;
  }
  const navigate = useNavigate()
  const handleClick = async ()=>{
      try {
        await Promise.all(
          selectedRooms.map((roomID)=>{
            const res = axios.put(`/rooms/availability/${roomID}`,{dates:allDates})
            return res.data
          })
        )
        setOpen(false)
        navigate('/')
      } catch (error) {}        
  }
  return (
    <div className='reserve'>
      <div className='rContainer'>
        <AiFillCloseCircle className='rClose' onClick={()=>setOpen(false)}/>
        <span>Select your rooms:</span>
        <div>
        {
          data.map((item)=>(
            <div className='rItem' key={item._id}>
              <div className='rItemInfo'>
                <div className='rTitle'>{item.title}</div>
                <div className='rDesc'>{item.desc} </div>
                <div className='rMax'>Max People: <b>{item.maxPeople}</b> </div>
                <div className='rPrice'>{item.price} </div>
              </div>
              {
                item.roomNumbers.map((roomNumber)=>(
                  <div className='rNumber' key={roomNumber._id}>
                    <label>{roomNumber.number}</label><br/>
                    <input type='checkbox' value={roomNumber._id} onChange={handleSelect} disabled={isAvailable(roomNumber)}/>
                  </div>
                ))
              }
            </div>
          ))
        }
        <div><button type='submit' className='rBtn' onClick={handleClick}>Reserve Now</button></div>
        </div>
      </div>
    </div>
  )
}

export default Reserve
