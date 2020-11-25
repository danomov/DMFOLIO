import React from "react";
import "./loader.scss";

const Loader = ({ count = 9, hasWrapper = false }) => {
  return (
    <div className={hasWrapper ? "loader-wrapper" : ""}>
      <div className="dots" data-testid="test-loader">
        {new Array(count).fill(0).map(() => (
          <div key={Math.random() * 500} />
        ))}
      </div>
    </div>
  );
};

export default Loader;
