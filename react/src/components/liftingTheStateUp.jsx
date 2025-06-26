import { useState } from "react";

export const LiftingUp = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="write your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <p>the input value is : {inputValue}</p>;
};
