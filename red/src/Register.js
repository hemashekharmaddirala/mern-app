import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
    const[data,setData]=useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    const{username,email,password,confirmpassword}=data
    const changeHandle=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandle=(e)=>{
        e.preventDefault()
      axios.post('http://localhost:5000/Register',data).then(
        response=>alert(response.data)
      )
    }
  return (
    <div>
      <center>
        <form onSubmit={submitHandle}>
            <h2>Register</h2>
                 <input type='text'value={username}name='username'onChange={changeHandle}/><br/>
                  <input type='email'value={email}name='email'onChange={changeHandle}/><br/>
                 <input type='password'value={password}name='password'onChange={changeHandle}/><br/>
                <input type='confirmpassword'value={confirmpassword}name='confirmpassword'onChange={changeHandle}/><br/>
                <input type="submit"name='submit'/>
        </form>
      </center>
    </div>
  )
}

export default Register
