const path = require('path');
var express = require('express')

const publicPath = path.join(__dirname, '../public')
var app = express();
var port = process.env.PORT||3000;


app.use(express.static(publicPath));

app.listen(port, ()=>{
    console.log(`Started on port ${port}`)
})