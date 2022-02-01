import React from "react";
import "./section11.css";

const Section11 = () => {
  return (
    <section class="video-promo ptb-100 gradient-overlay inline_sec11_style1">
      <div class="container">
        <br />
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="video-promo-content mt-4 text-center">
              <a
                href="https://www.youtube.com/watch?v=fLycQcCxado"
                class="popup-youtube video-play-icon d-inline-block"
              >
                <span class="ti-control-play"></span>
              </a>
              <h2 class="mt-4 text-white">
                YOU'RE <span style={{ color: "#42d7c8" }}>NOT ALONE</span>
              </h2>
            </div>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
};

export default Section11;
