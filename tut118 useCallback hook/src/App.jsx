import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [adjective, setadjective] = useState(0)
  
  // const getAdjective = ()=>{  // It will change and re-Render ///
  //     return "another" +  count
  //   }
     

  const getAdjective = useCallback(()=>{  /// It will not change and not re-Render ///
    return "another" +  count2
  },
    [count2],
  )


  return (
    <>
    <Navbar adjective={"good"}  getAdjective={getAdjective}/>
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
        <button onClick={() => setCount((count) => count + 1)}>
          count one  is {count}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count two is {count2}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
