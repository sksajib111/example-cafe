import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handelAddToBookmark, handelMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3 m-2">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handelAddToBookmark={handelAddToBookmark}
          handelMarkAsRead={handelMarkAsRead}
        ></Blog>
      ))};
    </div>
  );
};

Blogs.propTypes = {
  handelAddToBookmark: PropTypes.func,
  handelMarkAsRead: PropTypes.func,
};

export default Blogs;
