import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Navbar = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      Hi i am Navbar and also Value-of-count {count}
    </div>
  )
}

export default Navbar
