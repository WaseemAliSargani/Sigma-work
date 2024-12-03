console.log('Try catch and Error handling');


let a =prompt("Enter first number")
let b =prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)     // parseInt():it calculate given input if you (parseInt) do sum a = 1 b =2: =3 


try {  /// Try: we try to run given function if function not run/execute then error come and we hald error 
    console.log("This is sum",sum*x);

} catch (error) {  /// now the eroro
    console.log(error.name)   // it shows the name of error which is >> refresncesError
    console.log(error.message)/// it tell us reason why error is show reason message is (x is not defined)  
    console.log(error.stack);
    
    console.log("Error aa gya bhai");
    
}
