import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/index.css"
const App = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default App;
