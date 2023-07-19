const express = require('express');
const Model=require('../models/singupModels')
const router=express.Router();
router.post('/name',(req,res)=>{
    res.send('response from bakend to singup')
    

})
module.exports=router