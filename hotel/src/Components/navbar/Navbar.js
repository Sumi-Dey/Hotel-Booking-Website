import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () => {
  const person = useSelector((state)=>state.search?.userDetails);
  return (
    <div className='nav'>
      <div className='left-nav'>
        {/* <img src={Logo} alt='...' /> */}
        <Link to='/' className='link'> Your Homestay </Link>
      </div>
      {person?.user || person?.register?(<div className='username'>{person?.user?.username || person?.register?.username}</div>):(
      <div className='nav-right'>
        <Link to='/register'><button className='btn nav-btn'>Register</button></Link>
        <Link to='/login'> <button className='btn nav-btn'>Sign In</button></Link>
      </div>)}
    </div>
  )
}

export default Navbar
