import React, { useState,useContext } from 'react'
import axios from 'axios'
import { store } from './App'
import {Navigate} from 'react-router-dom'
const Login = () => {
  const[token,setToken]=useContext(store)
    const[data,setData]=useState({
      
        email:"",
        password:"",
       
    })
    const{email,password}=data
    const changeHandle=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandle=(e)=>{
        e.preventDefault()
      axios.post('http://localhost:5000/Login',data).then(
        response=>setToken(response.data.token)
      )
    }
    if(token){
      <Navigate to='/myprofile'/>
    }
  return (
    <div>
      <center>
        <form onSubmit={submitHandle} autoComplete='off'>
            <h2>Login</h2>
            
                  <input type='email'value={email}name='email'onChange={changeHandle}/><br/>
                 <input type='password'value={password}name='password'onChange={changeHandle}/><br/>
       
                <input type="submit"name='submit'/>
        </form>
      </center>
    </div>
  )
}

export default Login
