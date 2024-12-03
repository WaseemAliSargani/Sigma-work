import React from 'react'
import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div>
        <div className="logo">{props.logotext}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
      <Footer/> 
    </div>
  )
}

export default Navbar
