/// CRED Operations
use("crudDB")

db.createCollection("courses")
// db.courses.insertOne({name: "waseem web devev free course",
//  price: 0,
//  assignmnets: 12,
//  projects:  45,
//  duration: "5month",
//  })

/// CREATE
//  db.courses.insertMany([
//    {
//       name: "sigma web dev course",
//       price: 0,
//       instructor: "WaseemAli"
//    },
//    {
//       name: "dark web dev course",
//       price: 0,
//       instructor: "AliChandio"
//    },
//    {
//       name: "Hacking course",
//       price: 0,
//       instructor: "Zakir Ali"
//    }
//  ])

// READ
//  let  a = db.courses.find({price: 500000})
//  console.log(a.toArray())


//  let b = db.courses.findOne({price: 1000000})
//  console.log(b);

// UPDATE
// let a   = db.courses.updateMany({price: 0},{$set:{price: 100}})
// console.log(a)


// DELETE
db.courses.deleteOne({price: 100})

//https://www.mongodb.com/docs/manual/reference/operator/query/