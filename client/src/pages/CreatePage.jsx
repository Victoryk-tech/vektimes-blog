import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const saveArticle = async (e) => {
    e.preventDefault();
    if (name === "" || image === "" || body === "" || description === "") {
      alert("please fill the form");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3000/api/blog", {
        name: name,
        body: body,
        description: description,
        image: image,
      });

      toast.success(`save ${response.data.name} successfully`);
      setIsLoading(false);
      Navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log("error");
      setIsLoading(false);
    }
  };
  return (
    <div className="px-36 py-10 ">
      <form
        action="form"
        onSubmit={saveArticle}
        className="flex flex-col items-center space-y-6"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Article body"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        {!isLoading && <button>submit</button>}
      </form>
    </div>
  );
};

export default CreatePage;
