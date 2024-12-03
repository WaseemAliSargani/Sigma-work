import fs from "fs/promises"
import path from "path"
let mypath =  "D:\Sigma web\Sigma work\tut87\main.js \waseem.txt>"

let a = await ("waseem.txt")  // This  for know the file name

let b = await fs.appendFile(" waseem.txt"," \n\n this is amazing promise")
// console.log(a.toString(),)

console.log(path.dirname(a))
console.log(path.extname(a))
console.log(path.basename(a))
console.log(path.basename(mypath))  // this also for know the file name