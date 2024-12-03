import React from 'react'

const page = () => {
  return (
    <form >
      <dir className="flex items-center justify-center">
      <label htmlFor="one" > Enter your Email 
        <input type="text" className='txt m-4' />
      </label> 
      </dir>

      <div className="flex items-center justify-center ml-8">
      <label htmlFor="two"> Enter your Name 
        <input type="password"  className='pwd m-4 ml-4'/> <br />
        <button className='btn'>Submit</button>
      </label><br />
      
      </div><br />
      
    </form>
  )
}

export default page
