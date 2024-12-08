
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className="flex p-4 mx-auto space-x-4">
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
