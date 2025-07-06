import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const name = "hunain";
  const age = 25;

  return (
    <BioContext.Provider value={{ name, age }}>{children}</BioContext.Provider>
  );
};
