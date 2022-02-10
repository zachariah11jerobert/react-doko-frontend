import React from "react";
import PillInfo from "./PillInfo/PillInfo";

import viagra from "../../assets/sildenafil-bottle.png";
import cialis from "../../assets/tadalafil-bottle.png";

const Blog = () => {
  return (
    <section id="blog" className="bg-theme-blue">
      <div className="container pb-50" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="mb-5" style={{ textAlign: "center" }}>
              <br />
              <h2 className="text-white">Our Treatments for ED</h2>
              <p className="text-white" style={{ marginBottom: "0em" }}>
                We offer prescription medications clinically proven to help
                improve erections.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-item-center flex-wrap">
          <div data-aos="zoom-in">
            <PillInfo
              bgColor={"#c0eeea"}
              textColor={"rgb(36, 168, 157)"}
              pillName="Viagra (Sildenafil)"
              pillImage={viagra}
              subtitle={[
                { qty: "25mg", price: "$2" },
                { qty: "50mg", price: "$4" },
                { qty: "100mg", price: "$8" },
              ]}
            >
              Sildenafil is the active ingredient in Viagra. It is in the group
              of medicines that doctors call PDE-5 inhibitors and use to treat
              erectile dysfunction. It’s available from Doko MD in 25mg, 50mg
              and 100mg strength.
            </PillInfo>
          </div>
          <div data-aos="zoom-in">
            <PillInfo
              bgColor={"#f6ecc6"}
              textColor={"rgb(236, 185, 105)"}
              pillName="Cialis (Tadalafil)"
              pillImage={cialis}
              subtitle={[
                { qty: "2.5mg", price: "$2" },
                { qty: "5mg", price: "$4" },
                { qty: "10mg", price: "$8" },
                { qty: "20mg", price: "$16" },
              ]}
            >
              Tadalafil is the active ingredient in Cialis. It is approved by
              the FDA to treat erectile dysfunction. It’s available from Doko MD
              in 2.5mg , 5mg, 10mg and 20mg strength.
            </PillInfo>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
};

export default Blog;
