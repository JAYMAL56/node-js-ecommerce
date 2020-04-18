const mongoose = require('mongoose')
const Schema =  mongoose.Schema


const testSchema = new Schema({
    first_name:{
        type:String,
        required: true,
        trim: true
       
    },
    last_name:{
        type:String,
        required: true,
        trim: true
       
    },
    city:{
        type:String,
        required: true,
        trim: true       
      },
    email:{
        type:String,
        required: true,
        trim: true
        
        
    },
  
  
   
     
     
     
}) 


module.exports = mongoose.model('Test',testSchema)