const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");

//get all blogs
const getBlogs = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.find({});

    res.status(200).json(blog);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//blog by id
const getBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const createBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    console.log(blog);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
const updateBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndUpdate(id, req.body);
    if (!blog) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedBlog = await Blog.findById(id);
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
const deleteBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404);
      res.status(500);
      throw new Error(`cannot find any product with ID ${id}`);
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
module.exports = { getBlogs, getBlog, createBlog, updateBlog, deleteBlog };
