console.log("loops in JS ")
let a = 1;
// console.log(a)
// console.log(a + 1)
// console.log(a + 2)
            // if you have to write 1-100 then we write loops codes

            // its for loop:   it will run continuesly stil function will complete
// for(let b = 0; b< 100; b++){
//     console.log(a+b)
// }

let obj =  {
/*  Key:   value:    */
    name: 'waseem',
    role:   "programmer",
    company: "code with waseem",
};

// for in loop:     it give keys of object
for(key in obj){
    console.log(key,obj)
}

// for off loop:    it will come 1 by 1 letter of string which you write like waseem
for ( c of "Waseem") {
    console.log(c)
}

/// while loop:  it is like continuesly run still functoin will complete
let i = 1;
while (i<10){
    console.log(i)
    i++;
}



