import React from "react";
import "./section17.css";

const Section17 = () => {
  return (
    <section
      id="contact"
      className="contact-us-section contact-us ptb-100"
      style={{
        backgroundImage:
          "linear-gradient(to right, #1c2c46, #1c2c46e3, #1c2c46d1, #1c2c46c2, #1c2c46)",
      }}
    >
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-4">
            <div className="contact-us-content">
              <img
                src="https://doko.md/img/usa.svg"
                alt="usa-flag"
                style={{ width: "20px" }}
              />
              <h5 style={{ color: "#fff" }}>Our Headquarters - USA</h5>
              <address style={{ color: "#fff" }}>
                611 Gateway Blvd Suite 120, San Francisco,
                <br />
                CA 94080, United States
              </address>
              <span>
                <i className="ti-mobile" style={{ color: "#ffffffb8" }}></i>
                <a href="tel:+1-888-910-DOKO(3656)">1-888-910-DOKO(3656)</a>
              </span>
              <br />
            </div>
            <br />
          </div>
          <div className="col-md-4">
            <div className="contact-us-content">
              <img
                src="https://doko.md/img/canada.svg"
                alt="canada-flag"
                style={{ width: "20px" }}
              />
              <h5 style={{ color: "#fff" }}>Our Headquarters - Canada</h5>
              <address style={{ color: "#fff" }}>
                3500 - 2 Bloor St E., <br />
                Toronto ON M4W 1A8,
              </address>
              <span>
                <i className="ti-mobile" style={{ color: "#ffffffb8" }}></i>
                <a href="tel:+1-888-910-DOKO(3656)">1-888-910-DOKO(3656)</a>
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-us-content">
              <div className="row justify-content-around" id="dview">
                <div className="col-md-6" style={{ textAlign: "center" }}>
                  <img src="https://doko.md/edpills/img/ata.svg" alt="ata" />
                </div>

                <div className="col-md-6" style={{ textAlign: "center" }}>
                  <img src="https://static.legitscript.com/seals/5343072.png" />
                </div>
              </div>
            </div>

            <br />
            <div style={{ textAlign: "center", marginTop: "0%" }}>
              <ul className="list-unstyled social-list mb-0">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/in.doko.md"
                    className="rounded"
                  >
                    <span className="white-bg color-2 shadow rounded-circle footer-social">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/doko_md" className="rounded">
                    <span className="white-bg color-2 shadow rounded-circle footer-social">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/doko.md/"
                    className="rounded"
                  >
                    <span className="white-bg color-2 shadow rounded-circle footer-social">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/company/doko-medical-inc/"
                    className="rounded"
                  >
                    <span className="white-bg color-2 shadow rounded-circle footer-social">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.pinterest.ca/mktgdokomd/_saved/"
                    className="rounded"
                  >
                    <span className="ti-pinterest white-bg color-2 shadow rounded-circle footer-social">
                      <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section17;
