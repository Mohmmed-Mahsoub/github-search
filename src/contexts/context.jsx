import React, { createContext, useState } from "react";
import mockUserInfo from "./mockData/mockUserInfo";
import mockFollower from "./mockData/mockFollowers";
export const Context = createContext();
const ContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(mockUserInfo);
  const [followers, setFollowers] = useState(mockFollower);
  return (
    <Context.Provider value={{ userInfo, followers }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
