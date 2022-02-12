import rod from "../../assets/rod.png";
import vect from "../../assets/vect.png";
import rod2 from "../../assets/rod2.png";
const Section13 = () => {
  return (
    <section
      id="reviwsslide"
      className="testimonial-section ptb-100"
      style={{ backgroundColor: "#3ebeb4", padding: "20px 0 80px" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-8">
            <div className="section-heading mb-5 text-center">
              <h2 style={{ color: "#fff" }}>
                Check what our Patients are Saying
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-lg-3">
            <div
              className="testimonial-single shadow-sm gray-light-bg rounded p-4"
              style={{ minHeight: "210px", backgroundColor: "#fff" }}
            >
              <blockquote>
                Doko MD service was very fast and helpful. The general physician
                and psychiatrist were very kind and helpful.
              </blockquote>
              <div className="client-ratting mt-2">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="client-info-wrap d-flex align-items-center mt-5">
              <div className="client-img mr-3">
                <img
                  src={vect}
                  alt="client"
                  width="60"
                  className="img-fluid rounded-circle shadow-sm"
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #009688",
                  }}
                />
              </div>
              <div className="client-info">
                <h5 className="mb-0" style={{ color: "#fff" }}>
                  Victoria A, CA
                </h5>
                <p className="mb-0" style={{ color: "#fff" }}>
                  USA
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6">
            <div
              className="testimonial-single shadow-sm gray-light-bg rounded p-4"
              style={{ minHeight: "210px", backgroundColor: "#fff" }}
            >
              <blockquote>
                As a senior, these are particularly stressful times especially
                as it relates to health and safety. It was reassuring to know I
                was able to get a professional medical diagnosis and treatment
                that resolved my problem. Should I be in need of medical
                services online I would certainly use Doko MD again. Greatly
                appreciated!
              </blockquote>
              <div className="client-ratting mt-2">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="client-info-wrap d-flex align-items-center mt-5">
              <div className="client-img mr-3">
                <img
                  src={rod}
                  alt="client"
                  width="60"
                  className="img-fluid rounded-circle shadow-sm"
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #009688",
                  }}
                />
              </div>
              <div className="client-info">
                <h5 className="mb-0" style={{ color: "#fff" }}>
                  D. Roderick, NY
                </h5>
                <p className="mb-0" style={{ color: "#fff" }}>
                  USA
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div
              className="testimonial-single shadow-sm gray-light-bg rounded p-4"
              style={{ minHeight: "210px", backgroundColor: "#fff" }}
            >
              <blockquote>
                Excellent doc. Great sense of humor also - but gave me good
                advice during a telemedicine appt. Highly recommend!
              </blockquote>
              <div className="client-ratting mt-2">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <i className="fa fa-star yel" aria-hidden="true"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="client-info-wrap d-flex align-items-center mt-5">
              <div className="client-img mr-3">
                <img
                  src={rod2}
                  alt="client"
                  width="60"
                  className="img-fluid rounded-circle shadow-sm"
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #009688",
                  }}
                />
              </div>
              <div className="client-info">
                <h5 className="mb-0" style={{ color: "#fff" }}>
                  Brent Clart , CA
                </h5>
                <p className="mb-0" style={{ color: "#fff" }}>
                  USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section13;
