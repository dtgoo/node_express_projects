



const getAllTasks = (req,res) => {
    res.send('All items from the file')
}

const createTask = (req,res) => {
    res.send('Task has been created');
}
module.exports = {
    getAllTasks,
    createTask,
}