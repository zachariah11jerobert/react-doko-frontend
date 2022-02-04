import React from "react";
import "./Section6.css";

const Section6 = () => {
  return (
    <section
      className="our-partner-section ptb-100 inline_sec6_style1"
      id="itemslide-ph"
    >
      <div className="d-flex justify-content-center align-item-center flex-wrap">
        <div className="box_content_300 mt-5">
          <div className="client-img">
            <img
              src="numb-doc.png"
              alt="client"
              width="120"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="client-info">
            <h5 className="mb-0" style={{ fontSize: "2rem" }}>
              <span className="Countnum">100</span>+
            </h5>
            <p
              className="mb-0 "
              style={{ color: "#131414", fontWeight: "600" }}
            >
              U.S Board Certified Doctors
            </p>
          </div>
        </div>

        <div className="box_content_300 mt-5">
          <div className="client-img">
            <img
              src="numb-list.png"
              alt="client"
              width="120"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="client-info">
            <h5 className="mb-0 " style={{ fontSize: "2rem" }}>
              <span className="Countnum">10000</span>+
            </h5>
            <p className="mb-0" style={{ color: "#131414", fontWeight: "600" }}>
              Prescriptions Delivered
            </p>
          </div>
        </div>

        <div className="box_content_300 mt-5">
          <div className="client-img">
            <img
              src="numb-states.png"
              alt="client"
              width="120"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="client-info">
            <h5 className="mb-0" style={{ fontSize: "2rem" }}>
              <span className="Countnum">33</span>
            </h5>
            <p className="mb-0" style={{ color: "#131414", fontWeight: "600" }}>
              States Licensed Pharmacy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
