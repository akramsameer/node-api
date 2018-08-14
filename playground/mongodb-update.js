const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        console.log('Unable to Connect to MongoDB.', err);
    }
    console.log('Connection to MongoDB..');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5b71741f0589ba2700e3c7e5")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then(results => {
        console.log(JSON.stringify(results , undefined , 2));
    });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b71605dc565e92350fe2b38')
    },{
        $set:{
            name:'akram'
        },
        $inc:{
            age:-2
        }
    },{
        returnOriginal:false
    }).then(res => {
        console.log(JSON.stringify(res , undefined , 2));
    });

    client.close();
});