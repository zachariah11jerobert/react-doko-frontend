import React from "react";

const CertifiedDoctors = () => {
  return (
    <section className="gray-light-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h2 className="mt-50">Some of our US Board Certified Doctors</h2>
              <p>Discuss it all with your healthcare provider</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="single-blog-card card border-0 shadow-sm">
              <img
                src="https://doko.md/edpills/kn.png"
                className="card-img-top position-relative"
                alt="blog"
              />
              <div className="card-body" style={{ minHeight: "160px" }}>
                <h3 className="h5 card-title">
                  <a href="#">Dr. Kent Northcote</a>
                </h3>
                <p className="card-text">
                  Emergency Medicine. 20 years of experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-blog-card card border-0 shadow-sm">
              <img
                src="https://doko.md/edpills/chris.png"
                className="card-img-top position-relative"
                alt="blog"
              />
              <div className="card-body" style={{ minHeight: "160px" }}>
                <h3 className="h5 card-title">
                  <a href="#">Dr. Christine Nguyen</a>
                </h3>
                <p className="card-text">
                  Emergency Medicine. 20 years of experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-blog-card card border-0 shadow-sm">
              <img
                src="https://doko.md/edpills/maria.png"
                className="card-img-top"
                alt="blog"
              />
              <div className="card-body" style={{ minHeight: "160px" }}>
                <h3 className="h5 card-title">
                  <a href="#">Dr. Marianna Zelenak</a>
                </h3>
                <p className="card-text">
                  Emergency Medicine. 20 years of experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-blog-card card border-0 shadow-sm">
              <img
                src="https://doko.md/edpills/dd6.png"
                className="card-img-top"
                alt="blog"
              />
              <div className="card-body" style={{ minHeight: "160px" }}>
                <h3 className="h5 card-title">
                  <a href="#">And 100+ more Doctors</a>
                </h3>
                <p className="card-text">
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

export default CertifiedDoctors;
