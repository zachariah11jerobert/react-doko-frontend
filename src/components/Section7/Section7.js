import React from "react";

const Section7 = () => {
  return (
    <section
      class="our-blog-section ptb-100 gray-light-bg doctorlist-desk"
      style={{ padding: "0 0 0px" }}
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading mb-5">
              <h2>Some of our US Board Certified Doctors</h2>
              <p>Discuss it all with your healthcare provider</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <div class="single-blog-card card border-0 shadow-sm">
              <img
                src="https://doko.md/edpills/kn.png"
                class="card-img-top position-relative"
                alt="blog"
              />
              <div class="card-body" style={{ minHeight: "160px" }}>
                <h3 class="h5 card-title">
                  <a href="#">Dr. Kent Northcote</a>
                </h3>
                <p class="card-text">
                  Emergency Medicine. 20 years of experience.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="single-blog-card card border-0 shadow-sm">
              <img
                src="https://doko.md/edpills/chris.png"
                class="card-img-top position-relative"
                alt="blog"
              />
              <div class="card-body" style={{ minHeight: "160px" }}>
                <h3 class="h5 card-title">
                  <a href="#">Dr. Christine Nguyen</a>
                </h3>
                <p class="card-text">
                  Emergency Medicine. 20 years of experience.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="single-blog-card card border-0 shadow-sm">
              <img
                src="https://doko.md/edpills/maria.png"
                class="card-img-top"
                alt="blog"
              />
              <div class="card-body" style={{ minHeight: "160px" }}>
                <h3 class="h5 card-title">
                  <a href="#">Dr. Marianna Zelenak</a>
                </h3>
                <p class="card-text">
                  Emergency Medicine. 20 years of experience.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="single-blog-card card border-0 shadow-sm">
              <img
                src="https://doko.md/edpills/dd6.png"
                class="card-img-top"
                alt="blog"
              />
              <div class="card-body" style={{ minHeight: "160px" }}>
                <h3 class="h5 card-title">
                  <a href="#">And 100+ more Doctors</a>
                </h3>
                <p class="card-text">
                  Emergency Medicine. 20 years of experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
