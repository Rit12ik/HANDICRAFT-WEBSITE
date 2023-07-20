const { Schema, model } = require('../connection');
const mySchema = new Schema({
    name: String,
    price: Number,
    discription: String,
    category: String,
    material: String,
    image: String
})
module.exports = model('product', mySchema);
