import React, { useCallback, useState } from "react";
import background from "../../assets/audio/background.mp3";
import "./audio.scss";

const Audio = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleGetAudioPlayer = useCallback(() => {
    return document.querySelector("audio");
  }, []);

  const handleAudioMuteControls = () => {
    const audio = handleGetAudioPlayer();
    setIsMuted(!isMuted);

    if (isMuted) return audio.play();
    audio.pause();
  };

  return (
    <>
      <audio src={background} loop />
      <button
        className={`audio-control ${isMuted ? "muted" : ""}`}
        onClick={handleAudioMuteControls}
      />
    </>
  );
};

export default Audio;
