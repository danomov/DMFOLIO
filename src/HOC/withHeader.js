import React from "react";
import Header from "../Components/Header";

const withHeader = (WrapComponent) => {
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
