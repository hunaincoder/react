import { useId, useRef } from "react";

export const UseRef2 = () => {
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
        <ChildComp label="Name" ref={name} />
        <ChildComp label="Password" ref={pass} />
        <button>submit</button>
      </form>
    </>
  );
};

const ChildComp = (props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={props.ref} />
    </div>
  );
};
