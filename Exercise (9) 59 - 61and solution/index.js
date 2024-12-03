console.log('this is exercise')

/*
this is calculator does following:
1.  it takes two number as input from the user
2.  iy perform wrong operations as follows:

+ ----> -
- ----> /
* ----> +
/ ----> **
It performs wronge operation 10% of the times

*/





let r = Math.random();
console.log(r)
let a = prompt('Enter first number')
let c = prompt('Enter operation')
let b = prompt('Enter second number')
let obj = {
    "+":   "-",
    "*":   "+",
    "-":   "/",
    "/":   "**",
}
if(r > 0.3){
    // performs correct calculation:    1 alert is show what you write and: 2 is calculate
    alert(`The result is ${a} ${c} ${b} `)
    alert(`The result ${eval(`${a} ${c} ${b} `)}`)
}

else{
    // performs wrong calculation
    c = obj[c];
    alert(`The result is ${a} ${c} ${b} `)
    alert(`The result ${eval(`${a} ${c} ${b}`)}`)
}

                      // This is best Shortcut which i made
// let a = prompt("enter first")


// alert(`The result is ${eval(`${a}`)}`)

