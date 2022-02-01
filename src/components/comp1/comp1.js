import React from "react";

const Comp1 = () => {
  return (
    <div class="row" id="boxdesk01">
      <div class="col-6">
        <div class="testimonial-quote-wrap inline_testimonial-quote-wrap my-lg-3 my-md-3 rounded white-bg shadow-sm p-5">
          <div class="client-say">
            <p>FDA APPROVED</p>
          </div>
          <div class="media author-info mb-3">
            <div class="media-body">
              <h5 class="mb-0" style={{ color: "#fff" }}>
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
      <div class="col-6">
        <div class="testimonial-quote-wrap inline_testimonial-quote-wrap2 my-lg-3 my-md-3 rounded white-bg shadow-sm p-5">
          <div class="client-say">
            <p>FDA APPROVED</p>
          </div>
          <div class="media author-info mb-3">
            <div class="media-body">
              <h5 class="mb-0" style={{ color: "#fff" }}>
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
