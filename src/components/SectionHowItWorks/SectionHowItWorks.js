import React from "react";
import deskHowItWorks from "../../assets/desk-how-work2.png";
import mobileHowItWorks from "../../assets/ph-how-work.png";

const SectionHowItWorks = () => {
  return (
    <>
      <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
        <section
          className="ptb-100"
          id="htwdesk"
          style={{ padding: "20px 0 100px" }}
        >
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading mb-5 text-center">
                  <h1>How It Works</h1>
                  <p>It’s quick and easy! Here are the steps:</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-between align-items-center">
              <div className="col-md-12 col-lg-12">
                <div className="img-wrap">
                  <img
                    src={deskHowItWorks}
                    alt="how work"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="d-sm-block d-md-none d-lg-none d-xl-none">
        <section className="gray-light-bg" id="htwph" data-aos="fade-up">
          <div className="container">
            <div className="section-heading  text-center">
              <h1 style={{ color: "#28c3b5" }}>How It Works</h1>
              <p>It’s quick and easy! Here are the steps:</p>
            </div>
            <div className="justify-content-between align-items-center">
              <div className="img-wrap">
                <img
                  src={mobileHowItWorks}
                  alt="how work"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionHowItWorks;
