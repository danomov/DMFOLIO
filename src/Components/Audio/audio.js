import React, { useCallback, useState, useRef } from "react";
import background_music from "../../assets/audio/background_music.mp3";
import "./audio.scss";

const Audio = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audio = useRef(null);

  const handleAudioMuteControls = useCallback(() => {
    setIsMuted(!isMuted)
    if (isMuted) return audio.current.play();
    audio.current.pause();
  }, [isMuted, setIsMuted])

  return (
    <>
      <audio ref={audio} src={background_music} loop data-testid="test-audio" />
      <button
        className={`audio-control${isMuted ? " muted" : ""}`}
        onClick={handleAudioMuteControls}
      />
    </>
  );
};

export default Audio;
