import React from "react";

const Comp1 = () => {
  return (
    <div className="row" id="boxdesk01">
      <div className="col-6">
        <div className="testimonial-quote-wrap inline_testimonial-quote-wrap my-lg-3 my-md-3 rounded white-bg shadow-sm p-5">
          <div className="client-say">
            <p>FDA APPROVED</p>
          </div>
          <div className="media author-info mb-3">
            <div className="media-body">
              <h5 className="mb-0" style={{ color: "#fff" }}>
                Erectile Dysfunction
              </h5>
              <div>
                <img
                  src="https://rexmd.com/home/04/img/viagra.png"
                  style={{ marginTop: "6%" }}
                />
                <span style={{ marginTop: "0%" }}>Viagra® (sildenafil)</span>
              </div>
            </div>
          </div>
          <div className="inline_vigara">From $1 per pill</div>
        </div>
      </div>
      <div className="col-6">
        <div className="testimonial-quote-wrap inline_testimonial-quote-wrap2 my-lg-3 my-md-3 rounded white-bg shadow-sm p-5">
          <div className="client-say">
            <p>FDA APPROVED</p>
          </div>
          <div className="media author-info mb-3">
            <div className="media-body">
              <h5 className="mb-0" style={{ color: "#fff" }}>
                Erectile Dysfunction
              </h5>
              <div>
                <img
                  src="https://rexmd.com/home/04/img/cialis.png"
                  style={{ marginTop: "6%" }}
                />
                <span style={{ marginTop: "0%" }}>Cialis</span>
              </div>
            </div>
          </div>
          <div className="inline_cip">From $1 per pill</div>
        </div>
      </div>
    </div>
  );
};

export default Comp1;
