import React from "react";
import "./section_five.css";

const Section5 = () => {
  return (
    <section
      id="reviews"
      className="testimonial-section inline_sec5_style1 ptb-100"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <div
              className="client-info-wrap d-flex align-items-center mt-5 numb"
              style={{ backgroundColor: "#ffffffa8" }}
            >
              <div className="client-img">
                <img
                  src="https://doko.md/edpills/numb-doc.png"
                  alt="client"
                  width="120"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="client-info">
                <h5 className="mb-0" style={{ fontSize: "2rem" }}>
                  <span className="Countnum">100</span>+
                </h5>
                <p className="mb-0">U.S Board Certified Doctors</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div
              className="client-info-wrap d-flex align-items-center mt-5 numb"
              style={{ backgroundColor: "#ffffffa8" }}
            >
              <div className="client-img">
                <img
                  src="https://doko.md/edpills/numb-list.png"
                  alt="client"
                  width="120"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="client-info">
                <h5 className="mb-0 " style={{ fontSize: "2rem" }}>
                  <span className="Countnum">10000</span>+
                </h5>
                <p className="mb-0">Prescriptions Delivered</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div
              className="client-info-wrap d-flex align-items-center mt-5 numb"
              style={{ backgroundColor: "#ffffffa8" }}
            >
              <div className="client-img">
                <img
                  src="https://doko.md/edpills/numb-states.png"
                  alt="client"
                  width="120"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="client-info">
                <h5 className="mb-0" style={{ fontSize: "2rem" }}>
                  <span className="Countnum">33</span>
                </h5>
                <p className="mb-0">States Licensed Pharmacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
