/* Create a business name generator by combining list of adjective and shop name and another word
*/


console.log("this is the Exercise 10")
let first,second,third;


//1 the first name generate
let rand = Math.random();
if(rand>0.33){
    first = "crazy"
}
if(rand>0.66){
    first = "Amazing"
}
if(rand<0.33){
    first = "Fire"
}



//2 the second name generate
rand = Math.random();
if(rand>0.33){
    second = "Food"
}
if(rand>0.66){
    second = "Garments"
}
if(rand<0.33){
    second = "Engine"
}




//3 the third name generate
rand = Math.random();
if(rand>0.33){
    third = "Limited"
}
if(rand>0.66){
    third = "Bros"
}
if(rand<0.33){
    third = "Hub"
}
console.log(rand)
console.log(`${first} ${second} ${third}`)

