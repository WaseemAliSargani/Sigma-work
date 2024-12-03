console.log("working With Files__fs and path Moduels");

const fs = require("fs")

console.log('startging');
/* fs.writeFileSync("waseem.txt", "Waseem is the good boy");  writeFileSync code first Run then other Code Run */ 

fs.writeFile("waseem2.txt", "Waseem is the good boy2" , ()=>{    // writeFile Run after all code Run 
    console.log("done")
    fs.readFile("waseem2.txt", (error, data)=>{
        console.log(error,data.toString())
    })
}) 

fs.appendFile("waseem2.txt"," waseem robo", (e,d)=>{
    console.log(d)
})
console.log('ending');




// NOTE:  this is the callback hells it is not good we use promises which we learn in (mainpromises.js) file





