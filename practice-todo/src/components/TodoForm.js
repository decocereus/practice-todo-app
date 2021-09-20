import React, { useState } from "react";
import shortid from "shortid";

function TodoForm(props) {
  const [newTodo, setNewTodo] = useState("");

  const submitForm = (evt) => {
    evt.preventDefault();
    if (!newTodo.length) {
      alert("Please enter a valid to-do");
      return;
    }

    props.addTodo({
      id: shortid.generate(),
      text: newTodo,
      complete: false,
    });
    setNewTodo("");
  };
  const handleChange = (evt) => {
    setNewTodo(evt.target.value);
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Enter a new To-do"
      />
      <button type="submit" onClick={submitForm}>
        Create Todo
      </button>
    </form>
  );
}

export default TodoForm;
