const  express = require("express")
const app = express()
const port = 5500
const fs = require("fs")


app.use(express.static("public"))


// MiddleWare 1
app.use((req,res, next) =>{
    fs.appendFileSync("login.txt", `\n${Math.random()} is a ${req.method}`)
    console.log(`${Math.random()} is a ${req.method}`)
    next()
})
// MiddleWare 2
app.use((req,res, next) =>{
    console.log("m2")
    next()
}).get("/", (req,res)=>{
    console.log("last")
    res.send("Hello world!")
})
// if you want to sendFile on Name so write this code: write 127.0.500/nalo then display file which name is zakir/nam.txt
app.get("/nalo", (req,res)=>{
    
    res.sendFile("zakir/nam.txt", {root: __dirname})
}).get("/about", (req,res)=>{
    res.send("Hello about!")
}).get("/contact", (req,res)=>{
    res.send("Hello contact!")
}).listen(port, ()=>{
    console.log(`The port ${port}`)
})