const express = require('express')
const bodyparser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const routes = require('./route/router')




app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))
mongoose.connect('mongodb://127.0.0.1/test',{ useUnifiedTopology: true },(e)=>{
    if(!e){
        console.log("connection success")
    }else {
        console.log('error')
    }
})


app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout',  layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');





app.listen(4040,()=>{
    console.log('server running port 4040')
})

app.use('/',routes)