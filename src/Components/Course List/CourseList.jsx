function CourseList(){
  return(
    <div className="lg:w-1/4 w-full mt-2">
      <div className="bg-white p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-4 text-[#2F80ED]">Credit Hour Remaining 20 hr</h2>
        <hr />
        <h2 className="text-lg font-semibold mt-2">Course Name</h2>
        <ul className="mb-4">
          <li className="text-[#777676] text-base my-1">1 Introduction to c programming </li>
          <li className="text-[#777676] text-base my-1">2 Introduction to C++ for DSA</li>
          <li className="text-[#777676] text-base my-1">3 Software Engineering</li>
        </ul>
        <hr />
        <h2 className="text-base font-light my-4 text-[#777676]">Total Credit Hour : 13</h2>
        <hr />
        <h2 className="my-4 text-lg font-semibold text-[#777676]">Total Price : 48000 USD</h2>
      </div>
    </div>
  )
}

export default CourseList;