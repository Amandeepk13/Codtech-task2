const router = require("express").Router();
const blogs = require("../models/blogs");

//post
router.post("/post", async (req,res) => {
    try {
        const { title, desc} = req.body;
        const newPost = new blogs({title, desc});
        await newPost
        .save()
        .then(() => res.status(200).json({message: "Data saved successfully"}));
    } catch (error) {
        res.status(400).json({message: "Some error has occured."});
    }
});

//get
router.get("/getAll", async (req,res) => {
    try {
        const data = await blogs.find().sort({ createdAt: -1 });
        res.status(200).json({data: data });
    } catch (error) {
        res.status(400).json({message: "Some error has occured."});
    }
});

//get recent blogs
router.get("/getRecentBlogs", async (req,res) => {
    try {
        const data = await blogs.find().sort({ createdAt: -1 }).limit(3);
        res.status(200).json({data: data });
    } catch (error) {
        res.status(400).json({message: "Some error has occured."});
    }
});

//get blog by id
router.get("/getBlog/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const data = await blogs.findById(id);
        res.status(200).json({data: data });
    } catch (error) {
        res.status(400).json({message: "Some error has occured."});
    }
});

//update by id 
router.put("/updateBlog/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const { title, desc} = req.body;
        await blogs.findByIdAndUpdate(id, { title, desc} );
        res.status(200).json({message: "Data updated successfully" });
    } catch (error) {
        res.status(400).json({message: "Some error has occured."});
    }
});

// delete blog by id
router.delete("/deleteBlog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await blogs.findByIdAndDelete(id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Some error has occured." });
  }
});
module.exports = router;