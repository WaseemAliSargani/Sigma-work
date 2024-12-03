// let obj={
//     a: 1,
//     b: "Waseem"
// }
// console.log(obj);

// let animal={
//     eats: true
// };
// let rabit={
//     jumps: true
// }
// rabit.__proto__=animal

class animal{
    constructor(name){
        this.name=name
        console.log('object is created');
    }
    eats(){
        console.log('kha raha hoon');
    }
    jumps(){
        console.log('kood raha hoon');
    }

}

class lion extends animal{
    constructor(name){
        super(name)
        console.log('object is created and he is a lion ');
    }
}

let a = new animal("bunny")
console.log(a)

let l= new lion("shera")
console.log(l)