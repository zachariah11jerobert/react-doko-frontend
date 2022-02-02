import React from "react";

const Section3 = () => {
  return (
    <section className="testimonial-section" style={{padding: "40px 0px"}}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <div className="section-heading" style={{ textAlign: "center" }}>
              <h3>FREE Shipping </h3>
              <h4>Totally discreet</h4>
            </div>
          </div>
          <div className="col-md-5">
            <div className="about-content-right">
              <img src="https://doko.md/edpills/cardelivery.png" alt="about us" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
