import React from "react";
import Audio from "../Components/Audio";

const withAudio = (WrapComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <Audio />
          <WrapComponent />
        </>
      );
    }
  };
}

export default withAudio;
