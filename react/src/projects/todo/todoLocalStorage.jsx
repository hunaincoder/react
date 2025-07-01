const todoKey = "todo";

export const setTodo = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};

export const getTodo = () => {
  const rawTodo = localStorage.getItem(todoKey);
  return rawTodo ? JSON.parse(rawTodo) : [];
};
