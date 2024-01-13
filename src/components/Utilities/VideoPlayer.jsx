"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtube_id }) => {
  const [is_open, set_is_open] = useState(true);
  const handle_video_player = () => {
    set_is_open((prev_state) => !prev_state);
  };
  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handle_video_player}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1"
        >
          X
        </button>
        <YouTube
          videoId={youtube_id}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };
  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handle_video_player}
        className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl rounded"
      >
        Tonton Trailer
      </button>
    );
  };

  return is_open ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
