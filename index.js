const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
const serialiser = require('node-serialize')
const mongodb = require('mongodb');
const mongoose = require('mongoose')
const blogsRoute = require('./routes/blog');
const cors = require('cors')
app.use(bodyParser.json())
app.use('/blog',blogsRoute);
app.use(cors())
// DB CONNECTION
mongoose.connect("mongodb+srv://root:toor@pizza.uja22.mongodb.net/Blog?retryWrites=true&w=majority",{ useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true
},()=>{
    console.log("Connected to db");
})


app.get('/', (req, res) => res.send('Hello World!'))

// your code goes here

// here

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;