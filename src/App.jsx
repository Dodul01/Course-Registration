import { useEffect, useState } from 'react';
import Cards from './Components/Cards/Cards'
import './App.css';
import CourseList from './Components/Course List/CourseList';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    fetch('./data.json')
    .then(response => response.json())
    .then(result => setCourses(result))
  },[])

  return (
    <div className='max-w-7xl mx-auto'>
      {/* Nav Bar */}
      <nav className='m-2'>
        <h1 className='font-bold text-3xl text-center'>Course Registration</h1>
      </nav>
      {/* Main Section */}
      <main className='flex justify-between lg:flex-row md:flex-col flex-col p-1'>
        <Cards courses={courses}></Cards>
        <CourseList></CourseList>
      </main>
    </div>
  )
}


export default App;