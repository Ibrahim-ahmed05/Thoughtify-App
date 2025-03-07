const express = require('express');
const router = express.Router();
const { Users } = require('../models');

// POST route: Create a new post
router.post("/", async (req, res) => {
    const user = req.body;  // Get the post data from the request body
    try {
        const newuser = await Users.create(user);  // Create a new post using the model
        res.json(newuser);  // Send the created post back as a response
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// POST route: Login a user
router.post("/login", async (req, res) => {
    const { email, password } = req.body; // Get email and password from request body

    try {
        // Find user in the database
        const user = await Users.findOne({ where: { email } });

        // Check if user exists and password matches
        if (user && user.password === password) {
            return res.json({ success: true, message: "Login successful",name:user.name, user });
        } else {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;