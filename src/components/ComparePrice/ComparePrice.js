import React, { useState } from "react";
import "./compareprice.css";

import dokologo from "../../assets/doko-logo.png";
import rexmdlogo from "../../assets/rexmdlogo.svg";
import roman_hu1cyf from "../../assets/roman_hu1cyf.webp";
import upscript_wb4sco from "../../assets/upscript_wb4sco.webp";
import lemonaid_oxu7de from "../../assets/lemonaid_oxu7de.webp";

const ComparePrice = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <section>
      <div className="center">
        <div className="box-content">
          <div className="box-left" data-aos="fade-up">
            <div className="pl-3 pr-3">
              <h3 className="title">
                Real Meds.
                <span style={{ color: "#a20e1e" }}>Lowest Prices.</span>
              </h3>

              <div className="content">
                <p>
                  We guarantee the{" "}
                  <span style={{ color: "#a20e1e" }}>
                    lowest price per tablet{" "}
                  </span>
                  on generic Viagra®, Cialis®.
                  <span style={{ color: "#a20e1e" }}>Save up to 85%</span> on
                  generic ED medications compared to any telehealth provider.
                </p>
                <p>if you find a lower price we will beat it, guaranteed.</p>
              </div>
            </div>
          </div>
          <div className="box-right" data-aos="fade-up">
            <div className="tab">
              <ul className="tab-controls">
                <li data-tab="tab-1" onClick={() => setActiveTab("tab1")}>
                  <div style={{ backgroundColor: "#4e95dd" }}>Sildenafil</div>
                </li>
                <li data-tab="tab-2" onClick={() => setActiveTab("tab2")}>
                  <div style={{ backgroundColor: "#e6a846" }}>Tadalafil</div>
                </li>
              </ul>
              <div className="tab-content">
                {activeTab == "tab1" ? (
                  <div className="tab-1 active">
                    <ul>
                      <li className="title">
                        <div>BRAND</div>
                        <div>SILDENAFIL</div>
                        <div>PRICE PER TABLETS</div>
                      </li>
                      <li
                        className="selected"
                        style={{ backgroundColor: "#1c2c46" }}
                      >
                        <div style={{ height: 30 }}>
                          <img src={dokologo} style={{ width: "100%" }} />
                        </div>
                        <div className="text-white">100mg</div>
                        <div className="text-white">
                          <b>$1.00</b>
                          <i
                            className="an-icon"
                            data-src="cheсkbox_green"
                            data-render="svg"
                            data-start="true"
                          ></i>
                        </div>
                      </li>
                      <li>
                        <div style={{ height: 30 }}>
                          <img src={rexmdlogo} style={{ width: "100%" }} />
                        </div>
                        <div>100mg</div>
                        <div>$3.00</div>
                      </li>
                      <li>
                        <div>
                          <img src={roman_hu1cyf} alt="" />
                          <sup>®</sup>
                        </div>
                        <div>100mg</div>
                        <div>$8.00</div>
                      </li>
                      <li>
                        <div>
                          <img src={upscript_wb4sco} alt="" />
                          <sup>®</sup>
                        </div>
                        <div>100mg</div>
                        <div>$8.00</div>
                      </li>
                    </ul>
                  </div>
                ) : null}
                {activeTab == "tab2" ? (
                  <div className="tab-2">
                    <ul>
                      <li className="title">
                        <div>BRAND</div>
                        <div>TADALAFIL</div>
                        <div>PRICE PER TABLET</div>
                      </li>
                      <li
                        className="selected"
                        style={{ backgroundColor: "#1c2c46" }}
                      >
                        <div style={{ height: 30 }}>
                          <img src={dokologo} style={{ width: "100%" }} />
                        </div>
                        <div className="text-white">2.5 or 5mg</div>
                        <div className="text-white">
                          <b>$1.00</b>
                          <i
                            className="an-icon"
                            data-src="cheсkbox_green"
                            data-render="svg"
                            data-start="true"
                          ></i>
                        </div>
                      </li>
                      <li>
                        <div style={{ height: 30 }}>
                          <img src={rexmdlogo} style={{ width: "100%" }} />
                        </div>
                        <div>2.5 or 5mg</div>
                        <div>$3.00</div>
                      </li>
                      <li>
                        <div>
                          <img src={roman_hu1cyf} alt="" />
                          <sup>®</sup>
                        </div>
                        <div>2.5 or 5mg</div>
                        <div>$8.00</div>
                      </li>
                      <li>
                        <div>
                          <img src={lemonaid_oxu7de} alt="" />
                          <sup>®</sup>
                        </div>
                        <div>2.5 or 5mg</div>
                        <div>$8.00</div>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparePrice;
