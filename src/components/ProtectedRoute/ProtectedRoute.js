import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, loggedIn, isLoggedInLoading, ...props }) {
  if (isLoggedInLoading) {
    return <div>Loading...</div>; // Or your loading spinner component
  }

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Route {...props}>{loggedIn ? children : <Redirect to={"/login"} />}</Route>
  );
}

export default ProtectedRoute;
