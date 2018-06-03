import React from 'react'
import { Link } from 'react-router'


const Login = () => {
  return (
    <div className="login-page">
      <h1>Find My Trails</h1>
      <p>Mountain biking trails near you!</p>
      <a href="/auth/google" target="_self"><input type='button' value='Login' className='input-button btn btn-success login-button' /></a>
      <div>
        <Link to="/trails">Continue As Guest</Link>
      </div>
    </div>
  )
}

export default Login