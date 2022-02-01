import React from "react";
import "./section_five.css";

const Section5 = () => {
  return (
    <section
      id="reviews"
      className="testimonial-section inline_sec5_style1 ptb-100"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-4">
            <div
              class="client-info-wrap d-flex align-items-center mt-5 numb"
              style={{ backgroundColor: "#ffffffa8" }}
            >
              <div class="client-img">
                <img
                  src="numb-doc.png"
                  alt="client"
                  width="120"
                  class="img-fluid rounded-circle"
                />
              </div>
              <div class="client-info">
                <h5 class="mb-0" style={{ fontSize: "2rem" }}>
                  <span class="Countnum">100</span>+
                </h5>
                <p class="mb-0">U.S Board Certified Doctors</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-4">
            <div
              class="client-info-wrap d-flex align-items-center mt-5 numb"
              style={{ backgroundColor: "#ffffffa8" }}
            >
              <div class="client-img">
                <img
                  src="numb-list.png"
                  alt="client"
                  width="120"
                  class="img-fluid rounded-circle"
                />
              </div>
              <div class="client-info">
                <h5 class="mb-0 " style={{ fontSize: "2rem" }}>
                  <span class="Countnum">10000</span>+
                </h5>
                <p class="mb-0">Prescriptions Delivered</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-4">
            <div
              class="client-info-wrap d-flex align-items-center mt-5 numb"
              style={{ backgroundColor: "#ffffffa8" }}
            >
              <div class="client-img">
                <img
                  src="numb-states.png"
                  alt="client"
                  width="120"
                  class="img-fluid rounded-circle"
                />
              </div>
              <div class="client-info">
                <h5 class="mb-0" style={{ fontSize: "2rem" }}>
                  <span class="Countnum">33</span>
                </h5>
                <p class="mb-0">States Licensed Pharmacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
