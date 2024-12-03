import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Value is {count}</h1>
    <button onClick={()=>setCount(count-1)}>-</button>
    <button onClick={()=>setCount(count + 1)}>+</button>
    <button onClick={()=>setCount(count * 2)}>*</button>
    </>
  )
}

export default App
