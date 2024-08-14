import React from 'react'
import "./App.css";
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import WriteBlogs from './pages/WriteBlogs';
import Blogs from './pages/Blogs';
import BlogsPage from './components/BlogsPage/BlogsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/writeBlogs" element={<WriteBlogs title={"Write"}/>} />
        <Route path="/blogsPage/:id" element={<BlogsPage />} />
        <Route path="/updateBlog/:id" element={<WriteBlogs title={"Update"} />} />
      </Routes>
    </Router>
  );
}

export default App