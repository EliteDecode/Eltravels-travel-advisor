import React from "react";
import Navbar from "./components/navbar/Navbar";

import Content from "./components/content/Content";

import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalContext } from "./context";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <Content />
        </div>
      </div>
    </>
  );
};

export default App;
