import React from "react";

const CerifiedDoctorsCourousal = () => {
  return (
    <section id="doctorlist-ph">
      <div className="bg-theme-blue text-white pt-2 pb-2">
        <div className="justify-content-center" data-aos="zoom-in">
          <div className="text-center">
            <h3>Some of our US Board Certified Doctors</h3>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              style={{ backgroundColor: "#009688" }}
              data-slide-to="0"
              className="active"
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
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <img
                    src="https://doko.md/edpills/kn.png"
                    className="card-img-top position-relative inline_sec8_style_1"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div
                      className="hero-content section-title text-center text-lg-left mt-lg-0"
                      //   style="text-align: center !important"
                    >
                      <h1
                        className="font-weight-bold"
                        style={{ fontSize: "2rem" }}
                      >
                        Dr. Kent Northcote
                      </h1>
                      <p style={{ fontSize: "1rem" }}>
                        Emergency Medicine. 20 years of experience.
                      </p>
                      <div className="action-btn mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <img
                    src="https://doko.md/edpills/maria.png"
                    className="card-img-top position-relative inline_sec8_style_1"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div
                      className="hero-content section-title text-center text-lg-left mt-lg-0"
                      //   style="text-align: center !important"
                    >
                      <h1
                        className="font-weight-bold"
                        style={{ fontSize: "2rem" }}
                      >
                        Dr. Marianna Zelenak
                      </h1>
                      <p style={{ fontSize: "1rem" }}>
                        Emergency Medicine. 20 years of experience.
                      </p>
                      <div className="action-btn mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <img
                    src="https://doko.md/edpills/chris.png"
                    className="card-img-top position-relative inline_sec8_style_1"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div
                      className="hero-content section-title text-center text-lg-left mt-lg-0"
                      //   style="text-align: center !important"
                    >
                      <h1
                        className="font-weight-bold"
                        style={{ fontSize: "2rem" }}
                      >
                        Dr. Christine Nguyen
                      </h1>
                      <p style={{ fontSize: "1rem" }}>
                        Emergency Medicine. 20 years of experience.
                      </p>
                      <div className="action-btn mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <img
                    src="https://doko.md/edpills/dd6.png"
                    className="card-img-top position-relative inline_sec8_style_1"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div
                      className="hero-content section-title text-center text-lg-left mt-lg-0"
                      //   style="text-align: center !important"
                    >
                      <h1
                        className="font-weight-bold"
                        style={{ fontSize: "2rem" }}
                      >
                        And 100+ more Doctors
                      </h1>

                      <div className="action-btn mt-4"></div>
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

export default CerifiedDoctorsCourousal;
