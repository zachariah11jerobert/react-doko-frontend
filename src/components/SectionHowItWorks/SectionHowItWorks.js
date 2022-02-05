import React from "react";

const SectionHowItWorks = () => {
  return (
    <>
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
                <p >It’s quick and easy! Here are the steps:</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-md-12 col-lg-12">
              <div className="img-wrap">
                <img
                  src="https://doko.md/edpills/desk-how-work2.png"
                  alt="how work"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="gray-light-bg"
        style={{ display: "none", padding: "50px 0" }}
        id="htwph"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12">
              <div className="section-heading  text-center">
                <h1 style={{ color: "#28c3b5" }}>How It Works</h1>
                <p >It’s quick and easy! Here are the steps:</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-md-12 col-lg-12">
              <div className="img-wrap">
                <img
                  src="https://doko.md/edpills/desk-how-work2.png"
                  alt="how work"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionHowItWorks;
