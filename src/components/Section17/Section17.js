import React from "react";

const Section17 = () => {
  return (
    <section id="contact" class="contact-us-section contact-us ptb-100">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-md-4">
            <div class="contact-us-content">
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
                <i class="ti-mobile" style={{ color: "#ffffffb8" }}></i>
                <a href="tel:+1-888-910-DOKO(3656)">1-888-910-DOKO(3656)</a>
              </span>
              <br />
            </div>
            <br />
          </div>
          <div class="col-md-4">
            <div class="contact-us-content">
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
                <i class="ti-mobile" style={{ color: "#ffffffb8" }}></i>
                <a href="tel:+1-888-910-DOKO(3656)">1-888-910-DOKO(3656)</a>
              </span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-us-content">
              <div class="row justify-content-around" id="dview">
                <div class="col-md-6" style={{ textAlign: "center" }}>
                  <img src="img/ata.svg" alt="ata" />
                </div>

                <div class="col-md-6" style={{ textAlign: "center" }}>
                  <script src="https://static.legitscript.com/seals/5343072.js"></script>
                </div>
              </div>
            </div>

            <br />
            <div style={{ textAlign: "center", marginTop: "0%" }}>
              <ul class="list-unstyled social-list mb-0">
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/in.doko.md" class="rounded">
                    <span class="ti-facebook white-bg color-2 shadow rounded-circle footer-social"></span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://twitter.com/doko_md" class="rounded">
                    <span class="ti-twitter white-bg color-2 shadow rounded-circle footer-social"></span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.instagram.com/doko.md/" class="rounded">
                    <span class="ti-instagram white-bg color-2 shadow rounded-circle footer-social"></span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://www.linkedin.com/company/doko-medical-inc/"
                    class="rounded"
                  >
                    <span class="ti-linkedin white-bg color-2 shadow rounded-circle footer-social"></span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://www.pinterest.ca/mktgdokomd/_saved/"
                    class="rounded"
                  >
                    <span class="ti-pinterest white-bg color-2 shadow rounded-circle footer-social"></span>
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
