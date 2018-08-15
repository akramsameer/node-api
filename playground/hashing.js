const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

 var pass = '123abؤc';

bcrypt.genSalt(10, (err , salt)=> {
    bcrypt.hash(pass , salt , (err , hash)=> {
        console.log(hash);
    });
});

var hashedPass = '$2a$10$Za8HbU0DpRxWCe9u2aSvd.dAh7wqcze78Aycm0ZUEJ6LYCW8Ajg.6';

bcrypt.compare(pass , hashedPass , (err , success) => {
    console.log(success);
});

// var data = {
//     id : 10
// };

// var token  = jwt.sign(data , '123abc');
// console.log(token);

// var decoded = jwt.verify(token , '123abc');
// console.log('decoded ' , decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id:4
// };

// var token = {
//     data,
//     hash:SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// man in the middle will do, but he doesn't have token
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed!');
// }else{
//     console.log('Data was changed, dont trust');
// }