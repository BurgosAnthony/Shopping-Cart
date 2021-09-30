const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates a new schema which is called "schema" since it will be the default for our products
const schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    cart: { type: Object, required: true },
    address: { type: String, required: true },
    name: { type: String, required: true },
    paymentId: { type: String, required: true }
});

module.exports = mongoose.model('Order', schema)