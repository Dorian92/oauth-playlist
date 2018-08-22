const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSechema = new Schema({
    username: String,
    googleId: String,
    thumbnail: String
});

const User = mongoose.model('user', userSechema);

module.exports = User;