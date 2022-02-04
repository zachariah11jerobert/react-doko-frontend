import React, { useState } from "react";
import "./compareprice.css";

const ComparePrice = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <section class="price-real">
      <div class="center">
        <div class="box-content">
          <div class="box-left">
            <div class="tx-center">
              <h2 class="title js-scroll fade-top">
                Real Meds.
                <br class="show-650" hidden /> <span>Lowest Prices.</span>
              </h2>
              <p class="subtitle js-scroll fade-top">
                We're not just ED, we're the best in men’s telehealth.
              </p>

              <p class="first js-scroll fade-top">
                <b>
                  REX MD is your online source for men’s ED medications,
                  delivered
                  <br /> direct to your door for FREE. It’s Fast, Easy and
                  Affordable.
                </b>
              </p>
              <p class="js-scroll fade-top">
                We guarantee the <span>lowest price per tablet</span> on generic
                Viagra®, Cialis®, and
                <br /> Cialis® Daily. Save up to 85% on generic ED medications
                compared to any
                <br /> telehealth provider - if you find a lower price we will
                beat it, guaranteed.
              </p>
            </div>
          </div>
          <div class="box-right">
            <div class="tab">
              <ul class="tab-controls js-scroll fade-top">
                <li data-tab="tab-1" onClick={()=>setActiveTab("tab1")}>
                  <div>Sildenafil</div>
                </li>
                <li data-tab="tab-2" onClick={()=>setActiveTab("tab2")}>
                  <div>Tadalafil</div>
                </li>
              </ul>
              <div class="tab-content">
                {activeTab == "tab1" ? (
                  <div class="tab-1 active">
                    <ul>
                      <li class="title">
                        <div>BRAND</div>
                        <div>100MG SILDENAFIL</div>
                        <div>PRICE PER TABLETS</div>
                      </li>
                      <li class="selected">
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
                            class="an-icon"
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
                  <div class="tab-2">
                    <ul>
                      <li class="title">
                        <div>BRAND</div>
                        <div>CIALIS DAILY, 30 DAY SUPPLY</div>
                        <div>PRICE PER TABLET</div>
                      </li>
                      <li class="selected">
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
                            class="an-icon"
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
