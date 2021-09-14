const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates a new schema which is called "schema" since it will be the default for our products
const schema = new Schema({
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('Product', schema)