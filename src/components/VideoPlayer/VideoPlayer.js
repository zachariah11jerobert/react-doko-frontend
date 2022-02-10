import React from "react";
import "./videoplayer.css";

const VideoPlayer = () => {
  return (
    <div className="video-promo-content mt-4 mb-4 d-flex justify-content-center">
      <div className="ripple">
        <a href="https://www.youtube.com/watch?v=fLycQcCxado">
          <i
            className="fa fa-play-circle fa-5x text-black"
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </div>
  );
};

export default VideoPlayer;
