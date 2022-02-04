import React from "react";
import "./section16.css";

const Section16 = () => {
  return (
    <section
      id="edform"
      className="contact-us gray-light-bg ptb-100 edform inline_sec16_style1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
            <div className="section-heading text-left mb-5">
              <h2 style={{ color: "#fff" }}>Real meds.</h2>
              <h2 style={{ color: "#fff" }}>Prescribed online.</h2>
              <h2 style={{ color: "#fff" }}>Delivered to your door.</h2>
              <p className="lead" style={{ color: "#fff" }}>
                Ready? Let’s do this!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pb-3 message-box d-none">
            <div className="alert alert-danger"></div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div
              className=""
              style={{ backgroundColor: "#fff", borderRadius: "5px" }}
            >
              <form
                className="login-signup-form"
                id="registerform"
                style={{ padding: "15px" }}
              >
                <div id="id_wrap_first">
                  <div className="form-group">
                    <label className="pb-1"> First Name </label>

                    <div className="input-group input-group-merge">
                      <div className="input-icon">
                        <i
                          className="fa fa-user-o fa-2x color-primary"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="form-control"
                        placeholder="Enter your first name"
                        style={{ backgroundColor: "#eee" }}
                      />
                      <input
                        type="hidden"
                        className="form-control"
                        name="reg_new_user"
                        id="reg_new_user"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="pb-1"> Last Name </label>

                    <div className="input-group input-group-merge">
                      <div className="input-icon">
                        <i
                          className="fa fa-user-o fa-2x color-primary"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="form-control"
                        placeholder="Enter your last name"
                        style={{ backgroundColor: "#eee" }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="pb-1"> Email Address </label>

                    <div className="input-group input-group-merge">
                      <div className="input-icon">
                        <i
                          className="fa fa-envelope-o fa-2x color-primary"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <input
                        type="email"
                        name="regusername"
                        id="regusername"
                        className="form-control"
                        placeholder="name@address.com"
                        style={{ backgroundColor: "#eee" }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="pb-1"> Phone </label>

                    <div className="input-group input-group-merge">
                      <div className="input-icon">
                        <i
                          className="fa fa-mobile fa-3x color-primary"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        name="mobileno"
                        id="mobileno"
                        placeholder="(xxx) xxx - xxxx"
                        style={{ backgroundColor: "#eee" }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="form-check d-flex align-items-center text-center"
                  style={{ textAlign: "center" }}
                >
                  <label className="form-check-label small" for="exampleCheck1">
                    By Signing Up, you agree to our
                    <a
                      href="https://doko.md/privacy"
                      style={{ color: "#3ebeb4" }}
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                    ,
                    <a
                      href="https://doko.md/terms-of-use"
                      style={{ color: "#3ebeb4" }}
                      target="_blank"
                    >
                      Terms of Use
                    </a>
                    ,
                    <a
                      href="https://doko.md/telemedicine-consent"
                      style={{ color: "#3ebeb4" }}
                      target="_blank"
                    >
                      Telemedicine Consent
                    </a>
                    and
                    <a
                      href="https://doko.md/refund-policy"
                      style={{ color: "#3ebeb4" }}
                      target="_blank"
                    >
                      Refund policy.
                    </a>
                  </label>
                </div>

                <button
                  type="button"
                  className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                  id="register_check"
                >
                  START MY FREE VISIT
                </button>

                <button
                  type="button"
                  id="register"
                  className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3 no_display"
                >
                  SUBMIT
                </button>
              </form>
              <p className="form-message"></p>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row" style={{ display: "none" }} id="logismobile">
          <div className="col-12">
            <div style={{ textAlign: "center" }}>
              <img
                src="https://static.legitscript.com/seals/5343072.png"
                style={{ marginTop: "6%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section16;
