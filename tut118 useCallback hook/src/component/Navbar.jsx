import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective,getAdjective,setadjective}) => {
  console.log("Navbar is rendered")
  return (
    <div>
    This is {adjective} Navbar
    <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}
 
export default memo(Navbar)
