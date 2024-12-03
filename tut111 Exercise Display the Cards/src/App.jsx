import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [cards, setcards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>

      <div className="container">
        {cards.map((card)=>{
        return <div key={card.id} className='card'> 
        <h2>{card.title}</h2>
        <p>{card.body}</p>
          <span>By: UserId: {card.userId}</span>
       </div>

        })}
     
      </div>

    </>
  )
}

export default App
