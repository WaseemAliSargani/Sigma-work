console.log('Response__Requestt and Routers in Express');

const express = require('express')
const app = express()
const port = 3000;

app.use(express.static("public"))

app.get("/", (req,res)=>{
    console.log("hey it's get a request")
    res.send("The Express page ")
})

app.post("/", (req,res)=>{
    console.log("hey it's a Post request")
    res.send("post request is successful ")
})

app.get("/index", (req,res)=>{
    console.log("also get request")
    res.send('templates/index.html', {root: __dirname})/// you have to defind {root: __dirname} means path name
})

app.get("/another", (req,res)=>{
    console.log("download request successfully and also file has been downaloded")
    res.download('templates/index.html', {root: __dirname})// now if you on /index then file will automatic downlaod
})

app.get("/api", (req,res)=>{
    console.log("new get request which is /api")
    res.json({"Another request": "which is /api", a: 2, b:3, Result:" a + b = 5"})
})

app.put("/",(req,res)=>{
    console.log("put request for the api")
    res.send("this is put request on localhost:3000/mypage.html put request complete when you on /mypage.html")
})

app.delete("/",(req,res)=>{
    console.log("This is the delete request for api in the")
    res.send("Delete request is successful  ")
})

app.listen(port, ()=>{
    console.log(` port ${port}`)
})