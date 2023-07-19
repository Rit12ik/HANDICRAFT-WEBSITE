const express = require('express');
const router = express.Router();
const Model=require('../models/productModels')
router.post('/add',(req,res)=>{
    console.log(req.body);
    new Model(req.body).save()
.then((result) => {
    res.json(result)
    
}).catch((err) => {
    res.status(500).json(err);
    
});
});
router.get('/getall',(req,res)=>{
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
        
    });
})
router.get('/getbyemail/:email',(req,res)=>{
    console.log(req.params.email);
    Model.find({email:req.params.email})
    .then((result) => {
    res.json(result);
        
    }).catch((err) => {
        res.status(500).json(err);
        
    });

})
router.get('/getbyid/:id',(req,res)=>{
   console.log(req.params.id);
   Model.findById(req.params.id)
   .then((result) => {
    res.json(result)
    
   }).catch((err) => {
    res.status(500).json(err)
    
   });
    
});
router.delete("/delete/:id",(req,res)=>{
    console.log(req.params.id);
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        
        res.json(result)
    }).catch((err) => {
        
        res.status(500).json(err)
    });
})
router.put("/Update/:id",(req,res)=>{
    console.log(req.params.id);
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        
        res.json(result)
    }).catch((err) => {
        
        res.status(500).json(err)
    });
})

module.exports=router