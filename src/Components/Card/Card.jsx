import PropTypes from 'prop-types';

function Card({ course, getSelectedCourse }) {
  const { courseName, courseDescription, courseThumbnail, credit, price } = course;

  return (
    <div className='bg-white flex justify-center p-2 m-2 rounded-xl w-[300px]'>
      <div>
        <img src={courseThumbnail} alt={`Thumbnail of ${courseName}`} />
        <h3 className='font-semibold text-lg my-1'>{courseName}</h3>
        <p className='text-[#777676] mb-2'>{courseDescription}</p>
        <div className='flex items-center justify-between mb-2 text-[#777676]'>
          <p>Price: ${price}</p>
          <p>Credit: {credit}hr</p>
        </div>
        <button onClick={()=> getSelectedCourse(course)} className='bg-blue-600 text-white w-full rounded-lg p-2'>Select</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  course: PropTypes.object.isRequired,
  getSelectedCourse: PropTypes.func.isRequired
}

export default Card;