const mongoose = require('mongoose')
const BeltExamSchema = new mongoose.Schema({

 name :{
    type: String,
     required : [true, 'Name is required '],
     minlength :[2, 'Name must be at least 2 characters in length']
 },
 position :{
    type: String
    

 }

},

{timestamps:true})


module.exports = mongoose.model("BeltExam", BeltExamSchema)
