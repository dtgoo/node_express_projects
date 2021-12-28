
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

// middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
    res.send("Task manager app");
});

// more middleware 
app.use('/api/v1/tasks', tasks)


//creating a port number and telling the browser to listen on that port number
const port = 3000; 
const start = async () => {
 try {
    await connectDB()
    app.listen(port, console.log(`SERVER IS LISTENING ON PORT ${port}...`));

 } catch (err) {
    console.log(err);
 }
}

start()
