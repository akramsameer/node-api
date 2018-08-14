const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return ('Unabel to connect to MongoDB Server.', err);
    }

    console.log('Connected to MongoDB server..');

    const db = client.db('TodoApp');

    //deleteMany
    db.collection('todos').deleteMany({text:'Eat Lunch'}).then((results) => {
        console.log(results);
    });
    //deleteOne

    //findOneAndDelete

});