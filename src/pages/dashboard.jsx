import React from "react";
import Navbar from "./../components/navbar";
import Search from "./../components/search";
import UserInfo from "./../components/user-info";
import User from "./../components/user";
const Dashboard = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Search />
      <UserInfo />
      <User />
    </React.Fragment>
  );
};

export default Dashboard;
