import React from "react";
import "./boxmobile.css";

import img_viagra from "../../assets/pfizer.webp";
import img_cialis from "../../assets/cialis.webp";

const BoxMobile = () => {
  return (
    <div>
      <div className="box_mobile-header">
        <p>FDA APPROVED</p>
        <h5 style={{ color: "#fff" }}>Erectile Dysfunction</h5>
      </div>
      <div className="box_mobile-body">
        <div className="box_flex-row">
          <div className="box_flex_column">
            <img src={img_viagra} style={{ marginTop: "6%" }} />
            <span>
              Viagra®
              <br /> (sildenafil)
            </span>
          </div>

          <div className="box_flex_column">
            <img src={img_cialis} style={{ marginTop: "6%" }} />

            <span>
              Cialis® <br /> (tadalafil)
            </span>
          </div>
        </div>
      </div>
      <div className="box_mobile-footer">From $1 per pill</div>
    </div>
  );
};

export default BoxMobile;
