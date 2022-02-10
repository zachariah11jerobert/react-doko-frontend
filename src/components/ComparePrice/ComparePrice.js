import React, { useState } from "react";
import "./compareprice.css";

const ComparePrice = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <section>
      <div className="center">
        <div className="box-content">
          <div className="box-left" data-aos="zoom-in">
            <div className="text-center">
              <h2 className="title">Compare </h2>
              <p className="subtitle">We Have Lowest Prices.</p>

              <div className="content">
                <p>
                  <b>
                    REX MD is your online source for men’s ED medications,
                    delivered
                    <br /> direct to your door for FREE. It’s Fast, Easy and
                    Affordable.
                  </b>
                </p>
                <p>
                  We guarantee the <span>lowest price per tablet</span> on
                  generic Viagra®, Cialis®, and
                  <br /> Cialis® Daily. Save up to 85% on generic ED medications
                  compared to any
                  <br /> telehealth provider - if you find a lower price we will
                  beat it, guaranteed.
                </p>
              </div>
            </div>
          </div>
          <div className="box-right" data-aos="zoom-in">
            <div className="tab">
              <ul className="tab-controls">
                <li data-tab="tab-1" onClick={() => setActiveTab("tab1")}>
                  <div>Sildenafil</div>
                </li>
                <li data-tab="tab-2" onClick={() => setActiveTab("tab2")}>
                  <div>Tadalafil</div>
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
                      <li className="selected">
                        <div>
                          <img
                            src="https://rexmd.com/home/04/img//rexmdlogo.svg"
                            alt=""
                          />
                        </div>
                        <div>100mg</div>
                        <div>
                          <b>$8.50</b>
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
                      <li className="selected">
                        <div>
                          <img
                            src="https://rexmd.com/home/04/img/rexmdlogo.svg"
                            alt=""
                          />
                        </div>
                        <div>2.5 or 5mg</div>
                        <div>
                          <b>$90/month</b>
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
