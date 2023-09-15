import { useEffect, useState } from 'react';
import Cards from './Components/Cards/Cards'
import './App.css';
import CourseList from './Components/Course List/CourseList';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [courses, setCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [creditLimit, setCreditLimit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => setCourses(result))
  }, [])

  const getSelectedCourse = (course) => {
    const findCourse = myCourses.find(item => item.id === course.id);
    let initialCredit = course.credit;
    let remainingCredit = 0;

    if(!findCourse){
      myCourses.forEach((item)=> initialCredit += item.credit);
      remainingCredit = 20 - initialCredit;
     
      if(initialCredit > 20){
        toast.error('Your credit limit is over!')
      }else{
        setMyCourses([...myCourses, course]);
        setTotalCredit(initialCredit);
        setCreditLimit(remainingCredit);
        setTotalPrice(totalPrice + course.price)
      }
    }else{
      return toast('You have already taken this course.')
    }
  }

  return (
    <div className='max-w-7xl mx-auto'>
      {/* Nav Bar */}
      <nav className='m-2'>
        <h1 className='font-bold text-3xl text-center'>Course Registration</h1>
      </nav>
      {/* Main Section */}
      <main className='flex justify-between lg:flex-row md:flex-col flex-col p-1'>
        <Cards courses={courses} getSelectedCourse={getSelectedCourse}></Cards>
        <Toaster />
        <CourseList myCourses={myCourses} creditLimit={creditLimit} totalCredit={totalCredit} totalPrice={totalPrice}></CourseList>
      </main>
    </div>
  )
}


export default App;