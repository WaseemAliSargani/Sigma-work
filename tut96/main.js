/// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 5500

app.get('/', (req, res) => {
  const todo = new Todo ({desc: "also desc is string", 
  isDone: false, days: 67676 })
  console.log(Date())
  todo.save()
  res.send('Hello World!')
})

app.get('/a', async (req, res)=> {
  let todo = await Todo.findOne({})

  res.json({First: todo.title, second: todo.desc})
})

app.listen(port, () => {
  console.log(`on Port ${port}`)
})
