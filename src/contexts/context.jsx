import React, { createContext, useEffect, useState } from "react";
import mockUserInfo from "./mockData/mockUserInfo";
import mockFollower from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";
import axios from "axios";
export const Context = createContext();
const ContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(mockUserInfo);
  const [followers, setFollowers] = useState(mockFollower);
  const [repos, setRepos] = useState(mockRepos);
  const [requests, setRequests] = useState("50");
  const [message, setMessage] = useState({ show: false, ms: "" });
  const checkRequests = async () => {
    try {
      const {
        data: {
          rate: { remaining },
        },
      } = await axios.get("https://api.github.com/rate_limit");
      setRequests(remaining);
      if (remaining === 0) {
        setMessage({
          show: true,
          ms: "you used all available requests wait an hour",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //check Requests when app loaded
  useEffect(checkRequests, []);

  const fetchDataForNewUser = async (user) => {
    try {
      setMessage({ show: false, ms: "" });
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      setUserInfo(data);
      checkRequests();
      const { followers_url } = data;
      const followers = await axios.get(followers_url);
      setFollowers(followers.data);

      const { repos_url } = data;
      const repos = await axios.get(repos_url);
      setRepos(repos.data);
    } catch (error) {
      setMessage({ show: true, ms: "user not exist" });
    }
  };

  return (
    <Context.Provider
      value={{
        userInfo,
        followers,
        repos,
        fetchDataForNewUser,
        message,
        requests,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
