import React, { createContext, useState } from "react";
import mockUserInfo from "./mockData/mockUserInfo";
export const Context = createContext();
const ContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(mockUserInfo);
  return <Context.Provider value={userInfo}>{props.children}</Context.Provider>;
};

export default ContextProvider;
