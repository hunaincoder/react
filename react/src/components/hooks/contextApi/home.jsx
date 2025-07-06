import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {
  const { name, age } = useContext(BioContext);
  return (
    <div>
      <h1>
        my name is {name} and i am {age} years old
      </h1>
    </div>
  );
};
