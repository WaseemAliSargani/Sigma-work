console.log('Promises');

let pro1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.555) {
        reject("first  random number not supporting you")
    }
    else {

        setTimeout(() => {
            
            console.log('First is this');
            
            resolve("waseem")
        }, 100);
    }
});

let pro2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.555) {
        reject("second number not supporting you  2")
    }
    else {

        setTimeout(() => {
            console.log('second is this');
            
           resolve("waseem 2")
        }, 100);
    }
});

let pro3=Promise.allSettled([pro1,pro2])  /// race(): means come by positining one by one first come then second, third, so on
pro3.then((a)=>{
    console.log(a);    
}).catch((b)=>{
    console.log(b)
})

/*  There are 6 Static methods of Promises class  
1.         All():  wait fore all promise to resolve and returns the arrahy of their results
2.  AllSettled():  waits for all the promise to settle/complete and returns their results as array of objects with status and value ( Allsettled give  also value  )
3.        Race():  wait for the first promise to settle and its result/error becomes the Outcome
4.         Any():  wait for the first promise to fulfill (not reject) and its result becomes the outcome throws Aggregete Eroor if all the promises are rejected.
5.     Resolve():  maeks resolved promise with the given value
6.      Reject():  maeks a rejected promise with the given error



*/

