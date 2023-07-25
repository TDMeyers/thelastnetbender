import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./Store/store.jsx";
import Characters from "./Components/Characters.jsx"

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
