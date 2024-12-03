import React,{ useContext } from 'react'
import { counterContext } from './context/context'


const Component1 = () => {
  const value = useContext(counterContext)
  return (
    <div>
    The value of "Count" {value.count}
    </div>
  )
}

export default Component1
