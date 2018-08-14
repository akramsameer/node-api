var env = process.env.NODE_ENV || 'development';
console.log('env ***********' , env);

if(env === 'development'){
    process.env.PORT = 3000;
    console.log('Testing2');
    //process.env.MONGODB_URI = 'mongodb://akram.samir:as012451245@ds221242.mlab.com:21242/todoapp231';
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}else if (env === 'test'){
    process.env.PORT = 3000;
    console.log('Testing');
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}