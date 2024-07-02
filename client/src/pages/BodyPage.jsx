import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BodyPage = () => {
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
    <div className="text-start flex flex-col items-start justify-start">
      <div className=" bg-white px-4 md:px-4 lg:px-36 py-10 ">
        <h2 className="font-bold text-2xl mb-4 block text-center">
          {blog.name}
        </h2>
        {isLoading ? (
          "Loading...."
        ) : (
          <div className="space-y-6">
            <div>
              <img
                src={blog.image}
                alt=""
                className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-64"
              />
            </div>
            <div className="space-y-6">
              <h1 className="font-semibold text-2xl mb-4 block text-center">
                {blog.description}
              </h1>
              <p> {blog.body} </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default BodyPage;
