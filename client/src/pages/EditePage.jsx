import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
const EditePage = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();
  const [blog, setBlog] = useState({
    name: "",
    description: "",
    image: "",
    body: "",
  });
  const getBlog = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/api/blog/${id}`);
      setBlog({
        name: response.data.name,
        description: response.data.description,
        image: response.data.image,
        body: response.data.body,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const updateBlog = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`http://localhost:3000/api/blog/${id}`, blog);
      toast.success("You have updated this Blog post successfully");
      Navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);
  return (
    <div className=" lg:max-w-lg md:max-w-md bg-white shadow-lg mx-auto px-4 py-8 md:p-7 rounded mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Update a Product - {blog.name}
      </h2>
      {isLoading ? (
        "Loading...."
      ) : (
        <>
          <form onSubmit={updateBlog}>
            <div className="space-y-2">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={blog.name}
                  onChange={(e) => setBlog({ ...blog, name: e.target.value })}
                  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label>description</label>
                <input
                  type="textr"
                  value={blog.description}
                  onChange={(e) =>
                    setBlog({ ...blog, description: e.target.value })
                  }
                  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                  placeholder="Enter Quantity"
                />
              </div>
              <div>
                <label>body</label>
                <input
                  type="text"
                  value={blog.body}
                  onChange={(e) => setBlog({ ...blog, body: e.target.value })}
                  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                  placeholder="Enter Price"
                />
              </div>
              <div>
                <label>Image URL</label>
                <input
                  type="text"
                  value={blog.image}
                  onChange={(e) => setBlog({ ...blog, image: e.target.value })}
                  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                  placeholder="Enter Image URL"
                />
              </div>
              <div>
                {!isLoading && (
                  <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
                    Update
                  </button>
                )}
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default EditePage;
