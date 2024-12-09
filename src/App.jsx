
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
    const handelAddToBookmark = (blog) => {
      // console.log(blog)
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    };

  return (
    <div className='max-w-7xl mx-auto'>

      <Header></Header>
      <div className="flex p-4 mx-auto space-x-4">
      <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
