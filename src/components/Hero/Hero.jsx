import React from "react";
import Comp1 from "../comp1/comp1";

import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-section background-img inline_hero-section top01sec">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-7 col-lg-7">
            <div className="hero-content section-title text-center text-lg-left my-5 mt-lg-0">
              <span className="text-uppercase color-secondary font-weight-bold">
                Best Service Quality
              </span>
              <h1 className="font-weight-bold" style={{ color: "#fff" }}>
                ED Meds PrescribedOnline Delivered Free!
              </h1>
              <h3 style={{ color: "#fff", letterSpacing: 3 }}></h3>
              <p className="lead" style={{ color: "#dbd8d8" }}></p>
              <Comp1 />

              <div className="row" id="boxmobile01" style={{ display: "none" }}>
                <div className="col-12">
                  <div className="testimonial-quote-wrap .inline_testimonial-quote-wrap2 my-lg-3 my-md-3 rounded white-bg shadow-sm p-5">
                    <div className="client-say">
                      <p>FDA APPROVED</p>
                    </div>
                    <div
                      className="media author-info mb-3"
                      style={{ marginTop: "1%" }}
                    >
                      <div className="media-body">
                        <h5 className="mb-0" style={{ color: "#fff" }}>
                          Erectile Dysfunction
                        </h5>

                        <div className="row">
                          <div className="col-6">
                            <div>
                              <img
                                src="https://rexmd.com/home/04/img/viagra.png"
                                style={{ marginTop: "6%" }}
                              />
                              <br />
                              <span style={{ marginTop: "0%" }}>
                                Viagra® (sildenafil)
                              </span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div>
                              <img
                                src="https://rexmd.com/home/04/img/cialis.png"
                                style={{ marginTop: "6%" }}
                              />
                              <br />
                              <span style={{ marginTop: "0%" }}>
                                Cialis® (tadalafil)
                              </span>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div className="inline_pill1">From $1 per pill</div>
                  </div>
                </div>
              </div>
              <div className="row" id="boxmobile01" style={{ display: "none" }}>
                <div className="col-12">
                  <div className="testimonial-quote-wrap inline_testimonial-quote-wrap4 my-lg-3 my-md-3 rounded white-bg shadow-sm p-5">
                    <div className="client-say">
                      <p>FDA APPROVED</p>
                    </div>
                    <div className="media author-info mb-3">
                      <div className="media-body">
                        <h5 className="mb-0" style={{ color: "#fff" }}>
                          Erectile Dysfunction
                        </h5>
                        <p>
                          Viagra® (sildenafil){" "}
                          <span style={{ fontSize: 18 }}> </span> Cialis®
                          (tadalafil)
                        </p>
                        <div>
                          <img
                            src="https://doko.md/edpills/googleedimg.png"
                            style={{ marginTop: "0%", width: 200 }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline_pill2">From $1 per pill</div>
                  </div>
                </div>
              </div>

              <div className="action-btn mt-4">
                <a href="#edform" className="btn solid-btn page-scroll getitnow">
                  START MY FREE VISIT{" "}
                  <span className="ti-angle-double-right"></span>
                </a>
              </div>
            </div>

            <div className="row">
              <ul
                className="list-inline counter-wrap"
                style={{ width: "100%", textAlign: "center" }}
              >
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    <span>
                      <i
                        className="an-icon hide-650"
                        data-src="hippa_white"
                        data-render="svg"
                        data-start="false"
                        style={{ width: "9%" }}
                      >
                        {/* svg1 goes here */}
                      </i>
                    </span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    <span>
                      <i
                        className="an-icon"
                        data-src="pharmacy_white"
                        data-render="svg"
                        data-start="false"
                      >
                        {/* svg2 goes here */}
                      </i>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 col-lg-5"></div>
        </div>

        <div className="row" id="">
          <div className="col-md-6"></div>
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <img src="https://doko.md/edpills/4.8new.png" style={{ width: 200 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
