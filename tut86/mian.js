import {a,b,c,d} from "./mymodules.js"      // we can import  by name  because this is (name export)
console.log(a,b,c,d)

import the from "./mymodules.js"      // we can import by anyName/Word becase this is (default import)
console.log(the)


// const a = require("./mymodules2.js")     // this is require by anyName/Word this also (defaullt import)
// console.log(a)