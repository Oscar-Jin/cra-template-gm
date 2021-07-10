import React from "react";
import store from "./app/store";
import ReactDOM from "react-dom";
import Router from "./features/router/Router";
import { Provider } from "react-redux";
import "./app/firebase";
import "tailwindcss/tailwind.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
