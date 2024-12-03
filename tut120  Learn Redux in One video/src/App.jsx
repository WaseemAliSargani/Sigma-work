import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './Redux/Counter/CountSlice'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar />
    <button onClick={() => dispatch(multiply())}>*</button>
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
    Currently count is {count}
    <button onClick={() => dispatch(increment())}>+</button>
    </div>
    </>
  )
}

export default App
