var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Todo.findAll({raw: true}).then(function(todos){
    console.log(todos);
    res.render('pages/table', { title: 'Todo List', tododata: todos});
  })
});

router.post('/', function(req, res, next) {
  models.Todo.create({title: req.body.title, completed: false}).then(function(todo){
    res.redirect("/");
  })
});



module.exports = router;
