import React from "react";

const AddToDo = () => {
  return (
    <form>
      <label htmlFor="number">No.</label>
      <input type="number" />
      <label htmlFor="title">Title</label>
      <input type="text" />
      <label htmlFor="description">Description</label>
      <input type="text" />
      <button type="submit">Add To Do</button>
    </form>
  );
};
export default AddToDo;
