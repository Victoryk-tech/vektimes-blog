import axios from "axios";
import React, { useEffect, useState } from "react";
import Blogs from "./Blogs";
import VITE_BACKEND_URL from "../App";
const Sport = () => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getBlog = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/api/blog");
      console.log(response.data);
      setBlog(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getBlog();
  }, []);
  return (
    <div className=" px-4 lg:px-36 py-10">
      <h1 className="font-bold text-lg">Sport</h1>

      <div className="mt-6">
        {isLoading ? (
          "loading......."
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:items-start justify-between py-6 px-4 md:px-0  w-full">
            {blog.length > 0 ? (
              blog.map((blog, index) => {
                return (
                  <div className="">
                    <Blogs key={index} Blogs={blog} getBlog={getBlog} />
                  </div>
                );
              })
            ) : (
              <div>There is no message</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sport;
