 const express = require('express');
 const path= require('path');
 const app=express();
 const port=2000;
 const userRouter = require('./routers/userRouter');
 const productRouters=require('./routers/productRouters')
 const loginRouter = require('./routers/loginRouter')
 const singupRouter=require('./routers/singupRouter')
 const cors=express('cors')
 app.use(cors)

 app.use(express.json())
 
 app.get('/',(req,res)=>{
    res.send('response from backend')

 })
 app.use('/singup',singupRouter)
 app.use('/user',userRouter)
 app.use('/product',productRouters)
 app.use('/login',loginRouter)


 app.get('/add',(req,res)=>{
    res.send('response from backend to add')
 })
 app.get('/delete',(req,res)=>{
    res.send('response from backend to delete')
 })
 app.get('/hum',(req,res)=>{
    res.sendFile(path.join(__dirname,'hum.html'))
 })

 app.listen(port, ()=>{
    console.log('server started');
 })