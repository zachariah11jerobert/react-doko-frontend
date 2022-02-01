import React from "react";

const Section2 = () => {
  return (
    <section style={{ backgroundColor: "#1c2c46" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-4 mb-lg-0">
            <div class="single-fact text-center">
              <img
                src="https://dokocrm.com/telemed/mailicon3.png"
                class="card-img-top"
                style={{ width: "35%" }}
                alt="blog"
              />
              <h4 style={{ color: "#fff" }}>No Monthly</h4>
              <p
                style={{
                  color: "#ffffffad",
                  fontSize: "17px",
                }}
              >
                Commitment.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-4 mb-lg-0">
            <div class="single-fact  text-center">
              <img
                src="https://dokocrm.com/telemed/mailicon1.png"
                class="card-img-top position-relative"
                alt="blog"
                style={{ width: "35%" }}
              />
              <h4 style={{ color: "#fff" }}>FREE Doctor</h4>
              <p
                style={{
                  color: "#ffffffad",
                  fontSize: "17px",
                }}
              >
                Consultations
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-4 mb-lg-0">
            <div class="single-fact text-center">
              <img
                src="https://dokocrm.com/telemed/mailicon2.png"
                class="card-img-top position-relative"
                style={{ width: "35%" }}
                alt="blog"
              />
              <h4 style={{ color: "#fff" }}>No Membership</h4>
              <p
                style={{
                  color: "#ffffffad",
                  fontSize: "17px",
                }}
              >
                Fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
