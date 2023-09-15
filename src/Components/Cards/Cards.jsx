import PropTypes from 'prop-types';
import Card from '../Card/Card';

function Cards({ courses, getSelectedCourse }) {

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:w-3/4 w-full'>
      {courses.map((course)=> <Card key={course.id} course={course} getSelectedCourse={getSelectedCourse}></Card>)}
    </div>
  )
}

Cards.propTypes = {
  courses: PropTypes.array.isRequired,
  getSelectedCourse: PropTypes.func.isRequired
}

export default Cards;