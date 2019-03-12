import { render } from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import store from "./store/index";
import App from "./App";
import "./assets/scss/style.scss";
import "./assets/css/style.css";
import "./assets/css/store.css";
import "./assets/css/login.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
