import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit,FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./css/BlogsPage.css";

const BlogsPage = () => {
  const id = useParams().id;
  const [Blog, setBlog] = useState();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:1000/api/v1/getBlog/${id}`)
        .then((res) => setBlog(res.data.data));
    };
    fetch();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:1000/api/v1/deleteBlog/${id}`);
      window.location.href = "/blogs";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page container">
      <div className="my-3">
        {Blog && (
          <>
            <Link
              to={`/updateBlog/${Blog._id}`}
              className="d-flex justify-content-end edit"
            >
              <FaEdit />
            </Link>
            <button
              className="d-flex justify-content-end delete"
              onClick={handleDelete}
            >
              <FaTrash />
            </button>
            <h1 className="mt-2">{Blog.title}</h1>
            <p className="blogsPagep mt-3">{Blog.desc}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
