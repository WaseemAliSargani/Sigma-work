import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "1 todo",
      desc: "description of 1 todo"
    },
    {
      title: "2 todo",
      desc: "description of 2 todo"
    },
    {
      title: "3 todo",
      desc: "description of 3 todo"
    }
  ])

  // For 1 method
  const Todo = ({ kam }) => {
    return (
      <>
        <div className="container">
          <h3>{kam.title}</h3>
          <p>{kam.desc}</p>
        </div>
      </>)
  }


  return (
    
    <div>
      {todos.map(item => {
        /* 1. Method to Render Functions or Components This {kam} is props which is defind in Todo Function/Component
                       return <Todo key={item.title}   kam={item} /> */

      /*   2 Method to Render Functions or Components in the APP  */
        return <div className="container" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>

      })}

      {showbtn ? <p> This show because you click on "Toggle showbtn" </p> : <h1>Nothing</h1>}  <br />
      <button className='count' onClick={() => { setCount(count + 1) }}> count is {count} </button>
      <button onClick={() => { setShowbtn(!showbtn) }}>Toggle Showbtn</button>
    </div>
  )
}

export default App
