import React from "react";
import CompPill from "../comppill/CompPill";

import "./Hero.css";

import svg1 from "../../assets/svg1.svg";
import HeroRibbon from "../HeroRibbon/HeroRibbon";
import BoxMobile from "../BoxMobile/BoxMobile";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-7 col-lg-7">
            <div className="text-center text-lg-left my-5 mt-lg-0">
              <span className="text-uppercase color-secondary font-weight-bold">
                Best Service Quality
              </span>
              <h1 className="font-weight-bold" style={{ color: "#fff" }}>
                ED Meds PrescribedOnline Delivered Free!
              </h1>
              <h3 style={{ color: "#fff", letterSpacing: 3 }}></h3>
              <p className="lead" style={{ color: "#dbd8d8" }}></p>

              <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                <div className="row" id="boxdesk01">
                  <div className="col-md-6">
                    <CompPill
                      tabletName="Viagra® (sildenafil)"
                      tabletImage="https://rexmd.com/home/04/img/viagra.png"
                      footerBackgroundColor="#33c7b8"
                    />
                  </div>
                  <div className="col-md-6">
                    <CompPill
                      tabletName="Cialis® (tadalafil)"
                      tabletImage="https://rexmd.com/home/04/img/cialis.png"
                      footerBackgroundColor="#e1a240"
                    />
                  </div>
                </div>
              </div>

              <div className="d-sm-block d-md-none d-lg-none d-xl-none">
                <BoxMobile />
              </div>

              <div className="mt-4">
                <a
                  href="#edform"
                  className="btn solid-btn page-scroll getitnow"
                >
                  <span className="hero_start_getit">
                    <span>START MY FREE VISIT</span>
                    <i
                      className="fa fa-angle-double-right fa-2x"
                      style={{ marginLeft: "5px" }}
                      // aria-hidden="true"
                    ></i>
                  </span>
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
                        {/* {svg1} */}
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
                        {/* {svg1} */}
                      </i>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 col-lg-5"></div>
        </div>
      </div>
      <div data-aos="fade-up">
        <HeroRibbon />
      </div>
    </section>
  );
};

export default Hero;