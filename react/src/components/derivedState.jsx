import { useState } from "react";

export const DerivedState = () => {
  const [users, setUsers] = useState([
    {
      name: "hunain",
      age: 21,
    },
    { name: "hammad", age: 15 },
    {
      name: "moaz",
      age: 23,
    },
  ]);
  const userCount = users.length;
  const userAvg = users.reduce((acc, cur) => acc + cur.age, 0) / userCount;
  return (
    <div>
      <h1>Users list</h1>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.name} - {user.age} years old
            </li>
          );
        })}
      </ul>
      <p>total users count {userCount}</p>
      <p> users average age {userAvg}</p>
    </div>
  );
};
