import "./App.css";

import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/AddToDo/ToDoList";

function App() {
  return (
    <div>
      <AddToDo />
      <ToDoList todos={[]} />
    </div>
  );
}

export default App;
