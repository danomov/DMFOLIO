import React from "react";
import "./loader.scss";

const Loader = ({ count = 9, hasWrapper = false }) => {
  return (
    <div className={hasWrapper && "loader-wrapper"}>
      <div className="dots">
        {new Array(count).fill(0).map(() => (
          <div />
        ))}
      </div>
    </div>
  );
};

export default Loader;
