import React from "react";

const Section15 = () => {
  return (
    <section
      id=""
      class="work-process-new"
      style={{padding: "25px", backgroundColor: "#eee"}}
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-8">
            <div class="section-heading text-center">
              <h2 style={{letterSpacing: "0.08em"}}>Your data is protected</h2>
            </div>
          </div>
        </div>
        <br />
        <div class="row box-shadow">
          <div
            class="col-md-6"
            // style="/*box-shadow: 0 3px 20px 0 rgb(0 0 0 / 10%);*/"
          >
            <img
              class="lib-img-show"
              src="https://doko.md/edpills/hipaa_blue.png"
              style={{width: "100%", borderRadius: "10px"}}
            />
          </div>
          <div
            class="col-md-6"
            // style="/*box-shadow: 0 3px 20px 0 rgb(0 0 0 / 10%); */"
          >
            <img
              class="lib-img-show"
              src="https://doko.md/edpills/sslencr.png"
              style={{width: "100%", borderRadius: "10px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section15;
