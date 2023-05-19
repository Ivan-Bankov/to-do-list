import { ToDoItem } from "./ToDoItem"

export function ToDosList({toDos, toggleToDo, deleteToDo}) {

    return (
        <ul className="list">
        {toDos.length === 0 && "No To-Dos"}
        {toDos.map((toDo) => {
          return (
            <ToDoItem {...toDo} key={toDo.id} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
          )
        })}
      </ul>
    )
}