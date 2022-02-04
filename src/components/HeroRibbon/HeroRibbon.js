import React from "react";
import "./heroRibbon.css";

import review from '../../assets/4.8new.png';
import img1 from '../../assets/mailicon3.png';
import img2 from '../../assets/mailicon1.png';
import img3 from '../../assets/mailicon2.png';

const HeroRibbon = () => {
  return (
    <section style={{ backgroundColor: "#1c2c46" }}>
      <div className="container_ribbon">
        <div className="flex-1of4">
          <img
            src={review}
            style={{ width: 250 }}
          />
        </div>

        <div className="flex-3of4 container_ribbon">
          <div className="box_ribbon">
            <img
              src={img1}
              alt="blog"
            />
            <div className="margin-left-10">
              <h4 style={{ color: "#fff" }}>No Monthly</h4>
              <p
                style={{
                  color: "#ffffffad",
                  fontSize: "17px",
                }}
              >
                Commitment.
              </p>
            </div>
          </div>

          <div className="box_ribbon">
            <img
              src={img2}
              alt="blog"
            />
            <div className="margin-left-10">
              <h4 style={{ color: "#fff" }}>FREE Doctor</h4>
              <p
                style={{
                  color: "#ffffffad",
                  fontSize: "17px",
                }}
              >
                Consultations
              </p>
            </div>
          </div>

          <div className="box_ribbon">
            <img
              src={img3}
              alt="blog"
            />
            <div className="margin-left-10">
              <h4 style={{ color: "#fff" }}>No Membership</h4>
              <p
                style={{
                  color: "#ffffffad",
                  fontSize: "17px",
                }}
              >
                Fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroRibbon;
