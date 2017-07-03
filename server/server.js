var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
 var todo = new Todo({
   text: req.body.text
 });


todo.save().then((doc) => {
  res.send(doc);
}, (e) => {
  res.status(400).send(e);
} );
});

app.listen(3000, () => {
  console.log('listening on port 3000')
});






// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required:true,
//     minlength: 1,
//     trim: true
//   },
//
//   completed: {
//     type: Boolean,
//     default: false
//   },
//
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save().then((doc) =>{
// console.log('Saved todo', doc);
// }, (e)  =>
// {
//   console.log('unable to save Todo');
// });

// var otherTodo = new Todo({
//   text: 'Feed the cat',
//   completed: true,
//   completedAt: 123
// });

// var otherTodo = new Todo({
// text: '   edit this video   '
// });
//
// otherTodo.save().then((doc) =>{
// console.log('Saved todo', doc);
// }, (e)  =>
// {
//   console.log('unable to save Todo', e);
// });


// var user = mongoose.model('user', {
//   email: {
//     type: String,
//     required:true,
//     minlength: 1,
//     trim: true
//   }
// });
//
// var userdetails = new user({
//   email: 'abbharti@cisco.com  '
// });
//
// userdetails.save().then((doc) => {
//   console.log('saved user', doc);
// }, (e) =>
// {
//   console.log('unable to save user', e);
// });
