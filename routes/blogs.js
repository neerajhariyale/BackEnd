const express = require("express");
const router = express.Router();

//import controller
const {createBlog} = require("../controllers/createBlog");
const {commentById} = require("../controllers/commentById");
const {deleteBlog} = require("../controllers/deleteBlog");
const {getBlogById} = require("../controllers/getBlogById");
const {likeById} = require("../controllers/likeById");
const {updateBlog} = require("../controllers/updateBlog");


//define API routes
router.post("/createBlog", createBlog);
router.get("/commentById/:id",commentById);
router.delete("/deleteBlog/:id", deleteBlog);
router.get("/getblogById/:id", getBlogById);
router.get("/likeById/:id", likeById);
router.put("/updateBlog/:id",updateBlog);

module.exports = router;