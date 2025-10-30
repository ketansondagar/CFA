import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { initGA } from './asset/js/gafile';


initGA();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
    <App />
  // </Provider>
);
