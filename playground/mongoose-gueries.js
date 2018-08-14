const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b730ba01501d3f82abd40ed';

if(!ObjectID.isValid(id)){
    console.log('Id is not valid');
}

// find 
//==> []
// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos ' , todos);
// }); 

// // ==> null
// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todo ' , todo);
// }); 

// ==> null
Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo by Id ' , todo);

}).catch((err)=> console.log(err)); 