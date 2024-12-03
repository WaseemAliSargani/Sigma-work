import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <h2>Login</h2>
        <form action="/Subm">
        <div className='inputt'>
        <input type="text" placeholder='Enter your name' />
        <input type="email" placeholder='Enter your Email.com' />
        </div>
        
        <input type="submit"/>
        </form>
    </div>
  )
}

export default Login
