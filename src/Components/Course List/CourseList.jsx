import PropTypes from 'prop-types';

function CourseList({ myCourses, creditLimit, totalCredit, totalPrice }) {

  return (
    <div className="lg:w-1/4 w-full mt-2">
      <div className="bg-white p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-4 text-[#2F80ED]">Credit Hour Remaining {creditLimit} hr</h2>
        <hr />
        <h2 className="text-lg font-semibold mt-2">Course Name</h2>
        <ul className="mb-4">
          {myCourses.map((course, idx) => <li key={course.id} className="text-[#777676] text-base my-1">{idx + 1} {course.courseName}</li>)}
        </ul>
        <hr />
        <h2 className="text-base font-light my-4 text-[#777676]">Total Credit Hour : {totalCredit} hr</h2>
        <hr />
        <h2 className="my-4 text-lg font-semibold text-[#777676]">Total Price : {totalPrice} USD</h2>
      </div>
    </div>
  )
}

CourseList.propTypes = {
  myCourses: PropTypes.array.isRequired,
  creditLimit: PropTypes.number.isRequired,
  totalCredit: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired
}

export default CourseList;