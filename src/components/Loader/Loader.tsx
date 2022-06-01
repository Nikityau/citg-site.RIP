import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "5rem",
        color: "#fff",
      }}
    >
      Loading...
    </div>
  );
};

export default Loader;
