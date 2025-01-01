import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)) 
  // votes is an array that contains the number of votes for each anecdote
  // this array is filled with zeros with the prototype fill method

  // EXAMPLES with Math.floor() and Math.random() 

  /* console.log(Math.floor(Math.random() * 10)) returns a random integer from 0 to 9
     console.log(Math.floor(Math.random() * 11)) returns a random integer from 0 to 10
     console.log(Math.floor(Math.random() * 100)) return a random integer from 0 to 100
     console.log(Math.floor(Math.random() * 10) + 1) return a random integer from 0 to 10
  */


  const setToSelected = () => {
    // random integer between 0 and 7 (because there are 8 anecdotes)
    const updateSelected = Math.floor(Math.random() * 8) 
    console.log(updateSelected)
    setSelected(updateSelected)
  }
    
  /*  
      const points = [1, 2, 3, 4, 5, 6, 7, 8]
      const copy = [...points]

      console.log(copy)
      // increment the value in position 2 by one
      copy[2] += 1  
      console.log(copy) // [1, 2, 4, 4, 5, 6, 7, 8]

      // how to create a zero-filled array of the desired length
      // Array.prototype.fill()
      console.log(copy.fill(0)) // [0,0,0,0] 

  */

  const setToVotes = () => {
    const updateVotes = [...votes] // create a copy of the votes array
    updateVotes[selected] = updateVotes[selected] + 1
    console.log("votes", updateVotes)
    setVotes(updateVotes)
  }

  let maximum = 0
  const theMostVotes = () => {
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > votes[maximum]) {
        maximum = i // current index of the votes array
      }
    }
    console.log(maximum)
    return anecdotes[maximum] // returns the anecdote at that index
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      <button onClick = {setToSelected}>next anecdote</button>
      <p>has {votes[selected]} votes</p>
      <button onClick = {setToVotes}>votes</button>
      <h1>Anecdote with most votes</h1>
      <p>{theMostVotes()}</p>
    </div>
  )
}

export default App