import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    //the e stands for event, and we do the "onChange={e => setNewItem(e.target.value)}" which gets the value of our input
    // its setting it as the newItem value, up above
    //there are lots of different event listeners

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        //this prevents from the page refreshing everytime we add a newItem
        e.preventDefault()
        if (newItem === "") return
    
        onSubmit(newItem)
    
        //this is done so when you add an item the input field clears to the empty string
        setNewItem("")
      }

return (
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      
      <input 
      value={newItem}
      onChange={e => setNewItem(e.target.value)} 
      type="text" 
      id="item"
      />
    </div>
    <button className="btn">Add</button>
  </form>
)

}