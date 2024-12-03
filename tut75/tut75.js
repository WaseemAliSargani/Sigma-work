console.log("Harry is a hacker")
console.log("Rohan is a hacker")
setTimeout(() => {
    console.log("I am inside setTimeout")   /// it print at the End 
}, 2000);
console.log("the End")


const fn=()=>{
    console.log("NOthing")
}


const callback = (arg,fn) => {
    console.log(arg)
    fn()
    document.getElementById('');

}

const loadScriop = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("waseem",fn);
    document.head.append(sc)
}
loadScriop("D:\Sigma web\Sigma work\tut58.js",callback)