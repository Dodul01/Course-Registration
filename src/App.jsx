import { useEffect, useState } from 'react';
import './App.css';

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
    </div>
  )
}


export default App;