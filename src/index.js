import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";

//import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
