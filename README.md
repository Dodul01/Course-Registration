# Course-Registration

### Features
* User can add courses
* User has a limit for course selection
* User Can't select same course multiple times
### State Managment

1. **courses** :  I have created a course state to store all JSON data and share the state with cards component and then map on this state share the single object course.
2. **myCourses** : myCourses state is to store all the selected courses and help calculate the credit and price. 
3. **creditLimit** : creditLimit state is used to show how many credits are available. 
4. **totalCredit**: when students select a course total credit sate update its value based on previus and current credit sum.
5. **totalPrice**: In total Price I take the current course price and previus selected course price and show it to the browser. 