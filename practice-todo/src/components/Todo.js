import React from "react";

function Todo(props) {
  return (
    <div style={{ display: "flex" }}>
      <div
        onClick={props.isComplete}
        style={{
          textDecoration: props.todo.complete ? "line-through" : "",
          cursor: "pointer",
        }}
      >
        {props.todo.text}
      </div>
      <button style={{ marginLeft: "1em" }} onClick={props.deleteTodo}>
        x
      </button>
    </div>
  );
}

export default Todo;
