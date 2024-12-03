"use client" // if you want to submit form then form will reset then you import {useRef}  and page give "use client"
import { SubmitAction } from "@/Action/form";
import { useRef } from "react";  
export default function Home() {

  let ref = useRef()   /// make varaible of  useRef()

  return (
    <div className="container flex justify-center items-center">
      <form ref={ref} action={(e)=>{SubmitAction(e); ref.current.reset()}}> 
      {/* do like this ref={ref} and make array function in submit form like upper that's it*/}
        <div className="m-10">
          
          <label htmlFor="name" className="m-10 p-10">Name</label>
          <input name="name" id="name" type="text" className="text-black border " />
        </div>
        <div className="m-10">
          <label htmlFor="add" className="m-10 p-10">Address</label>
          <input name="add" id="add" type="email" className="text-black border " />
        </div>
        <div className="text-center">
          <button className="btn" >Submit</button>
        </div>
      </form>
    </div>
  );
}
