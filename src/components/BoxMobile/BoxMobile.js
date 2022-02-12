import React from "react";
import "./boxmobile.css";

import img_viagra from "../../assets/pfizer.webp";
import img_cialis from "../../assets/cialis.webp";

const BoxMobile = () => {
  return (
    <div>
      <div className="box_mobile-header">
        <h5>FDA APPROVED</h5>
        <h4>Erectile Dysfunction</h4>
      </div>
      <div className="box_mobile-body">
        <div className="box_flex-row">
          <div className="pills-info">
            <div className="box_flex_column">
              <img src={img_viagra} class="promo" />
              <span>Viagra® (sildenafil)</span>
            </div>

            <div className="box_flex_column">
              <img src={img_cialis} class="promo" />
              <span>Cialis® (tadalafil)</span>
            </div>
          </div>
          <div>
            <div className="promo circle-background promo-animation">
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginTop: "20px",
                  marginBottom: "10px",
                  color:"#000"
                }}
              >
                
                From
              </span>
              <span className="price_style">$1</span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  color:"#000"
                }}
              >
                {" "}
                per Pill
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxMobile;
