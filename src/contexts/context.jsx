import React, { createContext } from "react";
export const Context = createContext();

const ContextProvider = (props) => {
  const test = "test";
  return <Context.Provider value={test}>{props.children}</Context.Provider>;
};

export default ContextProvider;
