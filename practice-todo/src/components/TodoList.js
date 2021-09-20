import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [allTodos, setAllTodos] = useState({
    todos: [],
    filter: "all",
    toggleAllComplete: true,
  });

  const addTodoToList = (todo) => {
    setAllTodos({ ...allTodos, todos: [todo, ...allTodos.todos] });
  };

  const toggleComplete = (id) => {
    setAllTodos({
      ...allTodos,
      todos: allTodos.todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      }),
    });
  };

  const toggleAllComplete = () => {
    setAllTodos({
      ...allTodos,
      todos: allTodos.todos.map((todo) => ({
        ...todo,
        complete: allTodos.toggleAllComplete,
      })),
      toggleAllComplete: !allTodos.toggleAllComplete,
    });
  };

  const showFiltered = (s) => {
    setAllTodos({ ...allTodos, filter: s });
  };

  const deleteTodo = (id) => {
    setAllTodos({
      ...allTodos,
      todos: allTodos.todos.filter((todo) => todo.id !== id),
    });
  };
  const removeAllCompleteTodos = () => {
    setAllTodos({
      ...allTodos,
      todos: allTodos.todos.filter((todo) => !todo.complete),
    });
  };

  let filteredTodos = [];
  if (allTodos.filter === "all") {
    filteredTodos = allTodos.todos;
  } else if (allTodos.filter === "active") {
    filteredTodos = allTodos.todos.filter((todo) => todo.complete !== true);
  } else if (allTodos.filter === "complete") {
    filteredTodos = allTodos.todos.filter((todo) => todo.complete === true);
  }

  return (
    <div>
      <TodoForm addTodo={addTodoToList} />
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <Todo
            todo={todo}
            isComplete={() => toggleComplete(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        </div>
      ))}
      <div>
        To-do's left:
        {allTodos.todos.filter((todo) => todo.complete !== true).length}
      </div>
      <button onClick={() => showFiltered("all")}>All To-do's</button>
      <button onClick={() => showFiltered("active")}>Active To-do's</button>
      <button onClick={() => showFiltered("complete")}>
        Completed To-do's
      </button>
      {allTodos.todos.some((todo) => todo.complete) ? (
        <button onClick={removeAllCompleteTodos}>Remove all complete</button>
      ) : null}
      <button onClick={toggleAllComplete}>
        Complete all todos: {`${allTodos.toggleAllComplete}`}
      </button>
    </div>
  );
}

export default TodoList;
