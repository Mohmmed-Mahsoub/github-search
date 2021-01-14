import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import ContextProvider from "./contexts/context";
import PrivateRoute from "./pages/privateRoute";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route path="/notFound" component={NotFound} />
          <Redirect from="/" exact to="/dashboard" />
          <Redirect to="/notFound" />
        </Switch>
      </ContextProvider>
    </div>
  );
}

export default App;
