import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const PrivateRoute = ({ children, ...restProps }) => {
  /* const isAuthenticated  = true; */
  const { isAuthenticated } = useAuth0();
  console.log({ children, ...restProps });
  return (
    <Route
      {...restProps}
      render={() => {
        return isAuthenticated ? children : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
