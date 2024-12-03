console.log("Strings in javascript")

let a = "waseem";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

// lenght: means check how much words or numbers in varible
console.log(a.length)

let realname = "waseem";
let brother = " farhan"
// its old way 
console.log("his name " +  realname+ " and his brother's name is " + brother)
/// modern way
console.log(`his name is ${realname} and his brother's name is ${brother}`)



// Uppercase  -  lowercase:  means capital or small alphabet
console.log(realname.toUpperCase())
/// slice: means where number is which letter:examples:  "waseem ali"   w on 0\M on 5 number
console.log(realname.slice(0,4))




// replace: means you can replace any word in string
let string = "This is the string which i use in javascipt and this always use for store words"
console.log(string)
console.log(string.replace("store","write"))



// concat:  means we add many strings in one string like this
console.log(realname.concat(brother,"He is  Waseem's brother",string))