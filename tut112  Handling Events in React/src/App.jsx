import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [name, setname] = useState("waseem") this value is not change untill make handlechange
  const [form, setform] = useState({name: "", password: ""})
  
  const handle = (e) =>{
    setform({...form, [e.target.name]:e.target.value})
  }
  const click =()=>{
    alert("clicked")
  }
  const mouseover =()=>{
    alert("mouseOver")
  }

  const submit = ()=>{
    console.log(form)
  }
  

  return (
    <>
      <div className='container'>
      <button className='g' onClick={click}>click me</button>
      <button className='b' onMouseOver={mouseover}>click me</button>
      </div>
      {/* this value not change */}
      {/* <input type="text" name='email' value={name} onChange={handle}/> */}

      {/* Best Method for Form and input */}
      <br />
      <input type="text" name='name' value={form.name} onChange={handle}/>
      <input type="password" name='password' value={form.password} onChange={handle}/><br /><br />
      <input type="submit" className='sub' onClick={submit}/>
    </>
    // you can use it if form useState is empty otherwise you can use uper syntax
    // <input type="text" name='email' value={form.email?form.email:""} onChange={handle}/>
    // <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handle}/>
  )
}

export default App
