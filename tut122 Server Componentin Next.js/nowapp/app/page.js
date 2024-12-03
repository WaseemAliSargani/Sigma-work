///1  if you want to use client site then write on top  "use client" write this and use client site
import Navbar from "@/components/Navbar"
// import { useEffect, useState } from "react"; //2 here you can use (useEffect, useState) 
import fs from "fs/promises"

export default function Home() {
  // const [count, setcount] = useState(0)  ///3 here you defind the count and do something
  console.log("Hey console ") ////4 this is the console which i run in server site
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})

  return (
  <div>
    <Navbar/>
    i am a component {/* {count} <br /> */}
    {/* ///5 here you can use the count, setcount in  buttons  */}
    {/* <button onClick={()=> setcount(count + 1)} className="text-8xl"> +</button><br />
    <button onClick={()=> setcount(count - 1)} className="text-8xl"> -</button> */}
  </div>
  );
}

// This is  the before code with  + and -
// "use client"
// ///1  if you want to use client site then write on top  "use client" write this and use client site
// // import Navbar from "@/components/Navbar"
// import { useEffect, useState } from "react"; //2 here you can use (useEffect, useState) 
// // import fs from "fs/promises"

// export default function Home() {
//   const [count, setcount] = useState(0)  ///3 here you defind the count and do something
//   console.log("Hey console ") ////4 this is the console which i run in server site
//   // let a = fs.readFile(".gitignore")
//   // a.then(e=>{console.log(e.toString())})

//   return (
//   <div>
//     i am a component {count} <br />
//     {/* ///5 here you can use the count, setcount in  buttons  */}
//     <button onClick={()=> setcount(count + 1)} className="text-8xl"> +</button><br />
//     <button onClick={()=> setcount(count - 1)} className="text-8xl"> -</button>
//   </div>
//   );
// }
