const Task = require('../models/Task')

//mongoose doc til models

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }

}

const createTask = async (req,res) => {
    try{

    const task = await Task.create(req.body)
    res.status(201).json({task});
    } catch(error){
        res.status(500).json({msg:error})
    }
}

const getTask = async (req,res)=> {
    try {
        const task = await Task.findOne({_id:req.params.id})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error}) 
    }
}
const updateTask = (req,res)=>{
    res.send(`updating item ${req.params.id}`)
} 
const deleteTask = (req,res)=>{
    res.send(`deleting task ${req.params.id}`)
}

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}