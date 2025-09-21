
import React, { useState } from 'react'

const Signup = () => {
  const[data,setData]=useState({
    username:"",
    email:"",
    password:""
    
  })
  const{username,email,password}=data
  const changeHandle=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandle=(e)=>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandle}>
          name:<input type='text'value={username}name='username'onChange={changeHandle}/><br/>
          email:<input type='email'value={email}name='email'onChange={changeHandle}/>
          password:<input type="password"value={password}name='password'onChange={changeHandle}/>
      
          <input type="submit"name='submit'/>
        </form>
      </center>
    </div>
  )
}

export default Signup
