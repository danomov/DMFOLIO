import React, { useCallback, useState } from "react";
import background_music from "../../assets/audio/background_music.mp3";
import "./audio.scss";

const Audio = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleGetAudioPlayer = useCallback(() => {
    return document.querySelector("audio");
  }, [])

  const handleAudioMuteControls = useCallback(() => {
    const audio = handleGetAudioPlayer();
    setIsMuted(!isMuted)

    if (isMuted) return audio.play();
    audio.pause();
  }, [isMuted, setIsMuted, handleGetAudioPlayer])

  return (
    <>
      <audio src={background_music} loop />
      <button
        className={`audio-control ${isMuted ? "muted" : ""}`}
        onClick={handleAudioMuteControls}
      />
    </>
  );
};

export default Audio;
