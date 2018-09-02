
// const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
  if(err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to db server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b8a51611dcfcb2548a6bade')},{
   $inc: {
      age: 1
    }}, {
        returnOriginal:true
      }).then((result)=>{
        console.log(result);
      });

});
