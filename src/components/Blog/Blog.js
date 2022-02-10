import React from "react";
import PillInfo from "./PillInfo/PillInfo";

import viagra from "../../assets/sildenafil-bottle.png";
import cialis from "../../assets/tadalafil-bottle.png";

import "./blog.css";

const Blog = () => {
  return (
    <section id="blog" className="bg-theme-blue">
      <div className="pt-3 pb-30">
        <div data-aos="fade-up">
          <div className="blog_header text-center">
            <h3 style={{ color: "rgb(232 169 71)" }}>Our Treatments for ED</h3>
            <p className="custtom-text-green pl-5 pr-5">
              We offer prescription medications clinically proven to help
              improve erections.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center align-item-center flex-wrap">
          <div data-aos="zoom-in">
            <PillInfo
              bgColor={"rgb(85 156 227 / 15%)"}
              textColor={"rgb(85 156 227)"}
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
              bgColor={"rgb(232 169 71 / 15%)"}
              textColor={"rgb(232 169 71)"}
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
