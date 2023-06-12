import React from "react";

const AddToDo = (props) => {
  const AddToDoHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={AddToDoHandler}>
      <label htmlFor="number">No.</label>
      <input id="no." type="number" />
      <label htmlFor="title">Title</label>
      <input id="title" type="text" />
      <label htmlFor="description">Description</label>
      <input id="description" type="text" />
      <button type="submit">Add To Do</button>
    </form>
  );
};
export default AddToDo;
