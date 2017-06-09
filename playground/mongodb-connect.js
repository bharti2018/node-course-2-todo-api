 // const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

 var obj = new ObjectID();
 console.log(obj);

// var user = {name: 'Andrew', age:25};
// var {name} = user;
// console.log(name);

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err) {
     return console.log('Unable to connect to mongodb server');
   }
   console.log('Connected to mongodb server');

//    db.collection('Todos').insert({
//      name: "Abhishek Kumar",
//      age: "26"
//    }, (err, result) => {
//      if(err){
//      return console.log('unable to connect to DB', err);
//    }
// console.log(JSON.stringify(result.ops, undefined, 2));
//  });

// inserting in users collection

// db.collection('Users').insert(
//   {
//   name: "Abhishek",
//   age: "24",
//   location: "HYD"
// }, (err, result) => {
//   if(err){
//   return console.log('unable to connect to DB', err);
// }
// // console.log(JSON.stringify(result.ops, undefined, 2)); //.ops shows us all the doc that were inserted in DB
//
// console.log(result.ops[0]._id.getTimestamp());
// });

   db.close();

 });
