import React from 'react'
import "./Login.css"
import Navbar from '../../../components/Navbar/Navbar'

const Login = () => {
  return (
    <>
      <Navbar />
      <div className='login-container'>
        <div className='login-card'>
          <div className='left-section'>
          </div>
          <div className='right-section'>
            <h1 className='login-title'>Welcome</h1>
            <div className='login-form'>
              <div className='form-control'>
                <label className='input-label'>Email</label>
                <input className='form-input' type='email' placeholder='Enter email'/>
              </div>
              <div className='forn-control'>
                <label className='input-label'>Password</label>
                <input className='form-input' type='password' placeholder='Enter password'/>
              </div>
              <button className='login-btn' type='submit'>Login</button>
              <a href='#' className='login-signup-link'>New to Foodka, Create an account</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login