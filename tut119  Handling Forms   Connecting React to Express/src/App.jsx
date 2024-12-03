import { useState } from 'react'
import { JSON } from "body-parser"
import { useForm } from "react-hook-form"



function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    await delay(2) // simulating network delay
    console.log(data)

    if(data.userName == "shoaib"){
      setError("myform", {message:"Member of Website"})
    }
     if(data.userName === "shakeel"){
      setError("Blocked", {message:"User is Blocked"})
    }
  }

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {isSubmitting && <div className='gre'>Loading</div>}

          <input {...register("username", { required: { value: true, message: "Enter Username" }, minLength: { value: 3, message: "Write at least 3 Characters" }, maxLength: { value: 8, message: "Write less than 8 Characters" } })} type="text" placeholder='userName' />

          {errors.username && <p className='problem'>{errors.username.message}</p>}

          <input {...register("Password", { required: { value: true, message: "Create Password" }, minLength: { value: 7, message: "Write at least 7 Characters" } })} type="password" placeholder='Password' />

          {errors.Password && <p className='problem'>{errors.Password.message}</p>}


          {errors.myform && <span className='Green'>{errors.myform.message}</span>}
          {errors.Blocked && <span className='problem'>{errors.Blocked.message}</span>}
          
          <input disabled={isSubmitting} type="submit" value="submit" className='btn' /><br />
        </form>
      </div>
    </>
  )
}

export default App
