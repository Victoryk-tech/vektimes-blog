const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blogController");

router.get("/", getBlogs);

//get single product
router.get("/:id", getBlog);

//put
router.post("/", createBlog);

// update a product
router.put("/:id", updateBlog);

// delete a product

router.delete("/:id", deleteBlog);

module.exports = router;
