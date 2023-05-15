import React, { Fragment, useReducer } from "react";
import './full_style.css'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap";

import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
      </LayoutContext.Provider>
    </Fragment>
  );
}

export default App;
