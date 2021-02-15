const express = require('express');
const router = express.Router();

const BlogPost = require('../models/blogPost')

router.get('/', (req,res) => {
    BlogPost.find({ })
        .then((data) => {
            console.log('Data: ', data);
                res.json(data);
        })
        .catch((error) => {

        })


})
router.post('/save', (req,res) => {
    console.log('Body:', req.body);
    const data = req.body;
    const newBlogPost = new BlogPost(data);

    // Saving the data

    newBlogPost.save((error)=>{
        if(error){
            res.status(500).json({ msg : "Sorry not able to save the data "})
        }
        else{
            res.json({
            msg:'We recieved your message !!!!!'
    })
        }
    });

})
router.get('/name' , (req,res) => {
    const data = {
        username:'grahil',
        age:20
    }
    res.send(data);
})


module.exports = router