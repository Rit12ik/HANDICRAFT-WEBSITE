const{Schema}=require('../connection')
const myschema=new Schema({
    email:String,
    password:String

})
module.exports=('login',myschema)