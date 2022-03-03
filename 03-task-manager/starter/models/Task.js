const mongoose = require('mongoose')

//se mongoose doc til schema type
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20, 'name cannot be more than 20 characters']
    },
    
    completed:{
        type: Boolean,
        default:false
    }
})

//model er wrapper til schema

module.exports = mongoose.model('Task', TaskSchema)