import { useState, useEffect } from "react"
import { NewTodoForm} from "./NewTodoForm"
import { Todolist } from "./TodoList.jsx"
import "./styles.css"

export default function App() {

// Hook, Function, Jsx is the format of how pages work


  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return []; // Check if the stored value is null
    return JSON.parse(localValue); // Parse and return the stored data
  });
  

  //we are running this function any values in array that change, so anytime todos array changes
  // we are storing those values
  useEffect(() => {
    console.log("Saving todos:", todos);
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);
  

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        // basically created a new array by doing ...
        // guessing its a way to make the id random for each item and encrypted.
        // title, is the newItem we are passing through, and it is automatically set to false, since item in list isn't auto completed
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false }

      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // need to do it this way so we aren't trying to mutate an immutable object, instead we are just creating a new state
          return { ...todo, completed}
        }
        
        return todo
          
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
  <NewTodoForm onSubmit={addTodo}/>
  <h1 className="header">Todo List</h1>
  <Todolist todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}
