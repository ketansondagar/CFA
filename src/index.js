import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//import { store } from "./app/store";
import App from "./App";
import "./index.css";

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  const ReactDOMLib = require("react-dom");
  axe(React, ReactDOMLib, 1000);
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
    <App />
  // </Provider>
);
