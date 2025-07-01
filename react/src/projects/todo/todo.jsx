import { useEffect, useState } from "react";
import "./todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    if (tasks.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTasks((prev) => {
      return [...prev, inputValue];
    });
    setInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              autoComplete="off"
              onChange={(e) => handleInputChange(e.target.value)}
              value={inputValue}
            />
          </div>
          <div>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </section>
      <section className="myUnORdList">
        <ul>
          {tasks.map((currTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{currTask}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button className="delete-btn">
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
