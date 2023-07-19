
const {Schema} = require('../connection');
const myschema=new Schema({
    emai:String,
    password:String,
})
module.exports=('user',myschema)