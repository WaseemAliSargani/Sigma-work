const  mongoose = require("mongoose")

const employeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
     language: String,
     city: String,
     isManager: Boolean,

  });

     const Employe = mongoose.model('Employe', employeSchema);
     module.exports = Employe