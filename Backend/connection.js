const mongoose = require('mongoose');
const url ='mongodb+srv://ritikrathour3456:ritik123@cluster0.kdqerws.mongodb.net/mymongoose?retryWrites=true&w=majority'
mongoose.connect(url)
.then((result) => {
    console.log('database connected successfully');
    
}).catch((err) => {
    console.log(err);
    
});
module.exports=mongoose;