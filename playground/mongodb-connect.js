
const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
  if(err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to db server');
  // const db=client.db('ToDoApp')
// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// },(err, result) => {
//   if(err){
//     return console.log('Unable to insert');
//   }
//   console.log(JSON.stringify(result.ops, undefined,2));
// });

db.collection('Users').insertOne({
  name: 'Pranav Kumar',
  age: 25,
  location: 'Hyderabad'
},(err, result) => {
  if(err){
    return console.log('Unable to insert');
  }
  console.log(JSON.stringify(result.ops, undefined,2));
});


client.close();
});
