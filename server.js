const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const app = express();

const MONGODB_URL = 'mongodb+srv://raghav:raghav@basic.b6mru.mongodb.net/Basic?retryWrites=true&w=majority'

const routes = require('./routes/api')

mongoose.connect(MONGODB_URL , {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected',()=>{
    console.log("The mongoose database is connected");
})


// Saving Data to our database

//const newBlogPost = new BlogPost(data);  // Instance of the model

// http requests using morgan
app.use(morgan('tiny'))


// Data Parsing 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api',routes)



// Listening to the port
app.listen(5000, () => {
    console.log(`Server is started at http://localhost:${5000}`)
})