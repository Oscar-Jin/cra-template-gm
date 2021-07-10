import React from "react";
import routes from "../../app/routes";
import SecuredRoute from "./SecuredRoute";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Router = () => {
  const uid = useSelector(state => state.user.uid);
  const initialized = useSelector(state => state.user.initialized);

  if (initialized) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to={uid ? "/home" : "/login"} />
          </Route>
          {routes.map(route => {
            return route.private ? (
              <SecuredRoute
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ) : (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  } else {
    return <div></div>;
  }
};

export default Router;
