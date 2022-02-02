import React from "react";
import "./section9.css";

const Section9 = () => {
  return (
    <section className="imageblock-section switchable switchable-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="section-heading mb-5 text-center">
              <br />
              <h2>Our Pharmacy Partner</h2>
              <p>
                has <b>30+</b> State Licenses to deliver pills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginRight: "0px", marginLeft: "0px" }}>
        <div
          className="col-lg-12 col-md-12"
          style={{ paddingRight: "0px", paddingLeft: "0px" }}
        >
          <div
            className="background-image-holder inline_sec9_style1"
            id="phamap"
          ></div>
          <div
            className="background-image-holder inline_sec9_style2"
            id="phamaphone"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
