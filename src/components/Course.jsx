/* remove Header component because it's in the Content component with the <h3>
const Header = ({courses}) => {
    console.log(courses)
    return <h2>{courses}</h2>
  }
*/
const Content = ({courses}) => {
    console.log(courses)
    if (!courses || courses.length === 0) {
      return <div>No courses</div>
    }
    return (
      <div>
        {courses.map(course => // access the courses id to see the name and exercises of each part 
          <div key = {course.id}>
            <h3>{course.name}</h3>
            {course.parts.map(part =>
              <div key ={part.id}>
                {part.name} {part.exercises}
              </div> 
            )}
            <Total course = {course}/> {/*I pass ONLY course to print the total of exercises of THAT course*/}
          </div>)}
      </div>
    )
  }
  
  const Total = ({course}) => { // only the prop course because if I put courses it would take all the courses
    console.log(course)
    if (!course || !course.parts || course.parts.length === 0){
      return <div>No courses</div>
    }
    let total = course.parts.reduce((sum,order) => sum + order.exercises, 0)
    return (
      <div>
        <p><b>total of {total} exercises</b></p>     
      </div>
    )
  }
  
  const Course = ({courses}) => {
    if (!courses || courses.length === 0){
      return <div>No courses</div>
    }
    return (
      <div>
        <Content courses = {courses}/>
      </div>
    )
  }

  export default Course
  