"use client"
import { waitUntilSymbol } from "next/dist/server/web/spec-extension/fetch-event";
import Image from "next/image";

export default function Home() {
  const handleClick = async()=>{
     let data = [{
       name: "Waseem Ali",
       level: "5 Years Employe",
       role: "Software Engineer , Programmer"
     },
     {
      name: "Zakir ali ",
      level: "5 Months Employe",
      role: "Coder"
    },
    {
      Name: "Ali Chandio",
      level: "Entry level",
      role: "Debugging and problem  sovling"
    },
    {
      Name: "Sharriar ",
      level: "2 Year Employe",
      role: "Programmer"
    },
    ]
    
    let a = await fetch("/api/add", {method: "POST", headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    let res = await  a.json()
    console.log(res)
   }
  return (
    <div>
      <h1 className="text-xl font-bold "> Next.js Api routes demo // if you click here then it will show some more  information about Employe of the company </h1>
      <button onClick={handleClick} className="bg-red-600 mx-10"> Click here!</button>
    </div>
  );
}
