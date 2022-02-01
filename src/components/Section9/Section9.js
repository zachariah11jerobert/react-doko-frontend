import React from "react";
import "./section9.css";

const Section9 = () => {
  return (
    <section class="imageblock-section switchable switchable-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="section-heading mb-5 text-center">
              <br />
              <h2>Our Pharmacy Partner</h2>
              <p>
                has <b>30+</b> State Licenses to deliver pills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style={{ marginRight: "0px", marginLeft: "0px" }}>
        <div
          class="col-lg-12 col-md-12"
          style={{ paddingRight: "0px", paddingLeft: "0px" }}
        >
          <div
            class="background-image-holder inline_sec9_style1"
            id="phamap"
          ></div>
          <div
            class="background-image-holder inline_sec9_style2"
            id="phamaphone"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
