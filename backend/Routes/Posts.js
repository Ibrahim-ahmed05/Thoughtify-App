const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

// POST route: Create a new post
router.post("/", async (req, res) => {
    const post = req.body;  // Get the post data from the request body
    try {
        const newPost = await Posts.create(post);  // Create a new post using the model
        res.json(newPost);  // Send the created post back as a response
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET route: Fetch all posts
router.get('/', async (req, res) => {
    try {
        const postList = await Posts.findAll(); 
         // Use findAll() on the Posts model
        res.json(postList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/byId/:id', async(req,res)=>{
    const postid= req.params.id;
    const post= await Posts.findByPk(postid);
    res.json(post);
})
// PUT route: Update an existing post
router.put('/:id', async (req, res) => {
    const postId = req.params.id;  // Get the post ID from the request URL
    const updatedPost = req.body;  // Get the updated data from the request body
    try {
        const post = await Posts.findByPk(postId);  // Find the post by its primary key (ID)
        if (post) {
            await post.update(updatedPost);  // Update the post fields with the new data
            res.json(post);  // Send the updated post back as a response
        } else {
            res.status(404).json({ error: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.delete('/:id',async(req,res)=>{
    const postId= req.params.id;
    try{
        const post= await Posts.findByPk(postId);
        if(post){
            await post.destroy();
        }
        else
        {
            res.status(404).json({ error: "Post not found" });

        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }

})
module.exports = router;
