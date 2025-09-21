import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const[data,setData]=useState([])
  const[name,setName]=useState()
  useEffect(()=>{
    axios.get('http://localhost:5000/getallnames')
    .then(arr=>setData(arr.data))
  },[])
  const changeHandle=(e)=>{
    setName(e.target.value)
  }
  const submitHandle=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/name',{name:name})
    .then(arr=>setData(arr.data))
  }
  return (
    <div>
      <h1>deva</h1>
      <form onSubmit={submitHandle}>
        <input type='text' onChange={changeHandle}value={name}/>
        <input type='submit' name='submit'/>
      </form>
      {
        data.map((item)=><li>{item.name}</li>)
      }
    </div>
  )
}

export default App
