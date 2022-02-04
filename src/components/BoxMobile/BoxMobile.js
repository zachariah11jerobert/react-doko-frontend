import React from "react";
import './boxmobile.css';

const BoxMobile = () => {
  return (
    <div class="row" id="boxmobile01">
      <div class="col-12">
        <div
          class="my-lg-3 my-md-3 rounded white-bg shadow-sm p-5 box_mobile-header"
        >
          <div class="client-say">
            <p>FDA APPROVED</p>
          </div>
          <div class="media author-info mb-3" style={{marginTop: "1%"}}>
            <div class="media-body">
              <h5 class="mb-0" style={{color: "#fff"}}>
                Erectile Dysfunction
              </h5>

              <div class="row">
                <div class="col-6">
                  <div>
                    <img
                      src="https://rexmd.com/home/04/img/viagra.png"
                      style={{marginTop: "6%"}}
                    />
                    <br />
                    <span style={{marginTop: "0%"}}>Viagra® (sildenafil)</span>
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    <img
                      src="https://rexmd.com/home/04/img/cialis.png"
                      style={{marginTop: "6%"}}
                    />
                    <br />
                    <span style={{marginTop: "0%"}}>Cialis® (tadalafil)</span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="box_mobile-footer">From $1 per pill</div>
        </div>
      </div>
    </div>
  );
};

export default BoxMobile;
