const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

var id = '5b730ba01501d3f82abd40ed';

if(!ObjectID.isValid(id)){
    console.log('Id is not valid');
}

//remove all
Todo.remove({}).then(results => {
    console.log(results);
});

//return one and remove it 
Todo.findOneAndRemove({}).then();
Todo.findByIdAndRemove('ddd').then();