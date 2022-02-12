import hipaa_blue from "../../assets/hipaa_blue.png";
import sslencr from "../../assets/sslencr.png";

const Section15 = () => {
  return (
    <section
      id=""
      className="work-process-new"
      style={{ padding: "25px", backgroundColor: "#eee" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-8">
            <div className="section-heading text-center">
              <h2 style={{ letterSpacing: "0.08em" }}>
                Your data is protected
              </h2>
            </div>
          </div>
        </div>
        <br />
        <div className="row box-shadow">
          <div className="col-md-6">
            <img
              className="lib-img-show"
              src={hipaa_blue}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
          <div className="col-md-6">
            <img
              className="lib-img-show"
              src={sslencr}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section15;
