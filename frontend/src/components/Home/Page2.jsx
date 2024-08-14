import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./css/Page2.css";

const Page2 = () => {
  const [Blogs, setBlogs] = useState();
  useEffect(() => {
     const fetch = async () => {
      try {
        await axios
        .get("http://localhost:1000/api/v1/getRecentBlogs")
        .then((res) => setBlogs(res.data.data));
      } catch (error) {
        alert("Some error occured.");
      }
     };
     fetch();
  },[]);
  console.log(Blogs);
  return (
    <div className='page container'>
      {Blogs && Blogs.map((item, i) => (
      <div> 
        <Link className='link-front-page' to={`/blogsPage/${item._id}`}>
        <h1>{item.title}</h1>
        </Link>
        <p>{item.desc.slice(0,400)}...</p>
        </div>
        ))}
    </div>
  );
};

export default Page2