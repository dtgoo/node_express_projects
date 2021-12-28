const mongoose = require('mongoose');

const connectionString = "mongodb+srv://mongoDBuser:Casio414@nodeexpressprojects.jo4fb.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"


mongoose
    .connect(connectionString,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('CONNECTED TO DB...'))
    .catch((err) => console.log(err));


