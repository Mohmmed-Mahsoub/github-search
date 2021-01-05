import React, { createContext, useState } from "react";
import mockUserInfo from "./mockData/mockUserInfo";
import mockFollower from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";
export const Context = createContext();
const ContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(mockUserInfo);
  const [followers, setFollowers] = useState(mockFollower);
  const [repos, setRepos] = useState(mockRepos);
  const fetchDataForNewUser = (x) => {
    console.log(x);
  };

  return (
    <Context.Provider
      value={{ userInfo, followers, repos, fetchDataForNewUser }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
