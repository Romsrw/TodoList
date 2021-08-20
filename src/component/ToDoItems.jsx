import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoItems = ({ removeTask }) => {
  const { todos } = useSelector((state) => state);

  return (
    <div>
      <ol>
        {todos.map((todo, index) => (
          <ToDoItem
            id={todo.id}
            text={todo.text}
            key={todo.id}
            removeTask={removeTask}
            index={index}
          />
        ))}
      </ol>
    </div>
  );
};

export default ToDoItems;
