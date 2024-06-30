import axios from "axios";
import React, { useEffect, useState } from "react";
import Blogs from "./Blogs";

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
    <div className="px-36 py-10">
      <h1 className="font-bold text-lg">Sport</h1>

      <div className="mt-6">
        {isLoading ? (
          "loading......."
        ) : (
          <div>
            {blog.length > 0 ? (
              <div>
                {blog.map((blog, index) => {
                  return (
                    <div>
                      <Blogs key={index} Blogs={blog} />
                    </div>
                  );
                })}
              </div>
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
