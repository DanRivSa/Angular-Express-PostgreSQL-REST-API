const express = require('express');
const cors = require('cors');
const app = express();

//server configuration
app.set('port',process.env.PORT||3000);
app.set('name','backend_api');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:'localhost:4200'}));

//routes
app.use(require('./routers/routes.js'));

//server initialization
app.listen(app.get('port'),(req,res)=>
{
    console.log('name: ',app.get('name'));
    console.log('port',app.get('port'));
});