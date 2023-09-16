
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Course from './Components/Course/Course'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleToAddingCourse = course => {
    const newCourse = [...bookmarks, course]
    setBookmarks(newCourse);
  }


  return (
    <div >
      <Header></Header>
      <div className='container mx-auto flex'>
        <Courses handleToAddingCourse={handleToAddingCourse}></Courses>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
