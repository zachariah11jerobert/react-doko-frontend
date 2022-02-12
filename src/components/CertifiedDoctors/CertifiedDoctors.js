import doctor_chris from "../../assets/doctor-chris.png";
import doctor_maria from "../../assets/doctor-maria.png";
import doctor_kn from "../../assets/doctor-kn.png";
import dd6 from "../../assets/dd6.png";

const CertifiedDoctors = () => {
  return (
    <section className="bg-theme-blue">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h2
                className="text-white"
                style={{ marginTop: "50px !important" }}
              >
                Some of our US Board Certified Doctors
              </h2>
              <p className="text-white">
                Discuss it all with your healthcare provider
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div
              className="single-blog-card card border-0 shadow-sm"
              data-aos="fade-up"
            >
              <img
                src={doctor_kn}
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
            <div
              className="single-blog-card card border-0 shadow-sm"
              data-aos="fade-up"
            >
              <img
                src={doctor_chris}
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
            <div
              className="single-blog-card card border-0 shadow-sm"
              data-aos="fade-up"
            >
              <img src={doctor_maria} className="card-img-top" alt="blog" />
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
            <div
              className="single-blog-card card border-0 shadow-sm"
              data-aos="fade-up"
            >
              <img src={dd6} className="card-img-top" alt="blog" />
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
