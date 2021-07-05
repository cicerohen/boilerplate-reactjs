import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
ReactDOM.render(
  <React.StrictMode>
    <>
      <CssBaseline />
      <AppContainer />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
