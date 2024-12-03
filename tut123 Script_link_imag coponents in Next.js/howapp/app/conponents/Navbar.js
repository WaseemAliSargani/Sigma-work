import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav  className='flex justify-between px-4  bg-slate-800 text-white py-4'>
    <div className="text-center "> Facebook</div>
    <ul className='flex gap-8 text-sm'>
        <Link href="/"><li className='text-xl'> Home</li></Link>
        <Link href="/about"><li className='text-xl'> About </li></Link>
        <Link href="/contact"><li className='text-xl'> Contact us</li></Link>
        
    </ul>
</nav>
  )
}

export default Navbar
