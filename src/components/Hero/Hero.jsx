import React from "react";
import Comp1 from "../comp1/comp1";
import comp1 from "../comp1/comp1";

const Hero = () => {
  return (
    <section class="hero-section background-img inline_hero-section top01sec">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-7 col-lg-7">
            <div class="hero-content section-title text-center text-lg-left my-5 mt-lg-0">
              <span class="text-uppercase color-secondary font-weight-bold">
                Best Service Quality
              </span>
              <h1 class="font-weight-bold" style={{ color: "#fff" }}>
                ED Meds PrescribedOnline Delivered Free!
              </h1>
              <h3 style={{ color: "#fff", letterSpacing: 3 }}></h3>
              <p class="lead" style={{ color: "#dbd8d8" }}></p>
              <Comp1 />

              <div class="row" id="boxmobile01" style={{ display: "none" }}>
                <div class="col-12">
                  <div class="testimonial-quote-wrap .inline_testimonial-quote-wrap2 my-lg-3 my-md-3 rounded white-bg shadow-sm p-5">
                    <div class="client-say">
                      <p>FDA APPROVED</p>
                    </div>
                    <div
                      class="media author-info mb-3"
                      style={{ marginTop: "1%" }}
                    >
                      <div class="media-body">
                        <h5 class="mb-0" style={{ color: "#fff" }}>
                          Erectile Dysfunction
                        </h5>

                        <div class="row">
                          <div class="col-6">
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
                          <div class="col-6">
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
              <div class="row" id="boxmobile01" style={{ display: "none" }}>
                <div class="col-12">
                  <div class="testimonial-quote-wrap inline_testimonial-quote-wrap4 my-lg-3 my-md-3 rounded white-bg shadow-sm p-5">
                    <div class="client-say">
                      <p>FDA APPROVED</p>
                    </div>
                    <div class="media author-info mb-3">
                      <div class="media-body">
                        <h5 class="mb-0" style={{ color: "#fff" }}>
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

              <div class="action-btn mt-4">
                <a href="#edform" class="btn solid-btn page-scroll getitnow">
                  START MY FREE VISIT{" "}
                  <span class="ti-angle-double-right"></span>
                </a>
              </div>
            </div>

            <div class="row">
              <ul
                class="list-inline counter-wrap"
                style={{ width: "100%", textAlign: "center" }}
              >
                <li class="list-inline-item">
                  <div class="single-counter text-center">
                    <span>
                      <i
                        class="an-icon hide-650"
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
                <li class="list-inline-item">
                  <div class="single-counter text-center">
                    <span>
                      <i
                        class="an-icon"
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
          <div class="col-md-5 col-lg-5"></div>
        </div>

        <div class="row" id="">
          <div class="col-md-6"></div>
          <div class="col-md-6" style={{ textAlign: "center" }}>
            <img src="4.8new.png" style={{ width: 200 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
