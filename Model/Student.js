const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    addDate:{
        type:Date,
        default:Date.now()
    },
    field:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'dfield'
    }

})

module.exports = mongoose.model('dstudent',studentSchema)