import React from "react";
import Header from "../Components/Header";

function withHeader(WrapComponent) {
  return class extends React.Component {
    render() {
      return (
        <>
          <Header />
          <WrapComponent />
        </>
      );
    }
  };
}

export default withHeader;
