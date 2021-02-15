const mongoose = require('mongoose')


// Schema for mongoose
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title:String,
    body: String ,
    date : {
        type:String,
        default:Date.now()
    }
})

// To create models for the mongoose database

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

module.exports = BlogPost