// async function getData() {
//     /// Simulate getting data froma server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(57575)
//         }, 3000);
//     })
// }

/* settle: menas (resolve or reject)
1.  resolve:  means promise ahs settle successfuly     >>>  resolve
2.  reject:   means prommise has not settled successfuly >> reject*/

async function getData() {

    let x = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        body: JSON.stringify({  
            title:  "new",
            body:  "ah",
            userId: 1,
        }),
        headers:{
            "content-type": "application/json; charset-UTF-8",
        },
    })
    let data = await x.json()
    /* let data = await x.json() >>>   x.json: means it parse/return/give  as json   x value give in json means funtion*/
          return data
     }

async function main() {
    console.log('Loading modules');
    console.log('do somethiing else');
    console.log('Load Data');

    let data = await getData()
    console.log(data)
    console.log('Process data');
    console.log('task 2');
}
main()

// data.then((v)=>{
//     console.log(data)
//     console.log('Process data');
//     console.log('task 2');
// })

