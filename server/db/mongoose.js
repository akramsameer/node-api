var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://akram.samir:as012451245@ds221242.mlab.com:21242/todoapp231');

module.exports={
    mongoose
}