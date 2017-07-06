const fs = require('fs');
const path = require('path');
const express = require('express');
const sequelize = require('sequelize');
const models = require('./models');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRouter = require('./router/api')

mongoose.connect("mongodb://localhost:27017/todomvc")
const app = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

app.use('/api', apiRouter);


app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
