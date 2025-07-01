import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, checked, onDeleteTask, onCheckedTask }) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onCheckedTask(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onDeleteTask(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
