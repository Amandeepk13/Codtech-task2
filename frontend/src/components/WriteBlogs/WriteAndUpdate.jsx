import React, { useEffect, useState } from "react";
import "./css/writeandupdate.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const WriteAndUpdate = ({titleName}) => {
  const id = useParams().id;
  const history = useNavigate();
  const [Blog, setBlog] = useState({ title: "", desc: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setBlog({...Blog, [name]:value});
  };
  const submit = async () => {
    if(titleName === "Write")
    {
      await axios
    .post("http://localhost:1000/api/v1/post", Blog)
    .then((res) => alert(res.data.message));
    setBlog({ title: "", desc: "" });
    }
    else {
      await axios
    .put(`http://localhost:1000/api/v1/updateBlog/${id}`, Blog)
    .then((res) => alert(res.data.message));
    history(`/blogsPage/${id}`);
    }
    
  };
  useEffect(() => {
     const fetch = async () => {
      if(titleName === "Update") {
      await axios
      .get(`http://localhost:1000/api/v1/getBlog/${id}`)
      .then((res) => setBlog(res.data.data));
     }
    }
      fetch();
  }, [id,titleName]);

    return (
    <div className="container">
      <h3>{titleName} Blogs</h3>
      <div className="d-flex flex-column my-3">
        <input
          className="form-text p-3"
          type="text"
          name="title"
          value={Blog.title}
          placeholder="Title"
          onChange={change}
        />
        <textarea
          className="form-text p-3"
          name="desc"
          id=""
          cols="30"
          rows="5"
          value={Blog.desc}
          placeholder="Description"
          onChange={change}
        ></textarea>
        <div className="mt-4">
          <button className="px-4 py-2 add-blog-btn" onClick={submit} > {titleName} Blog</button>
        </div>
      </div>
    </div>
  );
};

export default WriteAndUpdate;
