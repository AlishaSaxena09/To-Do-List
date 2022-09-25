import { useState } from "react";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleTask = (e) => {
    setTodo(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTodoList((prevItem) => {
      return [...prevItem, todo];
    });
    setTodo("");
  };

  const deleteItem = (index) => () => {
    setTodoList((items) => items.filter((_, i) => i !== index));
  };

  const newItem = todoList.map((item, i) => {
    return (
      <div className="flex item" key={item[i]}>
        <h4>{item}</h4>
        <button className="trash" onClick={deleteItem(i)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    );
  });

  const removeAllTask = () => {
    setTodoList([]);
  };
  console.log(newItem);
  return (
    <div className="container">
      <h1>TODOLIST</h1>
      <form className="flex">
        <input value={todo} type="text" onChange={handleTask}></input>
        <button className="add-button" onClick={addTask}>
          <i className="fa-solid fa-plus icon"></i> Add Task
        </button>
      </form>
      {newItem}
      {todoList.length > 0 ? (
        <button onClick={removeAllTask} className="clear-button">
          Clear All<i className="fa-solid fa-trash icon"></i>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
