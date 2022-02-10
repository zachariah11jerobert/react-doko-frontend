import React from "react";
import "./shipping.css";

const Shipping = () => {
  return (
    <section style={{ padding: "40px 0px" }}>
      <div data-aos="fade-up">
        <div
          className="bg-theme-blue text-white pt-2 pb-2"
          style={{ textAlign: "center" }}
        >
          <div data-aos="zoom-in">
            <h3>FREE Shipping </h3>
            <h4>Totally discreet</h4>
          </div>
        </div>

        <div className="col-md-5" data-aos="fade-up">
          <div className="about-content-right">
            <img
              src="https://doko.md/edpills/cardelivery.png"
              alt="about us"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
