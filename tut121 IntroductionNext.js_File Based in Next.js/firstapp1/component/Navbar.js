import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
     <div className="containern">
        <ul className='ul '>
            <Link href="/" className='links'>Home</Link>
            <Link href="about" className='links'>About</Link>
            <Link href="contact" className='links'>contact us</Link>
        </ul>
     </div>
    </div>
  )
}

export default Navbar
