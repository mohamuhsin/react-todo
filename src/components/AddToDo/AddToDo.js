import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddToDo.module.css";
import Button from "../UI/Button";

const AddToDo = (props) => {
  const [enteredNum, setEnteredNum] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDes, setEnteredDes] = useState("");

  const AddToDoHandler = (event) => {
    event.preventDefault();
    console.log(enteredNum, enteredTitle, enteredDes);
  };

  const numChangeHandler = (event) => {
    setEnteredNum(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const desChangeHandler = (event) => {
    setEnteredDes(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddToDoHandler}>
        <label htmlFor="number">No.</label>
        <input
          id="no."
          type="number"
          value={enteredNum}
          onChange={numChangeHandler}
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={enteredDes}
          onChange={desChangeHandler}
        />
        <Button type="submit">Add To Do</Button>
      </form>
    </Card>
  );
};
export default AddToDo;
