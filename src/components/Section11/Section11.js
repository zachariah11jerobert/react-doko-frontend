import React from "react";
import "./section11.css";

const Section11 = () => {
  return (
    <section className="video-promo ptb-100 gradient-overlay inline_sec11_style1">
      <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="video-promo-content mt-4 text-center">
              <a
                href="https://www.youtube.com/watch?v=fLycQcCxado"
                className="popup-youtube video-play-icon d-inline-block"
              >
                <i class="fa fa-play fa-3x" aria-hidden="true"></i>

              </a>
              <h2 className="mt-4 text-white">
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
