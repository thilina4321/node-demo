const Task = require('../model/task-model')

exports.createTaks = async(req,res)=>{

    try {
        const {title} = req.body

        const task = new Task({title})
        const createdTask = await task.save()

        res.send(createdTask) 

    } catch (error) {
        console.log(error);
    }
}

exports.getTasks = async(req,res)=>{

    const {pageNumber=1, tasksPerPage=2} = req.query

    

    try {
        
        const count = await Task.countDocuments()
        const tasks = await Task.find().skip(+tasksPerPage * (+pageNumber - 1))
        .limit(+tasksPerPage)
       
        res.send({tasks,count})
    } catch (error) {
        res.status(503).send({error:'Server Error'})
    }
}

exports.delete = async(req,res)=>{
    const id = req.params.id
    try {
        const deletes = await Task.findByIdAndDelete(id)
        res.send(deletes)
    } catch (error) {
       res.status(500).send(error.message) 
    }
}
