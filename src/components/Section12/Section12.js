import rod from '../../assets/rod.png';
import vect from '../../assets/vect.png';

const Section12 = () => {
  return (
    <section
      id="clientslider"
      className="screenshots-section ptb-100 gray-light-bg"
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

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="testimonial-single shadow-sm gray-light-bg rounded p-4"
                style={{ minHeight: "210px", backgroundColor: "#fff" }}
              >
                <blockquote>
                  As a senior, these are particularly stressful times especially
                  as it relates to health and safety.
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
            <div className="carousel-item">
              <div
                className="testimonial-single shadow-sm gray-light-bg rounded p-4"
                style={{ minHeight: "210px", backgroundColor: "#fff" }}
              >
                <blockquote>
                  Doko MD service was very fast and helpful. The general
                  physician and psychiatrist were very kind and helpful.
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
            <div className="carousel-item">
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
                    Brent Clart , CA
                  </h5>
                  <p className="mb-0" style={{ color: "#fff" }}>
                    USA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section12;
