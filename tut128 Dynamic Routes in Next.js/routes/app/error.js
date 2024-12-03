"use client"  // Eroro compoennt mujst bge client components
import { useEffect } from "react"

 

export default function Error({error, reset}){
    useEffect(()=>{
        // Log the error to an error reporting service
        console.log(console.error)
    }, [error])

    return (
        <div className="text-center mt-52"> 
            <h2 > Something went  wrong</h2>  <br />
            <button className="error" onClick={()=> reset()}>Try again</button> 
        </div>
    )

}