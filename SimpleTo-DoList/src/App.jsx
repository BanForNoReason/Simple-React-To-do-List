import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    //this prevents from the page refreshing everytime we add a newItem
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        // basically created a new array by doing ...
        // guessing its a way to make the id random for each item and encrypted.
        // title, is the newItem we are passing through, and it is automatically set to false, since item in list isn't auto completed
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed: false }

      ]
    })

    //this is done so when you add an item the input field clears to the empty string
    setNewItem("")
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
    //can use a fragment <> and </> to return multiple elements from a component

    //the e stands for event, and we do the "onChange={e => setNewItem(e.target.value)}" which gets the value of our input
    // its setting it as the newItem value, up above
    //there are lots of different event listeners
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      
      <input 
      value={newItem}
      onChange={e => setNewItem(e.target.value)} 
      type="text" 
      id="item"></input>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
    //map is returning an array of elements
    // having the key={todo.id} is essential, if you wanna modify list, delete or edit it, it specifys which one is changing
    //basically the .map created an array, and we are using that to store the items
    //todo.title stores the title value of newItem, and todo.compelted earlier we passed f false
      return (
      <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed} 
          //able to target different todos by this onChange event listener calling to the toggleTodo function
          onChange={e => toggleTodo(todo.id, e.target.checked)}/>
          {todo.title }  
        </label>
      <button onClick={() => deleteTodo(todo.id)} //the () => is calling the function deleteTodo
      className="btn btn-danger">Delete</button>
    </li>
    )
    })}
  </ul>
  </>
  )
}
