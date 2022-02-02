import React from "react";
import "./Section6.css";

const Section6 = () => {
  return (
    <section
      className="our-partner-section ptb-100 inline_sec6_style1"
      id="itemslide-ph"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <div
              className="client-info-wrap d-flex align-items-center mt-5 numb"
              style={{ backgroundColor: "#ffffff8c", border: "none" }}
            >
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
          </div>
          <div className="col-md-4 col-lg-4">
            <div
              className="client-info-wrap d-flex align-items-center mt-5 numb"
              style={{ backgroundColor: "#ffffff8c", border: "none" }}
            >
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
          </div>
          <div className="col-md-4 col-lg-4">
            <div
              className="client-info-wrap d-flex align-items-center mt-5 numb"
              style={{ backgroundColor: "#ffffff8c", border: "none" }}
            >
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
        </div>
      </div>
      <br />
      <br />
      <div className="container-fluid">
        <div className="owl-slider">
          <div id="carousel" className="owl-carousel">
            <div className="item">
              <div
                className="single-partner-wrap card-bottom-line  rounded text-center p-4"
                style={{ height: "295px" }}
              >
                <div className="partner-logo mb-3">
                  <img
                    src="xr-1.png"
                    alt="partner logo"
                    style={{ marginLeft: "20%" }}
                    className="img-fluid"
                  />
                </div>
                <div className="partner-heading mb-2">
                  <h5 className="mb-0">Getting Help</h5>
                  <h6>
                    <strong>Only 33% of men seek help about their ED</strong>
                  </h6>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="single-partner-wrap card-bottom-line   rounded text-center p-4"
                style={{ height: "295px" }}
              >
                <div className="partner-logo mb-3">
                  <img
                    src="xr-2.png"
                    alt="partner logo"
                    style={{ marginLeft: "22%" }}
                    className="img-fluid"
                  />
                </div>
                <div className="partner-heading mb-2">
                  <h5 className="mb-0">Mental Health</h5>
                  <h6>
                    <strong>
                      10% to 20% of all ED cases are caused by stress and
                      anxiety
                    </strong>
                  </h6>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="single-partner-wrap card-bottom-line   rounded text-center p-4"
                style={{ height: "295px" }}
              >
                <div className="partner-logo mb-3">
                  <img
                    src="xr-3.png"
                    alt="partner logo"
                    style={{ marginLeft: "20%" }}
                    className="img-fluid"
                  />
                </div>
                <div className="partner-heading mb-2">
                  <h5 className="mb-0">You are not alone</h5>
                  <h6>
                    <strong>1 in 10 men suffer from ED</strong>
                  </h6>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="single-partner-wrap card-bottom-line  rounded text-center p-4"
                style={{ height: "295px" }}
              >
                <div className="partner-logo mb-3">
                  <img
                    src="xr-5.png"
                    alt="partner logo"
                    style={{ marginLeft: "20%" }}
                    className="img-fluid"
                  />
                </div>
                <div className="partner-heading mb-2">
                  <h5 className="mb-0">Sign of Diabetes</h5>
                  <h6>
                    <strong>of all men who have diabetes suffer from ED</strong>
                  </h6>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="single-partner-wrap card-bottom-line   rounded text-center p-4"
                style={{ height: "295px" }}
              >
                <div className="partner-logo mb-3">
                  <img
                    src="xr-6.png"
                    alt="partner logo"
                    style={{ marginLeft: "20%" }}
                    className="img-fluid"
                  />
                </div>
                <div className="partner-heading mb-2">
                  <h5 className="mb-0">Its Physical</h5>
                  <h6>
                    <strong>
                      80% of all cases are down to physical reasons
                    </strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
