const express = require('express');
const router=express.Router();
const Model=require('../models/userModels')
router.post('/add',(req,res)=>{
    // res.send('respone from user router')
    console.log(req.body)
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        res.status(500).json(err)
        
    });
})
module.exports=router;