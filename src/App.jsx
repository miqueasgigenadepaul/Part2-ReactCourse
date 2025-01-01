import {useState} from 'react'

const Button = (props) => {
  return(
    <div>
      <button onClick = {props.handleClick}>{props.text}</button>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  
  return (
    <div>
      <table>
        <tbody>
          <tr><StatisticLine text = "Good" value = {good} /></tr>
          <tr><StatisticLine text = "Neutral" value = {neutral} /></tr>
          <tr><StatisticLine text = "Bad" value = {bad} /></tr>
          <tr><StatisticLine text = "All" value = {total} /></tr>
          <tr><StatisticLine text = "Average" value = {average} /></tr>
          <tr><StatisticLine text = "Positive" value = {positive} /></tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad 
  const average = (good * 1 + neutral * 0 + bad * (-1)) / total
  const positive = good / total 

    if (total === 0) {
      return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick = {() => setGood(good + 1)} text = "good"/>
        <Button handleClick = {() => setNeutral(neutral + 1)} text = "neutral"/>
        <Button handleClick = {() => setBad(bad + 1)} text = "bad" />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div> 
      )
    }

    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick = {() => setGood(good + 1)} text = "good"/>
        <Button handleClick = {() => setNeutral(neutral + 1)} text = "neutral"/>
        <Button handleClick = {() => setBad(bad + 1)} text = "bad" />

        <h1>statistics</h1>
        <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        total = {total}
        average = {average}
        positive = {positive}
        />
      </div>
    )   
}

  export default App