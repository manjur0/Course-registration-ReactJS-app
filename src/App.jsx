
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Course from './Components/Course/Course'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {


  return (
    <div >
      <Header></Header>
      <div className='container mx-auto flex'>
        <Courses ></Courses>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
