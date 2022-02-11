import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import doctor_chris from "../../assets/doctor-chris.png";
import doctor_maria from "../../assets/doctor-maria.png";
import doctor_kn from "../../assets/doctor-kn.png";

const CerifiedDoctorsCourousal = () => {
  return (
    <section id="doctorlist-ph">
      <div className="bg-theme-blue text-white pt-2 pb-2">
        <div className="justify-content-center" data-aos="fade-up">
          <div className="text-center">
            <h3>Some of our US Board Certified Doctors</h3>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <OwlCarousel className="owl-theme" loop margin={10} nav items="1">
          <div className="item">
            <div className="card border-0 shadow-sm">
              <img
                src={doctor_kn}
                className=""
                alt="blog"
              />
              <div className="card-body">
                <div
                  className="hero-content section-title text-center text-lg-left mt-lg-0"
                  //   style="text-align: center !important"
                >
                  <h3>Dr. Kent Northcote</h3>
                  <p style={{ fontSize: "1rem" }}>
                    Emergency Medicine. 20 years of experience.
                  </p>
                  <div className="action-btn mt-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card border-0 shadow-sm">
              <img
                src={doctor_maria}
                className=""
                alt="blog"
              />
              <div className="card-body">
                <div
                  className="hero-content section-title text-center text-lg-left mt-lg-0"
                  //   style="text-align: center !important"
                >
                  <h3>Dr. Marianna Zelenak</h3>
                  <p style={{ fontSize: "1rem" }}>
                    Emergency Medicine. 20 years of experience.
                  </p>
                  <div className="action-btn mt-4"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="card border-0 shadow-sm">
              <img
                src={doctor_chris}
                className=""
                alt="blog"
              />
              <div className="card-body">
                <div
                  className="hero-content section-title text-center text-lg-left mt-lg-0"
                  //   style="text-align: center !important"
                >
                  <h3>Dr. Christine Nguyen</h3>
                  <p style={{ fontSize: "1rem" }}>
                    Emergency Medicine. 20 years of experience.
                  </p>
                  <div className="action-btn mt-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card border-0 shadow-sm">
              <img
                src="https://doko.md/edpills/dd6.png"
                className=""
                alt="blog"
              />
              <div className="card-body">
                <div
                  className="hero-content section-title text-center text-lg-left mt-lg-0"
                  //   style="text-align: center !important"
                >
                  <h3>And 100+ more Doctors</h3>

                  <div className="action-btn mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default CerifiedDoctorsCourousal;
