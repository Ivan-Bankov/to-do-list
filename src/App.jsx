import { useEffect, useState } from 'react'
import './styles.css'
import { ToDoForm } from './components/ToDoForm'
import { ToDosList } from './components/ToDosList'

export default function App() {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos))
  }, [toDos])

  function addToDo(title) {
       setToDos((currentToDos) => {
          return [
            ...currentToDos,
            {
              id: crypto.randomUUID(),
              title,
              completed: false
            }
          ]
        })
  }

  function toggleToDo(id, completed) {
    setToDos((currentToDos) => {
      return currentToDos.map((toDo) => {
        if(toDo.id === id) {
          return { ...toDo, completed }
        }

        return ToDo
      })
    })
  }

  function deleteToDo(id) {
    setToDos((currentToDos) => {
      return currentToDos.filter((toDo) => toDo.id !== id)
    })
  }

  return (
    <>
      <ToDoForm onSubmit={addToDo} />
      <h1 className='Header'>To-Do List</h1>
      <ToDosList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  )
}
