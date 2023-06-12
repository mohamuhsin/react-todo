import React, { useState } from "react";

import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/AddToDo/ToDoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const AddToDoHandler = (todoNum, todoTitle, todoDesc) => {
    setTodoList((prevTodo) => {
      return [
        ...prevTodo,
        {
          num: todoNum,
          title: todoTitle,
          description: todoDesc,
          id: Math.random.toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddToDo onAddTodo={AddToDoHandler} />
      <ToDoList todos={todoList} />
    </div>
  );
}

export default App;
