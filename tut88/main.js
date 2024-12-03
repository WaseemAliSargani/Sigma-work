const express = require("express")
const app = express()
const port = 3000


app.use(express.static("public"))


// app.get or app.post or app.put or app.delete{path.handler}
app.get("/",(req,res)=>{
    res.send(`this is get request on express ${req.params.slug} `)
})

app.get("/blog/:slug",(req,res)=>{
    /// Logic to fetch {slug} fromm the db
    // for URL: http://127.0.0.1:5500/blog/
    console.log(req.params)   // will output { slug: 'the' },
                            /// query start from ?mode=dark&reign=pk
    console.log(req.query)   // will output query:{ mode: 'dark', reign: 'pk' },
    
    res.send(`This is the slug  "${req.params.slug}"`)
})

app.get("/contact", (req,res)=>{
    res.send("if you want to contact us then it is use for that work")
})



app.get("/about", (req,res)=>{
    res.send(`This is the "about" page `)
}) 




app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})