import React from "react";
import "./section16.css";

const Section16 = () => {
  return (
    <section
      id="edform"
      class="contact-us gray-light-bg ptb-100 edform inline_sec16_style1"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-6">
            <div class="section-heading text-left mb-5">
              <h2 style={{ color: "#fff" }}>Real meds.</h2>
              <h2 style={{ color: "#fff" }}>Prescribed online.</h2>
              <h2 style={{ color: "#fff" }}>Delivered to your door.</h2>
              <p class="lead" style={{ color: "#fff" }}>
                Ready? Let’s do this!
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 pb-3 message-box d-none">
            <div class="alert alert-danger"></div>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div
              class=""
              style={{ backgroundColor: "#fff", borderRadius: "5px" }}
            >
              <form
                class="login-signup-form"
                id="registerform"
                style={{ padding: "15px" }}
              >
                <div id="id_wrap_first">
                  <div class="form-group">
                    <label class="pb-1"> First Name </label>

                    <div class="input-group input-group-merge">
                      <div class="input-icon">
                        <span class="ti-user color-primary"></span>
                      </div>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        class="form-control"
                        placeholder="Enter your first name"
                        style={{ backgroundColor: "#eee" }}
                      />
                      <input
                        type="hidden"
                        class="form-control"
                        name="reg_new_user"
                        id="reg_new_user"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="pb-1"> Last Name </label>

                    <div class="input-group input-group-merge">
                      <div class="input-icon">
                        <span class="ti-user color-primary"></span>
                      </div>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        class="form-control"
                        placeholder="Enter your last name"
                        style={{ backgroundColor: "#eee" }}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="pb-1"> Email Address </label>

                    <div class="input-group input-group-merge">
                      <div class="input-icon">
                        <span class="ti-email color-primary"></span>
                      </div>
                      <input
                        type="email"
                        name="regusername"
                        id="regusername"
                        class="form-control"
                        placeholder="name@address.com"
                        style={{ backgroundColor: "#eee" }}
                      />
                    </div>
                  </div>
                </div>

                <div id="id_wrap_other" class="no_display">
                  <div
                    id="back_btn"
                    style={{ color: "#3c4040", cursor: "pointer" }}
                  >
                    <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                  </div>
                  <br />
                  <div class="form-group">
                    <label class="pb-1"> Phone </label>

                    <div class="input-group input-group-merge">
                      <div class="input-icon">
                        <span class="ti-mobile color-primary"></span>
                      </div>
                      <input
                        type="number"
                        class="form-control"
                        name="mobileno"
                        id="mobileno"
                        placeholder="(xxx) xxx - xxxx"
                        style={{ backgroundColor: "#eee" }}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="pb-1"> States </label>

                    <div class="input-group input-group-merge">
                      <div class="input-icon">
                        <span class="ti-map color-primary"></span>
                      </div>
                      <select
                        class="form-control"
                        name="state"
                        id="state"
                        style={{ backgroundColor: "#eee" }}
                      >
                        <option value="1">Choose States</option>
                        <option value="10">FL</option>
                        <option value="44">TX</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div
                  class="form-check d-flex align-items-center text-center"
                  style={{ textAlign: "center" }}
                >
                  <label class="form-check-label small" for="exampleCheck1">
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
                  class="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                  id="register_check"
                >
                  START MY FREE VISIT
                  <span class="ti-angle-double-right"></span>
                </button>

                <button
                  type="button"
                  id="register"
                  class="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3 no_display"
                >
                  SUBMIT <span class="ti-angle-double-right"></span>
                </button>
              </form>
              <p class="form-message"></p>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
        <div class="row" style={{ display: "none" }} id="logismobile">
          <div class="col-12">
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
