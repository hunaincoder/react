import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({
    id: "",
    content: "",
    checked: false,
  });

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => handleInputChange(e.target.value)}
            value={inputValue.content}
          />
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </section>
  );
};
