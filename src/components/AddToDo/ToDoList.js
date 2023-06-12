import React from "react";

import Card from "../UI/Card";
import classes from "./ToDoList.module.css";

const ToDoList = (props) => {
  return (
    <Card className={classes.todos}>
      <ul>
        {props.todos.map((todo) => (
          <li>
            {todo.num} {todo.title} {todo.description}
          </li>
        ))}
        ;
      </ul>
    </Card>
  );
};
