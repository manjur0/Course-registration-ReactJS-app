
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [credit, setCredit] = useState(0);
  const [prices, setPrice] = useState(0)


  // adding title in bookmarks list
  const handleToAddingCourse = (course) => {
    const newCourse = [...bookmarks, course]
    setBookmarks(newCourse);

  }
  // adding totale course duration
  const handleCredit = courseDueration => {
    setCredit(credit + courseDueration)
  }

  // adding totale course prices
  const handlePrice = (price) => {
    setPrice(prices + price)
  }

  return (
    <div >
      <Header></Header>
      <div className='container mx-auto flex'>
        <Courses
          handleToAddingCourse={handleToAddingCourse}
          handleCredit={handleCredit}
          handlePrice={handlePrice}
        ></Courses>
        <Bookmarks
          bookmarks={bookmarks}
          credit={credit}
          prices={prices}
        ></Bookmarks>
      </div>
    </div>
  )
}

export default App
