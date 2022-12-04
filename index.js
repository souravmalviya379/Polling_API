
const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes'));

app.listen(port, (err)=>{
    if(err){
        console.log('Cannot connect to server !!!');
        return;
    }
    console.log('Server running at port : ',port);
});