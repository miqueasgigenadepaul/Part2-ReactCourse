const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }
  
  const Content = ({course}) => {
    console.log(course)
    return (
      <div>
        {course.parts.map(part => 
          <div key = {part.id}>
            {part.name} {part.exercises}
          </div>)}
      </div>
    )
  }
  
  const Total = ({course}) => {
    let sum = 0 
    for (let i = 0; i < course.parts.length; i++) {
      sum = sum + course.parts[i].exercises
    }
    return <p><b>total of {sum} exercises</b></p>
  }
  
  const Course = ({course}) => {
    console.log(course)
    return (
      <div>
        <Header course = {course.name}/>
        <Content course = {course}/>
        <Total course = {course}/>
      </div>
    )
  }
  
  const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
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
    }
  
    return <Course course={course} />
  }
  
  export default App