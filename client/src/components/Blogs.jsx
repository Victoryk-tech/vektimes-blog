import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const Blogs = ({ Blogs, getBlog }) => {
  const { name, description, body, image, id } = Blogs;

  const deleteBlog = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure you want to delete this blog post?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/api/blog/${id}`
        );
        toast.success("delete a blog successfully");
        getBlog();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div className="">
      <div className="flex flex-col items-start justify-start">
        <Link to={`/body/${Blogs._id}`}>
          <img src={image} alt="" className="w-80 h-56" />
        </Link>
        <div className="flex flex-col justify-start space-y-2">
          <h2 className="font-bold ">{name}</h2>
          <h1 className="font-semibold text-lg">{description}</h1>
          <div className="flex items-start justify-start text-center space-x-6">
            <h1>date</h1>
            <p>time read</p>
          </div>
          <div className="flex items-start justify-start text-center space-x-6">
            <Link to={`/Edit/${Blogs._id}`}>
              <h1>Edit</h1>
            </Link>
            <button onClick={() => deleteBlog(Blogs._id)}>Delete</button>
          </div>
        </div>
      </div>
      {/* <div className="bg-slate-500">note</div>
      <div className="grid grid-rows-3 justify-start items-start">
        <div className="flex justify-center items-center space-x-6">
          <img src={image} alt="" className="w-24 h-24" />
          <h1 className="font-semibold text-lg">{description}</h1>
        </div>
        <div className="flex justify-center items-center space-x-6  border-black border-t-[1px] border-b-[1px] p-4">
          <img src={image} alt="" className="w-24 h-24" />
          <h1 className="font-semibold text-lg">{description}</h1>
        </div>
        <div className="flex justify-center items-center space-x-6">
          <img src={image} alt="" className="w-24 h-24" />
          <h1 className="font-semibold text-lg">{description}</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Blogs;
