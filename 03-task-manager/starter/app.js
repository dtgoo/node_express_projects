const express = require('express');
const app = express();

//routes

app.get('/hello', (req, res) => {
    res.send("Task Manager says hello!");
});

//testing here DELETE THIS! 
//app.get('/api/v1/tasks') - get all tasks
//app.post('/api/v1/tasks') - post a new task
//app.get('/api/v1/tasks/:id') - get a single task by id 
//app.path('/api/v1/tasks/:id') - update task
//app.delete('/api/v1/tasks/:id') - delete a task by ID


//creating a port number and telling the browser to listen on that port number
const port = 3000; 
app.listen(port, console.log(`SERVER IS LISTENING ON ${port}...`));

