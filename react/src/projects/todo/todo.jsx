import { useState } from "react";
import "./todo.css";
import { TodoForm } from "./todoForm";
import { TodoList } from "./todoList";
import { TodoDate } from "./todoDate";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    // if (tasks.includes(content)) return;
    const ifTodoContent = tasks.find((task) => task.content === content);
    if (ifTodoContent) return;
    setTasks((prev) => {
      return [...prev, { id, content, checked }];
    });
  };

  const handleDeleteTask = (task) => {
    const updatedTasks = tasks.filter((currTask) => currTask.content !== task);
    setTasks(updatedTasks);
    // console.log(task);
    // setTasks((prev) => {
    //   return prev.filter((t) => t !== task);
    // });
  };

  const handCheckedTask = (task) => {
    const updatedTasks = tasks.map((currTask) => {
      if (currTask.content === task) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTasks(updatedTasks);
  };

  const clearAlltaks = () => {
    setTasks([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnORdList">
        <ul>
          {tasks.map((currTask) => {
            return (
              <TodoList
                key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                onDeleteTask={handleDeleteTask}
                onCheckedTask={handCheckedTask}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={clearAlltaks}>
          clear All
        </button>
      </section>
    </section>
  );
};
