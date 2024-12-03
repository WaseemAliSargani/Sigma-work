import path from "path"
let mypath = "D:\\Sigma web\\Sigma work\\tut87\\waseem.txt";

console.log(path.extname(mypath))     // check which is the extention of file: txt ; js ; html and others
console.log(path.basename(mypath))  // check what is the name of file:  waseem.txt; waseem2.txt; main.js; and others


console.log(path.join("C:/","programs\\waseem.txt"))// it join for path if write wrong then it will fix and do right