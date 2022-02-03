import React from "react";
import "./section_five.css";

const Section5 = () => {
  return (
    <section
      id="reviews"
      className="ptb-30 bg-theme-blue"
    >
      <div className="d-flex justify-content-around">
        <div className="d-flex align-items-center" data-aos="zoom-in">
          <div>
            <img
              src="https://doko.md/edpills/numb-doc.png"
              alt="client"
              width="300"
              className="img-fluid rounded-circle"
            />
          </div>
          <div style={{ marginLeft: "-50px" }}>
            <h5 className="mb-0 text-white" style={{ fontSize: "2.5rem" }}>
              <span className="Countnum">100</span>+
            </h5>
            <p className="mb-0 text-white" >U.S Board Certified Doctors</p>
          </div>
        </div>

        <div className="d-flex align-items-center" data-aos="zoom-in">
          <div>
            <img
              src="https://doko.md/edpills/numb-states.png"
              alt="client"
              width="300"
              className="img-fluid rounded-circle"
            />
          </div>
          <div style={{ marginLeft: "-50px" }}>
            <h5 className="mb-0 text-white" style={{ fontSize: "2.5rem" }}>
              <span className="Countnum">33</span>
            </h5>
            <p className="mb-0 text-white">States Licensed Pharmacy</p>
          </div>
        </div>

        <div className="d-flex align-items-center" data-aos="zoom-in">
          <div>
            <img
              src="https://doko.md/edpills/numb-list.png"
              alt="client"
              width="300"
              className="img-fluid rounded-circle"
            />
          </div>
          <div style={{ marginLeft: "-50px" }}>
            <h5 className="mb-0 text-white" style={{ fontSize: "2.5rem" }}>
              <span className="Countnum">10000</span>+
            </h5>
            <p className="mb-0 text-white">Prescriptions Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
