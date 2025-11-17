import React, { Dispatch, SetStateAction, useState } from "react";
import TodoService from "../TodoService";
import TodoTypes from "../todo";
import "../CSS/TodoForm.css"

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {

  //!lets create a use state to manage the state of newTodoText to represent the text of new todo being entered
  const [newTodoText, setNewTodoText] = useState<string>("");
  const [newTododueDate, setNewTododueDate] = useState<string>("");

  async const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = await TodoService.addTodo(newTodoText, newTododueDate);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoText("");
      setNewTododueDate("");
    }
  };
  return (
    <div className="inputForm">
      <input
        type="text"
        value={newTodoText} //!binds the input value to the newTodoText state
        onChange={(e) => setNewTodoText(e.target.value)} // update the newTodoText as we type new todo
        autoFocus={true}
        placeholder="Add a Task"
      />

      <input
        type="date"
        value={newTodoText} //!binds the input value to the newTodoText state
        onChange={(e) => setNewTododueDate(e.target.value)} // update the newTododueDate as we type new todo
        autoFocus={true}
        placeholder="Due Date"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
