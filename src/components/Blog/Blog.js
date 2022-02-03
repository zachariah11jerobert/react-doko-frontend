import React from "react";
import "./Blog.css";
import PillInfo from "./PillInfo/PillInfo";

import viagra from "../../assets/sildenafil-bottle.png";
import cialis from "../../assets/tadalafil-bottle.png";

const Blog = () => {
  return (
    <section id="blog" className="our-blog-section gray-light-bg blogsec">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div
              className="section-heading mb-5"
              style={{ textAlign: "center" }}
            >
              <br />
              <h2>Our Treatments for ED</h2>
              <p className="" style={{ marginBottom: "0em" }}>
                We offer prescription medications clinically proven to help
                improve erections.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-center align-item-center">
            <div className="ml-5" data-aos="fade-right">
              <PillInfo
                bgColor={"#c0eeea"}
                textColor={"rgb(36, 168, 157)"}
                pillName="Viagra (Sildenafil)"
                pillImage={viagra}
                subtitle={"(Previously 25mg $2, 50mg $4, 100mg $8)"}
              >
                Sildenafil is the active ingredient in Viagra. It is in the
                group of medicines that doctors call PDE-5 inhibitors and use to
                treat erectile dysfunction. It’s available from Doko MD in 25mg,
                50mg and 100mg strength.
              </PillInfo>
            </div>
            <div className="ml-5" data-aos="fade-left">
              <PillInfo
                bgColor={"#f6ecc6"}
                textColor={"rgb(236, 185, 105)"}
                pillName="Cialis (Tadalafil)"
                pillImage={cialis}
                subtitle={"(Previously 2.5mg $2, 5mg $4, 10mg $8 , 20mg $16)"}
              >
                Tadalafil is the active ingredient in Cialis. It is approved by
                the FDA to treat erectile dysfunction. It’s available from Doko
                MD in 2.5mg , 5mg, 10mg and 20mg strength.
              </PillInfo>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
