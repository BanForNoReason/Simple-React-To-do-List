## This is a very simple Todo list created in React

### Purpose of the Project
- Get familiar with hooks, functions, and JSX in the React.js framework.
- Build a simple project (a todo list) to gain hands-on experience and get a feel for React.js.
- Learn how to organize components into separate files and link them to the main application file.

### What the Todo List is Capable of Doing
- **Persistent Local Storage**: 
  - Using `useEffect`, the todo list stores items in local storage. Even after refreshing the page, the items persist and remain visible.
- **Preventing Page Refresh**: 
  - Using `e.preventDefault`, we prevent the page from refreshing when adding a new item to the todo list.
- **Deleting Items**: 
  - The `TodoItem` function includes a delete button, allowing users to remove items from the list.
- **Marking Items as Complete**: 
  - Users can checkmark tasks in the list using the `TodoItem` function, indicating completion of tasks.
- **Unique Identifiers**:
  - The `Todolist` function assigns unique ID keys to each item, enabling smooth deletion and preventing errors.
- **Mapping Items**:
  - The `Todolist` function creates a `.map` array to store and render todo items.

### Additional Notes
For more details about what each function does, the code has many comments. These comments explain the functionality and use of React.js built-in hooks and methods.

