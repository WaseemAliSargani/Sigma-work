
const express = require('express')
const app = express()
const  mongoose = require("mongoose")
const port = 5500;
mongoose.connect("mongodb://localhost:27017/company")
const Employe = require("./models/Employe.js");


app.set("view engine", "ejs");


const getrandom = (arr)=>{
    let rno  = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

app.get('/', (req, res) => {
  res.render("index",{foo: "the"})
})

let rname = ["Waseem", "Shakeel", "Zakir", "Sharry", "Naveed"];
let rlanguage = ["Python", "Java", "JavaScript", "C", "C++"];
let rcity = ["New York", "London", "Paris", "bilgin", "larkana"];


app.get('/generate', async (req, res) => {
    // clear colletion
    await Employe.deleteMany({})

    // generate data
    for (let index = 0; index < 10; index++) {
     let e = await Employe.create({
        name: getrandom(rname),
        salary: Math.floor(Math.random() * 100000),
        language: getrandom(rlanguage),
        city: getrandom(rcity),
        isManager: (Math.random()>0.38?true:false)
     })
     console.log(e);
    }
  res.render("index",{foo: "FOO"})
})

app.listen(port, () => {
  console.log(` port ${port}`)
})