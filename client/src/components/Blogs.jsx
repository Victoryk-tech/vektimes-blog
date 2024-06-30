import React from "react";
import { Link } from "react-router-dom";
const Blogs = ({ Blogs }) => {
  const { name, description, body, image, id } = Blogs;
  return (
    <div className="grid grid-cols-3 items-start justify-between py-6 space-x-10">
      <div className="flex flex-col items-start justify-start">
        <img src={image} alt="" className="w-52 h-48" />
        <div className="flex flex-col justify-start space-y-2">
          <h2 className="font-bold ">{name}</h2>
          <h1 className="font-semibold text-lg">{description}</h1>
          <div className="flex items-start justify-start text-center space-x-6">
            <h1>date</h1>
            <p>time read</p>
          </div>
          <div className="flex items-start justify-start text-center space-x-6">
            <Link to={`/Edit/ ${Blogs._id}`}>
              <h1>Edit</h1>
            </Link>
            <Link to={`/Edit/ ${id}`}>
              <h1>Delete</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-500">note</div>
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
      </div>
    </div>
  );
};

export default Blogs;
