import { useRef } from "react";
import video from "/college-video.mp4";

function VideoPlayer({ play, setPlay }) {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target == player.current) {
      setPlay(false);
    }
  };

  return (
    <div
      className={`video-player ${play ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video className="video" src={video} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer;
