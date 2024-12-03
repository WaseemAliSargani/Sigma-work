import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <div className='usercontainer'>
        <h2 className='userh'>Welcome back <marquee ><b className='userb'>{params.username}</b></marquee> </h2>
        <p className='userp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos voluptatem voluptate magnam veniam voluptates eius tenetur accusantium illum amet.</p>
       
    </div>
  )
}

export default User
