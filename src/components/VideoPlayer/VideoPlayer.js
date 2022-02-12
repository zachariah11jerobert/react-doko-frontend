import React from "react";
import "./videoplayer.css";

const VideoPlayer = () => {
  return (
    <div className="video-promo-content d-flex justify-content-center align-item-center">
      <div className="ripple d-flex justify-content-center align-item-center">
        <a href="https://www.youtube.com/watch?v=fLycQcCxado">
          <i
            className="fa fa-play-circle fa-4x text-black"
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </div>
  );
};

export default VideoPlayer;
