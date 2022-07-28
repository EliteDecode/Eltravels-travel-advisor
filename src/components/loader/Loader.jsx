import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <>
      <div class="lds-ring mt-5">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="lead dark mt-1" style={{ opacity: ".5", fontSize: "20px" }}>
        Loading...
      </p>
    </>
  );
};

export default Loader;
