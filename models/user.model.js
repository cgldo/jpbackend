// user model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//const scoreSchema = new Schema({ name: String, score: Number});
const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    score:{} },
    {collection : 'user'})

const User = mongoose.model('User', userSchema)
module.exports = User