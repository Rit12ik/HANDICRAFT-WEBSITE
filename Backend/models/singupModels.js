const {Schema} = require('../connection');
const myschema = new Schema({
    name:String,
    email:String,
    contact:String,
    gender:String,
    date:String,
    address:String,
    code:String
})
module.exports=('singup',myschema);