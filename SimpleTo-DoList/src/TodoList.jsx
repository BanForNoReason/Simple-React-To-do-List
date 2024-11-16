import { TodoItem } from "./TodoItem"

export function Todolist ({ todos, toggleTodo, deleteTodo }) {
return (
    <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
    //map is returning an array of elements
    // having the key={todo.id} is essential, if you wanna modify list, delete or edit it, it specifys which one is changing
    //basically the .map created an array, and we are using that to store the items
    //todo.title stores the title value of newItem, and todo.compelted earlier we passed f false
      return (
        <TodoItem 
        // instead of doing all of thisid={todo.id} completed={todo.completed} title={todo.title}, you can do {...todo}
        {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    )
    })}
  </ul>
  )
}