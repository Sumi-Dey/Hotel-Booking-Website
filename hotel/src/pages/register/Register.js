import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginSuccess, registerSuccess } from '../../context api/Context';
import "../login/Login.css"

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const err = useSelector((state) => state.search.error);
    const register = useSelector((state) => state.search);
    console.log(register)
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))

    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth/register", credentials);
            dispatch(registerSuccess(res.data));
            navigate("/")
        } catch (error) {
            dispatch(loginFailed(error.response.data))
        }
    }
    return (
        <div className='main-login'>
            <div className='login'>
                <input type='text' id='username' className='login-input' placeholder='Username' onChange={handleChange} />
                <input type='text' id='email' className='login-input' placeholder='Email ID' onChange={handleChange} />
                <input type='password' id='password' className='login-input' placeholder='Password' onChange={handleChange} />
                <button type='submit' className='btn' onClick={handleClick} id="liveAlertBtn">Submit </button>
                {err ? (
                    <div className='err'>{err} </div>) : <div></div>}
            </div>
        </div>
    )
}

export default Register
