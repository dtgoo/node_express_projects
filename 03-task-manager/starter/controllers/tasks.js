const Tasks = require('../models/Task')

const getAllTasks = (req,res) => {
    res.send('Get all tasks')
}

const createTask = (req,res) => {
    res.send("Create task");
}

const getTask = (req,res) => {
    res.send("get single tasks");
}

const updateTask = (req,res) => {
    res.send('update tasks');
}

const deleteTask = (req,res) => {
    res.send('delete task');
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}