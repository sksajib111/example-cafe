import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  // Bookmarks status saving state
  const [bookmarks, setBookmarks] = useState([]);
  // Reading time saving state
  const [readingTime, setReadingTime] = useState(0);

  // Bookmark adding function
  const handelAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  // Reading time adding function
  const handelMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    // remove reading book
    const remainingBookMark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMark);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="flex p-4 mx-auto space-x-4">
        <Blogs
          handelAddToBookmark={handelAddToBookmark}
          handelMarkAsRead={handelMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
};

export default App;
