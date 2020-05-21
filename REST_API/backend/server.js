const express = require('express');
const app = express();
const cors = require('cors'); 

//serever configuartion
app.set('port',process.env.PORT || 3000);
app.set('name','Express api');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:'http://localhost:4200'})); //communicate with angular local server
//routes
app.use(require('./routes/index.routes'));

//init
app.listen(app.get('port'),(req,res)=>
{
    console.log('app-name: ',app.get('name'));
    console.log('server on port',app.get('port'));
});