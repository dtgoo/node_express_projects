const Task = require('../models/Task')





// models below 

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).send({msg: error})
    }
}
const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task});
    } catch (error) {
        res.status(500).send({msg: error})
    }
}

const getTask = (req,res) => {
    res.send("get single tasks");
}

const updateTask = (req,res) => {
    res.send('update tasks');
}

const deleteTask = async (req,res) => {
    res.send('delete task');
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}