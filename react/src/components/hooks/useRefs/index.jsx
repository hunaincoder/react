import { useRef } from "react";

export const UseRef = () => {
  const name = useRef();
  const pass = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(pass.current.value);
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        Enter name: <input type="text" name="name" ref={name} />
        <br />
        Enter Password: <input type="password" name="pass" ref={pass} />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
