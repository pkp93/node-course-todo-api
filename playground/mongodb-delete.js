
// const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
  if(err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to db server');

db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5b8b8ae6f581160cb8739adf")
}).then((results)=>{
  console.log(JSON.stringify(results,undefined,2));
});

});
