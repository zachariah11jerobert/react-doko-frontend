import React from "react";
import "./section10.css";

const Section10 = () => {
  return (
    <section
      className="our-partner-section ptb-100 gray-light-bg"
      id="itemslide-desk"
      style={{ padding: "50px 0" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div
              className="section-heading mb-5"
              style={{ textAlign: "center", width: "100%" }}
            >
              <br />
              <h2>Did you know...?</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 col-lg-1"></div>
          <div className="col-md-2 col-lg-2">
            <div className="single-partner-wrap card-bottom-line rounded text-center p-4 inline_sec10_style1">
              <div className="partner-logo mb-3">
                <img
                  src="https://doko.md/edpills/xr-1.png"
                  alt="partner logo"
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
          <div className="col-md-2 col-lg-2">
            <div className="single-partner-wrap card-bottom-line rounded text-center p-4 inline_sec10_style1">
              <div className="partner-logo mb-3">
                <img
                  src="https://doko.md/edpills/xr-2.png"
                  alt="partner logo"
                  className="img-fluid"
                />
              </div>
              <div className="partner-heading mb-2">
                <h5 className="mb-0">Mental Health</h5>
                <h6>
                  <strong>
                    10% to 20% of all ED cases are caused by stress and anxiety
                  </strong>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-2">
            <div className="single-partner-wrap card-bottom-line rounded text-center p-4 inline_sec10_style1">
              <div className="partner-logo mb-3">
                <img
                  src="https://doko.md/edpills/xr-3.png"
                  alt="partner logo"
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

          <div className="col-md-2 col-lg-2">
            <div className="single-partner-wrap card-bottom-line rounded text-center p-4 inline_sec10_style1">
              <div className="partner-logo mb-3">
                <img
                  src="https://doko.md/edpills/xr-5.png"
                  alt="partner logo"
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
          <div className="col-md-2 col-lg-2">
            <div className="single-partner-wrap card-bottom-line rounded text-center p-4 inline_sec10_style1">
              <div className="partner-logo mb-3">
                <img
                  src="https://doko.md/edpills/xr-6.png"
                  alt="partner logo"
                  className="img-fluid"
                />
              </div>
              <div className="partner-heading mb-2">
                <h5 className="mb-0">Its Physical</h5>
                <h6>
                  <strong>80% of all cases are down to physical reasons</strong>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
