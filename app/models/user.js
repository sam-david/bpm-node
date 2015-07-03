var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
    spotify: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    createdAt: {type: Date, default: Date.now}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
