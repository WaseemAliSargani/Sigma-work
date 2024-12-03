import React, { useEffect, useState } from 'react'
 

const Navbar = ({color}) => {

  // case 1: Run on every render
  useEffect(() => {
    alert("it will run on every render")
   })
   
   // case 2: Run only on first render
   useEffect(() => {
    alert("this is the first render")
   }, [])
   
    // case 3: Run only when certain values change
   useEffect(() => {
     alert("i am run bewcause color was changed")
   }, [color])
 
   /// Example of cleanUp function: it means if we delete or remove navbar from app.jsx then return value will run
   useEffect(() => {
     alert("Hey welcome to my page. this is the first render of app.jsx ")
   
     return () => {
       alert("component was unmounted")
     }
   }, [])
   

  return (
    <div>
      This is the color {color} color hehe...
    </div>
  )
}

export default Navbar
