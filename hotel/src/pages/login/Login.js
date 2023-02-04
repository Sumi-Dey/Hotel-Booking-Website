import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginStart, loginSuccess } from '../../context api/Context';
import './Login.css';

const Login = () => {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined
  })
  const dispatch = useDispatch();
  const err = useSelector((state) => state.search.error);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))

  }
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailed(error.response.data));
    }
  }
  return (
    <div className='main-login'>
      <div className='login'>
        <input type='text' id='username' className='login-input' placeholder='Username' onChange={handleChange} />
        <input type='password' id='password' className='login-input' placeholder='Password' onChange={handleChange} />
        <button type='submit' className='btn' onClick={handleClick} id="liveAlertBtn">Submit </button>
        {err?(
    <div className='err'>{err} </div>):<div></div>}
      </div>
    </div>
  )
}

export default Login;
