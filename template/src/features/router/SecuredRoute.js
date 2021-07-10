import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const SecuredRoute = ({ component: Component, ...rest }) => {
  const uid = useSelector(state => state.user.uid);

  return (
    <Route
      {...rest}
      render={props =>
        uid ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default SecuredRoute;
