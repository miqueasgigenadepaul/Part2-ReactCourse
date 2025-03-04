import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      if (Array.isArray(initialPersons)) {
        setPersons(initialPersons)
      } else {
        console.error('La respuesta del servidor no es un array:', initialPersons)
        setPersons([])
      }
    }).catch(error => {
      console.error('Error al obtener Personas:', error)
      setPersons([]) 
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phone: newPhone,
    }

    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewPhone('')
    })
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key = {person.id}>{person.name} {person.phone}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
