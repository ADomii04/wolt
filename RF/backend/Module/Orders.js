const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    userId : {type: mongoose.Schema.Types.ObjectId,ref: 'User',},
    name : String,
    price : String
});

const OrdersModul = mongoose.model('Orders', ordersSchema);

module.exports = OrdersModul;