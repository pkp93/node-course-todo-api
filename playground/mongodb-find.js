
// const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
  if(err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to db server');
db.collection('Users').find({email: 'akram'}).count().then((count) => {
  console.log(`Users count ${count}`);
  // console.log(JSON.stringify(docs, undefined,2));
}, (err) => {
  console.log('Unable');
})


// client.close();
});
