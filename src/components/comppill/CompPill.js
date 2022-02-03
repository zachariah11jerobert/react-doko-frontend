import React from "react";
import "./compill.css";

const Comp1 = ({ tabletName, tabletImage, footerBackgroundColor }) => {
  return (
    <div className="testimonial-quote-wrap inline_testimonial-quote-wrap my-lg-3 my-md-3 rounded white-bg shadow-sm p-5">
      <div className="client-say">
        <p>FDA APPROVED</p>
      </div>
      <div className="media author-info mb-3">
        <div className="media-body">
          <h5 className="mb-0" style={{ color: "#fff" }}>
            Erectile Dysfunction
          </h5>
          <div className="flex-container-row mt-3">
            <img src={tabletImage} />
            <span>{tabletName}</span>
          </div>
        </div>
      </div>
      <div
        className="pill_footer"
        style={{ backgroundColor: footerBackgroundColor }}
      >
        From $1 per pill
      </div>
    </div>
  );
};

export default Comp1;
