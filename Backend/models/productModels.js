const { Schema, model } = require('../connection');
const mySchema = new Schema({
    name: String,
    company: String,
    price: String,
    discription: String,
    material: String,
    image: String
})
module.exports = model('product', mySchema);
