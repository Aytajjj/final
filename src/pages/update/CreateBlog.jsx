import React from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addblog } from "../../redux/action/Blogaction";
import BlogForm from "../../components/BlogForm";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center my-3">Add blog</h1>
      <BlogForm
        onFormSubmited={(product) => {
          dispatch(addblog(product));
          navigate("/dashboard");
        }}
      />
    </div>
  );
};

export default CreateBlog;
