var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/todos', function(req, res, next) {
  models.Todo.findAll({raw: true}).then(function(todos){
    res.json(todos);
  })
});

router.post('/todos/add', function(req, res, next) {
  models.Todo.create({title: req.body.title, completed: false}).then(function(todo){
    res.json(todo);
  })
});

module.exports = router;
