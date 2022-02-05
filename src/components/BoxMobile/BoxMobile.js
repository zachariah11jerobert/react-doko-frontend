import React from "react";
import "./boxmobile.css";

import img_viagra from "../../assets/pfizer.webp";
import img_cialis from "../../assets/cialis.webp";

const BoxMobile = () => {
  return (
    <div className="row" id="boxmobile01">
      <div className="col-12">
        <div className="my-lg-3 my-md-3 rounded white-bg shadow-sm p-5 box_mobile-header">
          <div className="client-say">
            <p>FDA APPROVED</p>
          </div>
          <div className="media author-info mb-3" style={{ marginTop: "1%" }}>
            <div className="media-body">
              <h5 className="mb-0" style={{ color: "#fff" }}>
                Erectile Dysfunction
              </h5>

              <div className="row">
                <div className="col-6">
                  <div className="box_flex_column">
                    <img src={img_viagra} style={{ marginTop: "6%" }} />
                    <span>
                      Viagra®
                      <br /> (sildenafil)
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box_flex_column">
                    <img src={img_cialis} style={{ marginTop: "6%" }} />
  
                    <span>
                      Cialis® <br /> (tadalafil)
                    </span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="box_mobile-footer">From $1 per pill</div>
        </div>
      </div>
    </div>
  );
};

export default BoxMobile;
