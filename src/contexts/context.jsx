import React, { createContext, useState } from "react";
import mockUserInfo from "./mockData/mockUserInfo";
import mockFollower from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";
import axios from "axios";
export const Context = createContext();
const ContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(mockUserInfo);
  const [followers, setFollowers] = useState(mockFollower);
  const [repos, setRepos] = useState(mockRepos);
  const [message, setMessage] = useState({ show: false, ms: "" });
  const fetchDataForNewUser = async (user) => {
    try {
      setMessage({ show: false, ms: "" });
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      setUserInfo(data);
    } catch (error) {
      setMessage({ show: true, ms: "user not exist" });
    }
  };

  return (
    <Context.Provider
      value={{ userInfo, followers, repos, fetchDataForNewUser, message }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
