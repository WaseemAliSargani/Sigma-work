
const express = require('express')
const app = express()
const port = 5500;



app.set("view engine", "ejs");


app.get('/', (req, res) => {
  let siteName = " Navbar ";
  let searchtext = "Search!"
  let a = ["Waseem"]
  let b = ["irfan"]
  let c = ["shakeel"]
  res.render("index", {siteName: siteName,  searchtext: searchtext, a, b,c })
})

app.listen(port, () => {
  console.log(` port ${port}`)
})