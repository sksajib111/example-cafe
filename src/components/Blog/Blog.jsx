import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handelAddToBookmark, handelMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img
        className="w-full rounded-lg mb-12"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between align-middle mb-6">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            className="ml-2 text-red-600 text-2xl"
            onClick={() => handelAddToBookmark(blog)}
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="mb-4 text-gray-400 text-xl">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))};
      </p>
      <button
        onClick={() => handelMarkAsRead(reading_time)}
        className="mb-10 underline text-purple-900"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelAddToBookmark: PropTypes.func,
  handelMarkAsRead: PropTypes.func,
};

export default Blog;
