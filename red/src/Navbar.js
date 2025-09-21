import React from 'react'
import { Link } from 'react-router-dom'

import { Navigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <center>
        <ul>
          <Link to='/register'><li>Register</li></Link>
         <Link to='/login'><li>Login</li></Link> 
        </ul>
      </center>
    </div>
  )
}

export default Navbar
