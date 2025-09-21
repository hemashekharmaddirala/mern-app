import React,{useContext,useEffect,useState} from 'react'
import{Redirect} from 'react-router'
import { store } from './App'
import axios from 'axios'
import { response } from 'express'

const Myprofile = () => {
    const[token,setToken]=useContext(store)
    const[data,setData]=useState(null)
    useEffect(()=>{
        axios.get('http://localhost:5000/Myprofile',{
            headers:{
                'x-token':token
            }

        }).then(response=>setData(response.data)).catch((err)=>console.log(err))
    })
    if(!token){
        <Redirect to='login'/>
    }
  return (
    <div>
        {
        data &&
      <center>
       welcome user:{data.username}
      </center>
}
    </div>
  )
}

export default Myprofile
