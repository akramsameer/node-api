var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
// mongoose.connect('mongodb://akram.samir:as012451245@ds221242.mlab.com:21242/todoapp231');

module.exports={
    mongoose
}