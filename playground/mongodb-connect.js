// const MongoClinet = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server.');
    }

    console.log('Connected to MongoDB Server.');

    const db = client.db('TodoApp');

    // insert new items to todos collection...
    // db.collection('Todos').insertOne({
    //     text:'Somthing to do',
    //     completed: false
    // } , (err , results) => {
    //     if(err){
    //         return console.log('Unable to insert todo' , err);
    //     }

    //     console.log(JSON.stringify(results.ops , undefined , 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Akram',
    //     age: 22,
    //     location: 'es-serw'
    // }, (err, results) => {
    //     if(err){
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(JSON.stringify(results.ops , undefined , 2));
    // });

    db.close();
});