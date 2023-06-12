import React from "react";

import Card from "../UI/Card";

const AddToDo = (props) => {
  const AddToDoHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={AddToDoHandler}>
        <label htmlFor="number">No.</label>
        <input id="no." type="number" />
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
        <label htmlFor="description">Description</label>
        <input id="description" type="text" />
        <button type="submit">Add To Do</button>
      </form>
    </Card>
  );
};
export default AddToDo;
