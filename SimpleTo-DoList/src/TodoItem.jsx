export function TodoItem({ completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li>
        <label>
          <input type="checkbox" checked={completed} 
          //able to target different todos by this onChange event listener calling to the toggleTodo function
          onChange={e => toggleTodo(id, e.target.checked)}/>
          {title }  
        </label>
      <button 
      onClick={() => deleteTodo(id)} //the () => is calling the function deleteTodo
      className="btn btn-danger">Delete</button>
    </li>
    )
}