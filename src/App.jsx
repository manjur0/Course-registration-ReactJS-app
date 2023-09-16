import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [credit, setCredit] = useState(0);
  const [prices, setPrice] = useState(0)
  // const [remaining, setRemaining] = useState(0);
  // const [totalPrice, setTotalPrice]= useState(0)



  // adding title in bookmarks list
  const handleToAddingCourse = (course) => {

    const isAdded = bookmarks.find((item) => item.id === course.id);

    // let totalDuration = course.credit;

    if (isAdded) {
      toast('You already added this course')
    }
    else {
      // credit.forEach((duration) => {
      //   totalDuration = totalDuration + duration.credit;
      // })
      // const totalRemaining = 20 - totalDuration;
      // setTotalPrice(totalDuration);
      // setRemaining(totalRemaining);
      setBookmarks([...bookmarks, course])
    }


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
          // remaining={remaining}
          // totalPrice={totalPrice}
        ></Bookmarks>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
