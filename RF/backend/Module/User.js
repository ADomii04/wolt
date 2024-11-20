const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : {type:String, unique:true, email:true},
    password : String,
    deliveryAdress : String,
    phoneNumber: String,
});

const UserModul = mongoose.model('User', userSchema);

module.exports = UserModul;
