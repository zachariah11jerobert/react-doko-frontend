import React, { useState } from "react";
import "./compareprice.css";

import dokologo from "../../assets/doko-logo.png";

const ComparePrice = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <section>
      <div className="center">
        <div className="box-content">
          <div className="box-left" data-aos="zoom-in">
            <div className="pl-3 pr-3">
              <h2 className="title">
                Real Meds. <br />
                <span style={{ color: "#a20e1e" }}>Lowest Prices.</span>
              </h2>

              <div className="content">
                <p>
                  We guarantee the{" "}
                  <span style={{ color: "#a20e1e" }}>
                    lowest price per tablet{" "}
                  </span>
                  on generic Viagra®, Cialis® <br />
                  <span style={{ color: "#a20e1e" }}>Save up to 85%</span> on
                  generic ED medications compared to any telehealth provider -
                  <br />
                  if you find a lower price we will beat it, guaranteed.
                </p>
              </div>
            </div>
          </div>
          <div className="box-right" data-aos="zoom-in">
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
                        <div>100MG SILDENAFIL</div>
                        <div>PRICE PER TABLETS</div>
                      </li>
                      <li
                        className="selected"
                        style={{ backgroundColor: "#e6f0fb" }}
                      >
                        <div style={{ height: 30 }}>
                          <img src={dokologo} style={{ width: "100%" }} />
                        </div>
                        <div>100mg</div>
                        <div>
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
                        <div>
                          <img
                            src="https://rexmd.com/home/04/img//rexmdlogo.svg"
                            alt=""
                          />
                        </div>
                        <div>100mg</div>
                        <div>
                          $8.50
                          <i
                            className="an-icon"
                            data-src="cheсkbox_green"
                            data-render="svg"
                            data-start="true"
                          ></i>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="https://rexmd.com/home/04/img/roman_hu1cyf.webp"
                            alt=""
                          />
                          <sup>®</sup>
                        </div>
                        <div>100mg</div>
                        <div>$34.00</div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="https://rexmd.com/home/04/img/upscript_wb4sco.webp"
                            alt=""
                          />
                          <sup>®</sup>
                        </div>
                        <div>100mg</div>
                        <div>$24.00</div>
                      </li>
                    </ul>
                  </div>
                ) : null}
                {activeTab == "tab2" ? (
                  <div className="tab-2">
                    <ul>
                      <li className="title">
                        <div>BRAND</div>
                        <div>CIALIS DAILY, 30 DAY SUPPLY</div>
                        <div>PRICE PER TABLET</div>
                      </li>
                      <li
                        className="selected"
                        style={{ backgroundColor: "#e6f0fb" }}
                      >
                        <div style={{ height: 30 }}>
                          <img src={dokologo} style={{ width: "100%" }} />
                        </div>
                        <div>2.5 or 5mg</div>
                        <div>
                          <b>$1/month</b>
                          <i
                            className="an-icon"
                            data-src="cheсkbox_green"
                            data-render="svg"
                            data-start="true"
                          ></i>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="https://rexmd.com/home/04/img/rexmdlogo.svg"
                            alt=""
                          />
                        </div>
                        <div>2.5 or 5mg</div>
                        <div>
                          $90/month
                          <i
                            className="an-icon"
                            data-src="cheсkbox_green"
                            data-render="svg"
                            data-start="true"
                          ></i>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="https://rexmd.com/home/04/img/roman_hu1cyf.webp"
                            alt=""
                          />
                          <sup>®</sup>
                        </div>
                        <div>2.5 or 5mg</div>
                        <div>$240/month</div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="https://rexmd.com/home/04/img/lemonaid_oxu7de.png"
                            alt=""
                          />
                          <sup>®</sup>
                        </div>
                        <div>2.5 or 5mg</div>
                        <div>$240/month</div>
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
