const fs = require('fs');
const path = require('path');
const express = require('express');
const sequelize = require('sequelize')
const models = require('./models')
const app = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

// put routes here
app.get('/api/todos/', function(req, res){
  models.Todo.findAll().then(function(todos){
    console.log(todos);
  //   if(todos){
  //   res.json([{
  //     id: todos.dataValues.id,
  //     title: todos.dataValues.title,
  //     order: todos.dataValues.order,
  //     completed: todos.dataValues.completed
  //   }]);
  // }
  // else{
  //   res.redirect('/');
  // }
  })
})

app.post('/api/todos/', function(req, res){

})





app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
