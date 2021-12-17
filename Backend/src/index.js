const express = require('express');
const server = express();
const TaskRoutes = require('./routes/TaskRoutes');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/todo';

mongoose.connect(url, { useNewUrlParser: true});

server.use(express.json());
server.use('/task', TaskRoutes);

server.listen(3000, () => {
    console.log("API ONLINE");
});