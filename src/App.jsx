/* I did a lot of modifications in this one, I removed the Header component and I called the
Total component inside the Content component because i wanted the total of exercises to be printed
under the final part of each course  
*/

/* remove Header component because it's in the Content component with the <h3> 
const Header = ({courses}) => {
    console.log(courses)
    return <h2>{courses}</h2>
  }
*/
  
  const Content = ({courses}) => {
    console.log(courses)
    // I add this if because if not an error appears in the console
    // !courses. This checks if courses is undefined, null, or any other falsy value.
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
  
  const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
    return (
      <div>
        <h1>Web development curriculum</h1>
        <Course courses={courses} />
      </div>
    )
  }
  
  export default App