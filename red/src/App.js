import React ,{useState,useContext, createContext}from 'react'
import Navbar from './Navbar'
import './App.css'
import Register from './Register'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Login';


export const store=createContext()

const App = () => {
  const[token,setToken]=useState(null)
  return (
    <div>
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Register' Component={Register}/>
        <Route path='/login' Component={Login}/>
  
      </Routes>
      
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App
