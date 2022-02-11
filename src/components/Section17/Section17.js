import React from "react";
import "./section17.css";

const Section17 = () => {
  return (
    <section id="contact" className="bg-theme-blue pb-2">
      <div className="pb-3">
        <div className="contact-us-content pt-2 pb-2 pl-3">
          <div className="flex-row-sc">
            <img
              src="https://doko.md/img/usa.svg"
              alt="usa-flag"
              style={{ width: "20px" }}
              className="mr-2"
            />
            <h5 style={{ color: "#fff" }}>Our Headquarters - USA</h5>
          </div>
          <address style={{ color: "#fff" }}>
            611 Gateway Blvd Suite 120, San Francisco,
            <br />
            CA 94080, United States
          </address>
          <span>
            <i className="ti-mobile" style={{ color: "#ffffffb8" }}></i>
            <a href="tel:+1-888-910-DOKO(3656)" className="text-white">
              1-888-910-DOKO(3656)
            </a>
          </span>
          <br />
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-us-content">
          <div className="d-flex justify-content-around" id="dview">
            <div>
              <img src="https://doko.md/edpills/img/ata.svg" alt="ata" />
            </div>

            <div>
              <img src="https://static.legitscript.com/seals/5343072.png" />
            </div>
          </div>
        </div>

        <br />
        <div style={{ textAlign: "center", marginTop: "0%" }}>
          <ul className="list-unstyled social-list mb-0">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/in.doko.md" className="rounded">
                <span className="white-bg color-2 shadow rounded-circle footer-social">
                  <i
                    className="fa fa-facebook fa-2x text-white"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/doko_md" className="rounded">
                <span className="white-bg color-2 shadow rounded-circle footer-social">
                  <i
                    className="fa fa-twitter fa-2x text-white"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/doko.md/" className="rounded">
                <span className="white-bg color-2 shadow rounded-circle footer-social">
                  <i
                    className="fa fa-instagram fa-2x text-white"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/company/doko-medical-inc/"
                className="rounded"
              >
                <span className="white-bg color-2 shadow rounded-circle footer-social">
                  <i
                    className="fa fa-linkedin fa-2x text-white"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.pinterest.ca/mktgdokomd/_saved/"
                className="rounded"
              >
                <span className="ti-pinterest white-bg color-2 shadow rounded-circle footer-social">
                  <i
                    className="fa fa-pinterest fa-2x text-white"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section17;
