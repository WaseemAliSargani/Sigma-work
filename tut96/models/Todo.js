import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {type: String, required:  true, default: " this  is the default value of this functioon"},
    desc: String,
    isDone: Boolean,
    days: Number,
    date: { type: Date, default: Date.now },
  });
  export const Todo = mongoose.model('Todo', TodoSchema);