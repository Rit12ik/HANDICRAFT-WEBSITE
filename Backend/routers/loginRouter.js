const express = require('express');
const Model=require('../models/loginModel')
const router = express.Router();
// const Model = require('/..models/loginModel');
router.post('/email',(req,res)=>{
    res.send('response from login')
})
module.exports=router