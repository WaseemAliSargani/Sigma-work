import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
/*    1. use case
   const a = useRef(0)

  useEffect(() => {
    a.current =  a.current + 1
    console.log(`redendering and the value of  a is ${a.current}...`)
  }) */

  /// 2 use case
  const btnref = useRef()

  useEffect(() => {
    console.log(`redendering ...`)
  })
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{btnref.current.style.backgroundColor="red"}}> change me</button>
    </>
  )
}

export default App
