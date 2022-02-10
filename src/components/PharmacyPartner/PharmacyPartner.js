import React from "react";
import "./pharmacypartner.css";

import pharmacyMobile from "../../assets/mobilephramacy.png";

const PharmacyPartner = () => {
  return (
    <section className="imageblock-section switchable switchable-content">
      <div className="bg-theme-blue pt-2 pb-2">
        <div className="text-center text-white" data-aos="zoom-in">
          <h2>Our Pharmacy Partner</h2>
          <p>
            has <b>30+</b> State Licenses to deliver pills.
          </p>
        </div>
      </div>
      <div className="row" style={{ marginRight: "0px", marginLeft: "0px" }}>
        <div className="col-lg-12 col-md-12">
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block inline_sec9_style1"></div>
          <div className="d-sm-block d-md-none d-lg-none d-xl-none">
            <img src={pharmacyMobile} className="image-mobile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmacyPartner;
