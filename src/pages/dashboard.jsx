import React, { useContext } from "react";
import Navbar from "./../components/navbar";
import Search from "./../components/search";
import UserInfo from "./../components/user-info";
import User from "./../components/user";
import Repos from "./../components/repos";
import Loader from "./../components/loader";
import { Context } from "../contexts/context";
const Dashboard = () => {
  const { isLoaing } = useContext(Context);
  if (isLoaing) {
    return (
      <React.Fragment>
        <Navbar />
        <Search />
        <Loader />
        {/* <UserInfo />
        <User />
        <Repos /> */}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Navbar />
        <Search />
        <UserInfo />
        <User />
        <Repos />
      </React.Fragment>
    );
  }
};

export default Dashboard;
