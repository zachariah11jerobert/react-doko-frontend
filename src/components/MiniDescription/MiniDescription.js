import React from "react";
import "./minidescription.css";

import img1 from "../../assets/numb-doc.png";
import img2 from "../../assets/numb-list.png";
import img3 from "../../assets/numb-states.png";

const MiniDescription = () => {
  return (
    <section className="ptb-30 bg-theme-blue" id="itemslide-ph">
      <div className="d-flex justify-content-around align-item-center flex-wrap">
        <div className="box_content" data-aos="fade-up">
          <div className="client-img">
            <img src={img1} alt="client" className="img-fluid" />
          </div>
          <div className="margin-minus-left-fix">
            <h5 className="mb-0 text-white" style={{ fontSize: "2rem" }}>
              <span className="text-white">100</span>+
            </h5>
            <p className="mb-0 text-white" style={{ fontWeight: "600" }}>
              U.S Board Certified Doctors
            </p>
          </div>
        </div>

        <div className="box_content" data-aos="fade-up">
          <div className="client-img">
            <img
              src={img2}
              alt="client"

              // className="img-fluid"
            />
          </div>
          <div className="margin-minus-left-fix">
            <h5 className="mb-0 text-white" style={{ fontSize: "2rem" }}>
              <span className="text-white">10000</span>+
            </h5>
            <p className="mb-0 text-white" style={{ fontWeight: "600" }}>
              Prescriptions Delivered
            </p>
          </div>
        </div>

        <div className="box_content" data-aos="fade-up">
          <div className="client-img">
            <img src={img3} alt="client" className="img-fluid" />
          </div>
          <div className="margin-minus-left-fix">
            <h5 className="mb-0 text-white" style={{ fontSize: "2rem" }}>
              <span className="text-white">33</span>
            </h5>
            <p className="mb-0 text-white" style={{ fontWeight: "600" }}>
              States Licensed Pharmacy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniDescription;
