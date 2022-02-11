import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-bottom gray-light-bg py-3">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-md-6 col-lg-6">
              <p className="copyright-text pb-0 mb-0">
                <a href="../privacy" target="_blank">
                  Privacy Policy
                </a>{" "}
                |
                <a href="../terms-of-use" target="_blank">
                  Terms of Use
                </a>{" "}
                |
                <a href="../telemedicine-consent" target="_blank">
                  Telemedicine Consent
                </a>
                |{" "}
                <a href="../refund-policy" target="_blank">
                  Refund policy
                </a>
              </p>
            </div>
            <div className="col-md-6 col-lg-6">
              <p className="copyright-text pb-0 mb-0">
                Copyrights © 2022. All rights reserved by
                <br />
                <a href="" target="_blank">
                  Doko Medical Inc.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
