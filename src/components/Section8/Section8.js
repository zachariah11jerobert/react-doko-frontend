import React from "react";

const Section8 = () => {
  return (
    <section
      id="doctorlist-ph"
      class="screenshots-section ptb-100"
      style={{ display: "none" }}
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-8">
            <div class="section-heading mb-5 text-center">
              <h2>Some of our US Board Certified Doctors</h2>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              style={{ backgroundColor: "#009688" }}
              data-slide-to="0"
              class="active"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              style={{ backgroundColor: "#009688" }}
              data-slide-to="1"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              style={{ backgroundColor: "#009688" }}
              data-slide-to="2"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              style={{ backgroundColor: "#009688" }}
              data-slide-to="3"
            ></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="col-md-4">
                <div class="single-blog-card card border-0 shadow-sm">
                  <img
                    src="kn.png"
                    class="card-img-top position-relative inline_sec8_style_1"
                    alt="blog"
                  />
                  <div class="card-body">
                    <div
                      class="hero-content section-title text-center text-lg-left mt-lg-0"
                      //   style="text-align: center !important"
                    >
                      <h1 class="font-weight-bold" style={{ fontSize: "2rem" }}>
                        Dr. Kent Northcote
                      </h1>
                      <p class="lead" style={{ fontSize: "1rem" }}>
                        Emergency Medicine. 20 years of experience.
                      </p>
                      <div class="action-btn mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-md-4">
                <div class="single-blog-card card border-0 shadow-sm">
                  <img
                    src="maria.png"
                    class="card-img-top position-relative inline_sec8_style_1"
                    alt="blog"
                  />
                  <div class="card-body">
                    <div
                      class="hero-content section-title text-center text-lg-left mt-lg-0"
                      //   style="text-align: center !important"
                    >
                      <h1 class="font-weight-bold" style={{ fontSize: "2rem" }}>
                        Dr. Marianna Zelenak
                      </h1>
                      <p class="lead" style={{ fontSize: "1rem" }}>
                        Emergency Medicine. 20 years of experience.
                      </p>
                      <div class="action-btn mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="col-md-4">
                <div class="single-blog-card card border-0 shadow-sm">
                  <img
                    src="chris.png"
                    class="card-img-top position-relative inline_sec8_style_1"
                    alt="blog"
                  />
                  <div class="card-body">
                    <div
                      class="hero-content section-title text-center text-lg-left mt-lg-0"
                      //   style="text-align: center !important"
                    >
                      <h1 class="font-weight-bold" style={{ fontSize: "2rem" }}>
                        Dr. Christine Nguyen
                      </h1>
                      <p class="lead" style={{ fontSize: "1rem" }}>
                        Emergency Medicine. 20 years of experience.
                      </p>
                      <div class="action-btn mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-md-4">
                <div class="single-blog-card card border-0 shadow-sm">
                  <img
                    src="dd6.png"
                    class="card-img-top position-relative inline_sec8_style_1"
                    alt="blog"
                  />
                  <div class="card-body">
                    <div
                      class="hero-content section-title text-center text-lg-left mt-lg-0"
                      //   style="text-align: center !important"
                    >
                      <h1 class="font-weight-bold" style={{ fontSize: "2rem" }}>
                        And 100+ more Doctors
                      </h1>

                      <div class="action-btn mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
