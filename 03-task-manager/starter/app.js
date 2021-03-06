const express = require('express');
const app = express();
const taskRoute = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

app.get(('/hello'), (req, res) => {
    res.send('Task Manager App')
})

//middleware
app.use(express.json());

//routes
app.use('/api/v1/tasks', taskRoute)



// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')
const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()