const express = require('express');
const Todo = require('../models/todos');
const router = express.Router();

const bodyParser = require('body-parser');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));


router.get('/todos', function(req, res){
  Todo.find({}).then(function(todos){
    // const outputArray = [];
    // for(let i = 0; i < todos.length; i++){
    //   output.Array.push(todos[i].toObject())
    // }
    // res.json(outputArray)
    res.json(todos.map(function (todo){
      return todo.toJSON();
    }));
  })
})

const getTodo = function(req, res, next){
  const todoId = req.params.todoId;
  Todo.findById(todoId).then(function(todo){
    req.todo = todo;
    next();
  })
}


router.post('/todos', function(req, res){
  const title = req.body.title,
  completed = req.body.completed,
  order = req.body.order;

  Todo.create({
    title: title,
    completed: completed,
    order: order
  }).then(function(todo){
    res.status(201).json(todo.toJSON());

  })
})

router.get('/todos/:todoId', getTodo, function(req, res){
  // const todoId = req.params.todoId;
  // Todo.findById(todoId).then(function(todo){
    res.json(req.todo.toJSON());
  })


router.put('/todos/:todoId', function(req, res){
  // const todoId = req.params.todoId;
  // Todo.findById(todoId).then(function(todo){
  const todo = req.todo;
  todo.title = req.body.title;
  todo.completed = req.body.completed;
  todo.order = req.body.order;
  todo.save().then(function(){
    res.json(todo);
  })
})


module.exports = router;
