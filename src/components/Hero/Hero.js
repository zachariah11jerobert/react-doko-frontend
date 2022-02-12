import React from "react";
import CompPill from "../comppill/CompPill";

import "./Hero.css";
import HeroRibbon from "../HeroRibbon/HeroRibbon";
import BoxMobile from "../BoxMobile/BoxMobile";

import svg1 from "../../assets/svg1.svg";
import svg2 from "../../assets/svg2.svg";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="align-items-center justify-content-between">
        <div className="">
          <div className="text-center text-lg-left mt-lg-0">
            <h2 className="font-weight-bold mb-5" style={{ color: "#fff" }}>
              ED Meds Prescribed Online & Delivered Free!
            </h2>

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

            <div className="d-sm-block d-md-none d-lg-none d-xl-none mt-3">
              <BoxMobile />
            </div>

            <div className="mt-5 mb-5">
              <a href="#edform" className="btn solid-btn page-scroll getitnow">
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

            <div className="flex-row mb-5">
              <img src={svg1} />
              <img src={svg2} />
            </div>
          </div>
        </div>
      </div>

      <div className="pl-3 pr-3" data-aos="fade-up">
        <HeroRibbon />
      </div>
    </section>
  );
};

export default Hero;
